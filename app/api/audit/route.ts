import { NextRequest, NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

// Simple in-memory rate limit: max 5 requests per IP per minute
const rateMap = new Map<string, number[]>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const window = 60_000
  const max = 5
  const hits = (rateMap.get(ip) || []).filter((t) => now - t < window)
  if (hits.length >= max) return false
  hits.push(now)
  rateMap.set(ip, hits)
  return true
}

function normalizeUrl(raw: string): string {
  let url = raw.trim()
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url
  try {
    new URL(url)
    return url
  } catch {
    throw new Error('Invalid URL')
  }
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown'
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: 'Rate limit exceeded. Try again in a minute.' }, { status: 429 })
    }

    const body = await req.json()
    const { url: rawUrl } = body
    if (!rawUrl) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    let url: string
    try {
      url = normalizeUrl(rawUrl)
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 })
    }

    // Scrape the page
    let html: string
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'NovaList-ContentScorer/1.0' },
        signal: AbortSignal.timeout(10_000),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      html = await res.text()
    } catch (e: any) {
      return NextResponse.json({ error: `Could not fetch website: ${e.message}` }, { status: 422 })
    }

    // Extract content
    const $ = cheerio.load(html)
    const title = $('title').text().trim()
    const metaDesc = $('meta[name="description"]').attr('content') || ''
    const metaKeywords = $('meta[name="keywords"]').attr('content') || ''
    const ogTitle = $('meta[property="og:title"]').attr('content') || ''
    const ogDesc = $('meta[property="og:description"]').attr('content') || ''
    const h1s = $('h1').map((_, el) => $(el).text().trim()).get()
    const h2s = $('h2').map((_, el) => $(el).text().trim()).get().slice(0, 10)
    const h3s = $('h3').map((_, el) => $(el).text().trim()).get().slice(0, 10)

    // Get visible text (limited)
    $('script, style, noscript, nav, footer, header').remove()
    const bodyText = $('body').text().replace(/\s+/g, ' ').trim().slice(0, 3000)

    // Find CTAs
    const links = $('a').map((_, el) => $(el).text().trim()).get().slice(0, 30)
    const buttons = $('button').map((_, el) => $(el).text().trim()).get().slice(0, 20)

    const pageData = {
      url,
      title,
      metaDescription: metaDesc,
      metaKeywords,
      ogTitle,
      ogDescription: ogDesc,
      h1s,
      h2s,
      h3s,
      bodyTextPreview: bodyText.slice(0, 2000),
      links: links,
      buttons: buttons,
    }

    // Call OpenAI
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 })
    }

    const prompt = `You are a website content quality analyst. Analyze this website's homepage content and score it.

Website data:
${JSON.stringify(pageData, null, 2)}

Score these 4 categories from 0-100. Be critical but fair. Most average sites score 40-65.

Return ONLY valid JSON matching this exact schema:
{
  "overall": <number 0-100>,
  "categories": {
    "messagingClarity": {
      "score": <number>,
      "verdict": "<one sentence>",
      "fix": "<one specific actionable fix>"
    },
    "seoFoundations": {
      "score": <number>,
      "verdict": "<one sentence>",
      "fix": "<one specific actionable fix>"
    },
    "contentFreshness": {
      "score": <number>,
      "verdict": "<one sentence>",
      "fix": "<one specific actionable fix>"
    },
    "ctaEffectiveness": {
      "score": <number>,
      "verdict": "<one sentence>",
      "fix": "<one specific actionable fix>"
    }
  },
  "quickWins": [
    "<specific actionable improvement 1>",
    "<specific actionable improvement 2>",
    "<specific actionable improvement 3>"
  ]
}`

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.3,
        response_format: { type: 'json_object' },
      }),
    })

    if (!openaiRes.ok) {
      const err = await openaiRes.text()
      console.error('OpenAI error:', err)
      return NextResponse.json({ error: 'Analysis failed. Please try again.' }, { status: 502 })
    }

    const openaiData = await openaiRes.json()
    const analysis = JSON.parse(openaiData.choices[0].message.content)

    // Generate a simple ID from url + timestamp
    const id = Buffer.from(`${url}:${Date.now()}`).toString('base64url').slice(0, 16)

    return NextResponse.json({
      id,
      url,
      ...analysis,
      analyzedAt: new Date().toISOString(),
    })
  } catch (e: any) {
    console.error('Audit error:', e)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
