import CTA from '@/components/CTA'

export default function LeadGenerationPage() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">LinkedIn Growth Engine</h1>
          <p className="text-xl text-gray-600 mb-12">
            Strategic engagement that fills your pipeline with qualified prospects - because LinkedIn in 2026 
            rewards conversations, not just content.
          </p>

          <h2 className="text-2xl font-bold mb-4">The Problem</h2>
          <p className="text-gray-600 mb-4">
            You&apos;re great at what you do. But finding new clients consistently? That&apos;s a different skill entirely. 
            Most service businesses rely on referrals and hope - which works until it doesn&apos;t.
          </p>
          <p className="text-gray-600 mb-8">
            And if you&apos;re just posting on LinkedIn hoping for leads, the 2026 algorithm has bad news: 
            it now weights <strong>comment engagement</strong> as a primary signal. Posting alone isn&apos;t enough anymore.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
          <p className="text-gray-600 mb-4">
            We build a complete LinkedIn growth system with three pillars:
          </p>
          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-electric pl-6">
              <h3 className="font-bold mb-1">Strategic Comment Engine</h3>
              <p className="text-gray-600 text-sm">
                We identify high-value threads in your industry and craft thoughtful, expert comments 
                from your founder account. This builds authority, drives profile visits, and triggers 
                LinkedIn&apos;s algorithm to amplify your content. Low effort to deliver, massive visibility gains.
              </p>
            </div>
            <div className="border-l-4 border-electric pl-6">
              <h3 className="font-bold mb-1">AI-Powered Posting</h3>
              <p className="text-gray-600 text-sm">
                Consistent posts in your authentic voice (extracted via our Brand Voice Profile), 
                designed to spark the conversations that the algorithm rewards. Not generic 
                &ldquo;thought leadership&rdquo; - real insights from your expertise.
              </p>
            </div>
            <div className="border-l-4 border-electric pl-6">
              <h3 className="font-bold mb-1">Buying Signal Detection</h3>
              <p className="text-gray-600 text-sm">
                AI monitors Companies House filings, job posts, website changes, and review velocity 
                to spot prospects entering growth mode. When someone in your ICP is ready to buy, 
                you&apos;re already in their feed.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">What You Get</h2>
          <ul className="space-y-3 text-gray-600 mb-8">
            <li className="flex gap-3"><span className="text-electric">✓</span> Done-for-you strategic commenting (20+ per week)</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> 3-5 LinkedIn posts per week in your voice</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Buying signal monitoring and prospect alerts</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Personalised outreach triggered by intent signals</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> CRM integration and pipeline tracking</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Weekly performance reporting</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">The Result</h2>
          <p className="text-gray-600">
            Clients typically book <strong>8-12 discovery calls per month</strong> from LinkedIn alone, 
            with a <strong>40-60% increase in qualified leads</strong> within the first 90 days. 
            Your founder becomes a recognised voice in your industry - without spending hours on LinkedIn every day.
          </p>
        </div>
      </section>
      <CTA />
    </>
  )
}
