import CTA from '@/components/CTA'

export default function ContentEnginePage() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">AI Content Engine</h1>
          <p className="text-xl text-gray-600 mb-12">
            Evergreen content systems that build authority, drive inbound leads, and get you cited 
            by AI search tools — all in your authentic voice.
          </p>

          <h2 className="text-2xl font-bold mb-4">The Problem</h2>
          <p className="text-gray-600 mb-4">
            You know you should be creating content. But between client work, operations, and everything else, 
            it falls to the bottom of the list. You post for 3 weeks, get busy, and your online presence goes dark.
          </p>
          <p className="text-gray-600 mb-8">
            Meanwhile, AI search tools like ChatGPT, Perplexity, and Google AI Overviews are changing how people 
            find businesses. If your content isn&apos;t structured for these tools, you&apos;re becoming invisible — 
            even with decent traditional SEO.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
          <p className="text-gray-600 mb-4">
            We build you an always-on content engine with two layers:
          </p>
          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-electric pl-6">
              <h3 className="font-bold mb-1">Brand Voice Extraction</h3>
              <p className="text-gray-600 text-sm">
                Before writing anything, we collect 15-20 samples of your real writing — emails, proposals, 
                presentations, Slack messages. Our AI builds a Voice Profile so everything we produce sounds 
                like you, not a robot. Clients report 5-7x more output with better engagement.
              </p>
            </div>
            <div className="border-l-4 border-electric pl-6">
              <h3 className="font-bold mb-1">Evergreen Campaign Architecture</h3>
              <p className="text-gray-600 text-sm">
                We build 2-3 always-on campaigns per audience segment. Each one is a full funnel: 
                SEO content → lead magnet → email nurture → booking. Seasonal and news content slots 
                into existing structures instead of creating chaos.
              </p>
            </div>
            <div className="border-l-4 border-electric pl-6">
              <h3 className="font-bold mb-1">Answer Engine Optimisation (AEO)</h3>
              <p className="text-gray-600 text-sm">
                We structure your content so AI search tools cite your business as the answer. This means 
                schema markup, FAQ-optimised pages, authoritative long-form content, and strategic topic 
                clustering — designed for both Google and AI agents.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">What You Get</h2>
          <ul className="space-y-3 text-gray-600 mb-8">
            <li className="flex gap-3"><span className="text-electric">✓</span> Custom Brand Voice Profile built from your real writing</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> 4 SEO + AEO-optimised blog posts per month</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> 12-20 social media posts per month (LinkedIn, X, Instagram)</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Monthly email newsletter in your voice</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> AI search visibility monitoring (are you getting cited?)</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Content calendar, scheduling, and performance reporting</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">The Result</h2>
          <p className="text-gray-600 mb-4">
            Clients typically see a <strong>3-5x increase in content output</strong> while spending <strong>80% less time</strong> on 
            content creation. Within 3-6 months, organic inbound leads become a reliable growth channel — from both 
            traditional search and AI-powered discovery.
          </p>
        </div>
      </section>
      <CTA />
    </>
  )
}
