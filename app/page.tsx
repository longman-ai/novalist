import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import CTA from '@/components/CTA'

const services = [
  {
    title: 'AI Content Engine',
    description: 'Evergreen campaigns that compound - plus AI search optimisation so you show up in ChatGPT, Perplexity, and Google AI Overviews.',
    features: [
      'Brand voice extraction: AI trained on YOUR writing, not generic templates',
      'Answer Engine Optimisation (AEO): get cited by AI search tools',
      'Always-on funnels: SEO → lead magnet → email nurture → bookings',
      'Content that compounds - not one-off posts that fizzle',
    ],
    href: '/services/content-engine',
  },
  {
    title: 'LinkedIn Growth Engine',
    description: 'Strategic engagement that builds your authority - because LinkedIn now rewards conversations, not just content.',
    features: [
      'Done-for-you strategic commenting on high-value threads',
      'AI-powered posts in your authentic voice',
      'Buying signal monitoring: Companies House, job posts, review velocity',
      'Engagement-to-lead tracking straight into your CRM',
    ],
    href: '/services/lead-generation',
  },
  {
    title: 'Automation Infrastructure',
    description: 'Eliminate repetitive work and build intelligent systems that scale without adding headcount.',
    features: [
      'Signal monitoring and CRM automation',
      'Client onboarding and follow-up workflows',
      'Reporting dashboards and analytics',
      'Custom AI integrations (Make.com, Zapier, APIs)',
    ],
    href: '/services/automation',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Pain Point */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Sound Familiar?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "You're brilliant at delivery but invisible online",
              "Your website doesn't explain why anyone should care",
              "You post on LinkedIn for 3 weeks then get busy",
              "You're not showing up in AI search results (and competitors are)",
              "You've been burned by agencies that overpromise and underdeliver",
              "Your pipeline depends entirely on referrals and luck",
            ].map((pain, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-red-400 mt-1 text-lg">✗</span>
                <p className="text-gray-600">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">What our systems deliver</p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-electric">20+</p>
              <p className="text-sm text-gray-500 mt-1">Hours saved per week</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-electric">3-5x</p>
              <p className="text-sm text-gray-500 mt-1">Content output increase</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-electric">100%</p>
              <p className="text-sm text-gray-500 mt-1">Your voice, not ours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Three Systems That Work While You Sleep</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We don&apos;t do one-off campaigns. We build marketing infrastructure that compounds over time.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Voice Profiling Differentiator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-electric text-sm font-semibold uppercase tracking-wider mb-3">Our secret weapon</p>
              <h2 className="text-3xl font-bold mb-4">We Don&apos;t Do Generic AI Content</h2>
              <p className="text-gray-600 mb-4">
                Before we write a single word, we extract your brand voice from your emails, Slack messages, 
                presentations, and past content. The result? AI-powered content that sounds like <strong>you</strong>, not a robot.
              </p>
              <p className="text-gray-600">
                This is why our clients see 5-7x more output with <em>better</em> engagement - because authenticity 
                beats volume every time.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">How it works</p>
              <div className="space-y-4">
                {[
                  { step: '01', text: 'We collect 15-20 samples of your real writing' },
                  { step: '02', text: 'Our AI builds your unique Voice Profile' },
                  { step: '03', text: 'Every piece of content matches your tone, style, and personality' },
                  { step: '04', text: 'You approve, we publish - indistinguishable from your own work' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <span className="text-electric font-bold text-sm">{item.step}</span>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-electric text-sm font-semibold uppercase tracking-wider mb-3">New in 2026</p>
          <h2 className="text-3xl font-bold mb-4">Is Your Business Showing Up in AI Search?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            ChatGPT, Perplexity, and Google AI Overviews are changing how people find businesses. 
            Traditional SEO isn&apos;t enough anymore - you need <strong>Answer Engine Optimisation (AEO)</strong> to 
            ensure AI tools cite your business as the answer.
          </p>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Most UK service businesses don&apos;t even know this shift is happening. The ones who move now will 
            dominate their category for years. We build content that both Google <em>and</em> AI agents love.
          </p>
          <a href="/audit" className="inline-block bg-electric text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition">
            Check Your AI Visibility - Free
          </a>
        </div>
      </section>

      {/* Anti-Agency Trust */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">We&apos;re Not Like Other Agencies</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We know the industry has a trust problem. Here&apos;s how we&apos;re different.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: 'No Black Boxes',
                desc: 'You see exactly what we do, how we do it, and what it costs. Our AI stack is fully transparent.',
              },
              {
                title: 'Your Voice, Not Ours',
                desc: 'We extract your brand voice first. Everything we produce sounds like you - because it is you, amplified.',
              },
              {
                title: 'Systems, Not Deliverables',
                desc: "We don't sell you 10 blog posts. We build marketing systems that generate leads on autopilot.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tool CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Ready to Talk? Start Here.</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get an instant AI-powered content score for your website. See exactly where your messaging, 
            SEO, and AI search visibility stand - in 30 seconds, completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/audit" className="inline-block bg-electric text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition">
              Score My Website - Free
            </a>
            <a href="/contact" className="inline-block border border-gray-300 px-8 py-4 rounded-lg text-lg font-medium hover:border-electric hover:text-electric transition">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
