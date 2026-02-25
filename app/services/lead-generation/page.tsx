import CTA from '@/components/CTA'

export default function LeadGenerationPage() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">AI Lead Generation</h1>
          <p className="text-xl text-gray-600 mb-12">
            Fill your pipeline with qualified prospects through personalised, AI-powered outreach that feels human — because it is, just faster.
          </p>

          <h2 className="text-2xl font-bold mb-4">The Problem</h2>
          <p className="text-gray-600 mb-8">
            You&apos;re great at what you do. But finding new clients consistently? That&apos;s a different skill entirely. 
            Most service businesses rely on referrals and hope — which works until it doesn&apos;t.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
          <p className="text-gray-600 mb-8">
            We build AI-powered outbound systems that identify your ideal prospects, craft personalised messages at scale, 
            and nurture them into discovery calls. You get a predictable pipeline without hiring a sales team.
          </p>

          <h2 className="text-2xl font-bold mb-4">What You Get</h2>
          <ul className="space-y-3 text-gray-600 mb-8">
            <li className="flex gap-3"><span className="text-electric">✓</span> ICP research and qualified lead lists</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> 200+ personalised cold emails per month</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> LinkedIn outbound sequences</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Multi-step follow-up automation</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> CRM setup and pipeline tracking</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Weekly performance reporting</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">The Result</h2>
          <p className="text-gray-600">
            Clients typically book <strong>8-12 discovery calls per month</strong> from outbound alone, 
            with a <strong>40-60% increase in qualified leads</strong> within the first 90 days.
          </p>
        </div>
      </section>
      <CTA />
    </>
  )
}
