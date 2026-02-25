import ServiceCard from '@/components/ServiceCard'
import CTA from '@/components/CTA'

const services = [
  {
    title: 'AI Content Engine',
    description: 'Consistent, high-quality content that builds your authority and drives inbound leads — produced in a fraction of the time.',
    features: [
      'Weekly SEO blog posts targeting your ideal clients',
      '3-5 social media posts per week (LinkedIn, X, Instagram)',
      'Monthly email newsletters',
      'Custom brand voice AI training',
      'Content performance tracking and optimisation',
    ],
    href: '/services/content-engine',
  },
  {
    title: 'AI Lead Generation',
    description: 'A steady stream of qualified prospects landing in your inbox through personalised, AI-powered outbound campaigns.',
    features: [
      'ICP research and lead list building',
      'Personalised cold email sequences (200+/month)',
      'LinkedIn connection and DM campaigns',
      'Lead scoring and CRM integration',
      'A/B testing and continuous optimisation',
    ],
    href: '/services/lead-generation',
  },
  {
    title: 'Automation Infrastructure',
    description: 'Eliminate the repetitive work that\'s eating your margins and build systems that scale without adding headcount.',
    features: [
      'Client onboarding automation',
      'Proposal and invoice generation',
      'Meeting scheduling and follow-up sequences',
      'Custom dashboards and reporting',
      'Integration between your existing tools',
    ],
    href: '/services/automation',
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
          <div className="grid md:grid-cols-3 gap-8">
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
