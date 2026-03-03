import ServiceCard from '@/components/ServiceCard'
import CTA from '@/components/CTA'

const services = [
  {
    title: 'AI Content Engine',
    description: 'Evergreen campaign architecture that compounds over time — not one-off content launches that fizzle out.',
    features: [
      '2-3 always-on campaigns per audience segment',
      'Full-funnel: SEO content → lead magnet → email nurture → booking',
      'Seasonal and news content slots into existing structures',
      'Custom brand voice AI training',
      'Content performance tracking and continuous optimisation',
    ],
    href: '/services/content-engine',
  },
  {
    title: 'AI Lead Generation',
    description: 'Done-for-you LinkedIn presence, buying signal detection, and personalised outreach — so you reach the right people at the right moment.',
    features: [
      'LinkedIn Presence Engine: AI monitors feeds and generates contextual posts/comments',
      'AI Intent Sprint: track Companies House filings, job posts, website changes, review velocity',
      'Personalised outreach triggered when prospects enter growth mode',
      'Engagement-to-lead conversion tracking in your CRM',
      'A/B testing and continuous optimisation',
    ],
    href: '/services/lead-generation',
  },
  {
    title: 'Automation Infrastructure',
    description: 'Eliminate the repetitive work that\'s eating your margins and build intelligent systems that scale without adding headcount.',
    features: [
      'Buying signal monitoring and alert pipelines',
      'CRM automation and lead routing',
      'Client onboarding and follow-up sequences',
      'Custom dashboards and reporting',
      'Integration between your existing tools (Make.com, Zapier, APIs)',
    ],
    href: '/services/automation',
  },
  {
    title: 'Paid Media Attribution Audit',
    description: 'Find out where your ad spend is actually going. We cross-reference platform data with your real revenue to expose wasted budget and inflated ROAS.',
    features: [
      'Cross-reference ad conversions with CRM closed deals',
      'Identify inflated ROAS and double attribution',
      'Campaign-by-campaign verdict: cut, keep, fix, scale',
      'Detailed report + personalised Loom walkthrough',
      'ROI projection and actionable recommendations',
    ],
    href: '/services/attribution-audit',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Everything you need to grow your service business with AI — from content and lead gen to full automation infrastructure.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Investment</h2>
          <p className="text-gray-600 mb-8">
            Our retainers start from £1,500/month with a one-time setup fee. Every engagement is custom-built around your business goals.
          </p>
          <p className="text-gray-600 mb-8">
            Most clients see ROI within the first 30 days through time savings alone — before the new leads even start converting.
          </p>
          <a href="/contact" className="inline-block bg-electric text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition">
            Get a Custom Quote
          </a>
        </div>
      </section>

      <CTA />
    </>
  )
}
