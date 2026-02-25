import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import CTA from '@/components/CTA'

const services = [
  {
    title: 'AI Content Engine',
    description: 'Consistent, high-quality content across all channels — without the time sink.',
    features: [
      'SEO-optimised blog posts and articles',
      'LinkedIn and social media content',
      'Email newsletters and sequences',
      'Brand voice consistency across all output',
    ],
    href: '/services/content-engine',
  },
  {
    title: 'AI Lead Generation',
    description: 'Fill your pipeline with qualified prospects using personalised AI-powered outreach.',
    features: [
      'Personalised cold email campaigns at scale',
      'LinkedIn outbound sequences',
      'Lead scoring and qualification',
      'CRM setup and automation',
    ],
    href: '/services/lead-generation',
  },
  {
    title: 'Automation Infrastructure',
    description: 'Eliminate repetitive work and build systems that scale with your business.',
    features: [
      'Workflow automation (Make.com, Zapier)',
      'Client onboarding automation',
      'Reporting and analytics dashboards',
      'Custom AI integrations',
    ],
    href: '/services/automation',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Social Proof */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">Trusted by UK service businesses</p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-electric">20+</p>
              <p className="text-sm text-gray-500 mt-1">Hours saved per week</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-electric">40-60%</p>
              <p className="text-sm text-gray-500 mt-1">More qualified leads</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-electric">3-5x</p>
              <p className="text-sm text-gray-500 mt-1">Content output increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">How We Help You Grow</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Three core services designed to transform how your business attracts, converts, and retains clients.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Process, Powerful Results</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Discovery Call', desc: 'We learn about your business, goals, and current pain points. 15 minutes, no commitment.' },
              { step: '02', title: 'Strategy & Setup', desc: 'We design your AI systems, build your automations, and create your content engine.' },
              { step: '03', title: 'Growth on Autopilot', desc: 'Your systems run. Leads come in. Content publishes. You focus on what you do best.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-electric text-sm font-bold mb-2">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
