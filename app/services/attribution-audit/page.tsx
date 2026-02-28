import CTA from '@/components/CTA'

export default function AttributionAuditPage() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Stop Wasting Ad Spend</h1>
          <p className="text-xl text-gray-600 mb-12">
            We audit your paid media and show you exactly where money is being wasted — backed by your own revenue data, not platform vanity metrics.
          </p>

          <h2 className="text-2xl font-bold mb-4">The Problem</h2>
          <p className="text-gray-600 mb-8">
            Google and Meta are telling you your ads are working. But are they? Platforms inflate their numbers with view-through conversions, 
            double attribution, and generous counting windows. Most businesses have no idea what&apos;s actually driving revenue 
            and what&apos;s just burning cash.
          </p>

          <h2 className="text-2xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-600 mb-8">
            We run a one-off attribution audit: pulling your ad platform data, cross-referencing it with your CRM&apos;s actual 
            closed deals, and showing you the real numbers. No guesswork — just your ad spend mapped against verified revenue.
          </p>

          <h2 className="text-2xl font-bold mb-4">What You Get</h2>
          <ul className="space-y-3 text-gray-600 mb-8">
            <li className="flex gap-3"><span className="text-electric">✓</span> Platform vs reality comparison — see exactly where numbers are inflated</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Campaign-by-campaign verdict: cut, keep, fix, or scale</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Wasted spend identified in £ — not percentages, real money</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Detailed PDF report with actionable recommendations</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Personalised Loom video walkthrough of your findings</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> ROI projection showing what you&apos;ll save</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <div>
                  <p className="font-semibold">One-Off Attribution Audit</p>
                  <p className="text-sm text-gray-500">Full report + Loom walkthrough</p>
                </div>
                <p className="text-xl font-bold">£750</p>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <div>
                  <p className="font-semibold">Audit + 1 Month Optimisation</p>
                  <p className="text-sm text-gray-500">We implement the fixes for you</p>
                </div>
                <p className="text-xl font-bold">£2,000</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Ongoing Management</p>
                  <p className="text-sm text-gray-500">Continuous optimisation against real data</p>
                </div>
                <p className="text-xl font-bold">£2,500-4,000/mo</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">The Result</h2>
          <p className="text-gray-600 mb-8">
            Most clients discover <strong>20-40% of their ad spend</strong> is going to campaigns with no verified ROI. 
            The audit pays for itself within the first month — usually within the first week.
          </p>

          <div className="text-center">
            <a href="/contact" className="inline-block bg-electric text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition">
              Book a Free Discovery Call
            </a>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
