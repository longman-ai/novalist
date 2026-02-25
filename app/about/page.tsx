import CTA from '@/components/CTA'

export default function AboutPage() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">About NovaList</h1>
          <p className="text-xl text-gray-600 mb-12">
            We&apos;re an AI-native agency built from the ground up to help UK service businesses grow smarter, not harder.
          </p>

          <h2 className="text-2xl font-bold mb-4">The Story</h2>
          <p className="text-gray-600 mb-6">
            NovaList was founded by Gatluak Thiep with a simple observation: UK service businesses are sitting on a goldmine of 
            untapped efficiency. While enterprise companies pour millions into AI transformation, small and mid-size service businesses 
            are left behind — still running on manual processes, inconsistent marketing, and hope-based lead generation.
          </p>
          <p className="text-gray-600 mb-8">
            We exist to change that. NovaList brings enterprise-grade AI capabilities to service businesses at a fraction of the cost, 
            packaged as done-for-you services that deliver results from day one.
          </p>

          <h2 className="text-2xl font-bold mb-4">Meet the Founder</h2>
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-2">Gatluak Thiep</h3>
            <p className="text-electric text-sm mb-4">Founder & AI Strategist</p>
            <p className="text-gray-600 mb-4">
              Gatluak is an AI automation specialist who&apos;s spent years at the intersection of artificial intelligence and 
              practical business operations. He builds the systems that other agencies talk about.
            </p>
            <p className="text-gray-600">
              His approach is simple: understand the business first, then apply AI where it creates real, measurable impact. 
              No hype. No buzzwords. Just systems that save time and generate revenue.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { title: 'AI-Native', desc: 'We don\'t bolt AI onto old processes. We design workflows around AI from the start.' },
              { title: 'Results-First', desc: 'Every system we build is measured by business outcomes — time saved, leads generated, revenue grown.' },
              { title: 'UK-Focused', desc: 'We understand the UK market, regulations, and business culture. No one-size-fits-all templates.' },
              { title: 'Human + AI', desc: 'AI handles the heavy lifting. Humans provide the strategy, creativity, and quality control.' },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">A Thiep Holdings Ltd Company</h2>
          <p className="text-gray-600">
            NovaList operates under Thiep Holdings Ltd, a UK-registered company. We&apos;re fully insured and committed to 
            data protection compliance under UK GDPR.
          </p>
        </div>
      </section>
      <CTA />
    </>
  )
}
