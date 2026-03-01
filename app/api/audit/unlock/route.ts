import { NextRequest, NextResponse } from 'next/server'

interface CategoryResult {
  score: number
  verdict: string
  fix: string
}

interface AuditCategories {
  messagingClarity: CategoryResult
  seoFoundations: CategoryResult
  contentFreshness: CategoryResult
  ctaEffectiveness: CategoryResult
}

const CATEGORY_LABELS: Record<string, string> = {
  messagingClarity: 'Messaging Clarity',
  seoFoundations: 'SEO Foundations',
  contentFreshness: 'Content Freshness',
  ctaEffectiveness: 'CTA Effectiveness',
}

function getScoreColor(score: number): string {
  if (score >= 75) return '#22c55e'
  if (score >= 50) return '#f59e0b'
  return '#ef4444'
}

function buildResultsEmail({
  firstName,
  url,
  overall,
  categories,
  quickWins,
}: {
  firstName?: string
  url: string
  overall: number
  categories: AuditCategories
  quickWins: string[]
}): string {
  const name = firstName || 'there'
  const overallColor = getScoreColor(overall)

  const categoryRows = Object.entries(categories)
    .map(([key, cat]) => {
      const label = CATEGORY_LABELS[key] || key
      const color = getScoreColor(cat.score)
      const barWidth = Math.max(cat.score, 5)
      return `
        <tr>
          <td style="padding: 16px 20px; border-bottom: 1px solid #f3f4f6;">
            <div style="font-weight: 600; color: #1e293b; margin-bottom: 6px;">${label}</div>
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <div style="flex: 1; background: #f3f4f6; border-radius: 999px; height: 8px; overflow: hidden;">
                <div style="width: ${barWidth}%; background: ${color}; height: 100%; border-radius: 999px;"></div>
              </div>
              <span style="font-weight: 700; color: ${color}; font-size: 14px; min-width: 28px; text-align: right;">${cat.score}</span>
            </div>
            <div style="color: #64748b; font-size: 13px; margin-bottom: 4px;">${cat.verdict}</div>
            <div style="background: #f0f9ff; border-left: 3px solid #3b82f6; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
              <span style="font-weight: 600; color: #3b82f6; font-size: 13px;">Fix: </span>
              <span style="color: #1e293b; font-size: 13px;">${cat.fix}</span>
            </div>
          </td>
        </tr>`
    })
    .join('')

  const quickWinRows = quickWins
    .map(
      (win, i) => `
        <tr>
          <td style="padding: 8px 20px;">
            <div style="display: flex; gap: 10px; align-items: flex-start;">
              <span style="background: #22c55e; color: white; font-weight: 700; font-size: 12px; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;">${i + 1}</span>
              <span style="color: #1e293b; font-size: 14px; line-height: 1.5;">${win}</span>
            </div>
          </td>
        </tr>`
    )
    .join('')

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; background: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 32px;">
      <span style="font-size: 20px; font-weight: 700; color: #0f172a;">Nova<span style="color: #3b82f6;">List</span></span>
    </div>

    <!-- Main Card -->
    <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      
      <!-- Score Header -->
      <div style="background: linear-gradient(135deg, #0f172a, #1e293b); padding: 40px 20px; text-align: center;">
        <p style="color: #94a3b8; font-size: 14px; margin: 0 0 4px;">Website Content Score for</p>
        <p style="color: #3b82f6; font-size: 14px; font-weight: 500; margin: 0 0 24px; word-break: break-all;">${url}</p>
        <div style="display: inline-block; width: 100px; height: 100px; border-radius: 50%; border: 6px solid ${overallColor}; line-height: 88px; text-align: center;">
          <span style="font-size: 36px; font-weight: 800; color: white;">${overall}</span>
        </div>
        <p style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 16px 0 0;">
          ${overall >= 75 ? 'Great — your content is strong!' : overall >= 50 ? 'Decent — but there\'s room to grow.' : 'Needs work — here\'s how to fix it.'}
        </p>
      </div>

      <!-- Greeting -->
      <div style="padding: 24px 20px 8px;">
        <p style="color: #1e293b; font-size: 15px; line-height: 1.6; margin: 0;">
          Hi ${name},<br><br>
          Here's your full website content audit. Below you'll find your scores across 4 key areas, specific fixes for each, and 3 quick wins you can implement today.
        </p>
      </div>

      <!-- Category Breakdown -->
      <div style="padding: 16px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          ${categoryRows}
        </table>
      </div>

      <!-- Quick Wins -->
      <div style="padding: 16px 20px 8px;">
        <h3 style="color: #0f172a; font-size: 16px; margin: 0 0 12px;">⚡ 3 Quick Wins</h3>
      </div>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
        ${quickWinRows}
      </table>

      <!-- CTA -->
      <div style="padding: 32px 20px; text-align: center;">
        <p style="color: #64748b; font-size: 14px; margin: 0 0 16px;">Want expert help improving your score?</p>
        <a href="https://calendly.com/gatluak-novalist" style="display: inline-block; background: #3b82f6; color: white; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; text-decoration: none;">
          Book a Free Strategy Call
        </a>
        <p style="color: #94a3b8; font-size: 12px; margin: 16px 0 0;">15 minutes. No commitment. No hard sell.</p>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; padding: 24px 0;">
      <p style="color: #94a3b8; font-size: 12px; margin: 0;">
        © 2026 NovaList — AI-Powered Growth for UK Service Businesses<br>
        <a href="https://novalist.co" style="color: #3b82f6; text-decoration: none;">novalist.co</a>
      </p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, url, score, categories, quickWins } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    // Push to HubSpot
    const hubspotToken = process.env.HUBSPOT_TOKEN
    if (hubspotToken) {
      try {
        const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${hubspotToken}`,
          },
          body: JSON.stringify({
            properties: {
              email,
              ...(firstName ? { firstname: firstName } : {}),
              lead_source: 'content_scorer',
              website_audited: url || '',
              audit_score: String(score || 0),
            },
          }),
        })

        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          if (res.status !== 409) {
            console.error('HubSpot error:', res.status, data)
          }
        }
      } catch (e) {
        console.error('HubSpot push failed:', e)
      }
    }

    // Send results email via Resend
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey && categories && quickWins) {
      try {
        const html = buildResultsEmail({
          firstName,
          url: url || 'Unknown',
          overall: score || 0,
          categories,
          quickWins,
        })

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: 'NovaList <reports@novalist.co>',
            to: email,
            subject: `Your Website Content Score: ${score}/100 — ${url}`,
            html,
          }),
        })
      } catch (e) {
        console.error('Resend email failed:', e)
        // Don't fail the unlock if email fails
      }
    }

    return NextResponse.json({ unlocked: true })
  } catch (e: any) {
    console.error('Unlock error:', e)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
