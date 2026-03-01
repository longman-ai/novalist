import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, url, score } = await req.json()

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
          // 409 = contact already exists — that's fine
          if (res.status !== 409) {
            console.error('HubSpot error:', res.status, data)
          }
        }
      } catch (e) {
        console.error('HubSpot push failed:', e)
        // Don't fail the unlock if HubSpot is down
      }
    }

    return NextResponse.json({ unlocked: true })
  } catch (e: any) {
    console.error('Unlock error:', e)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
