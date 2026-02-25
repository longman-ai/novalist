import CTA from '@/components/CTA'

export default function AutomationPage() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Automation Infrastructure</h1>
          <p className="text-xl text-gray-600 mb-12">
            Eliminate the repetitive work eating your margins and build systems that let you scale without adding headcount.
          </p>

          <h2 className="text-2xl font-bold mb-4">The Problem</h2>
          <p className="text-gray-600 mb-8">
            Your team spends hours on tasks that shouldn&apos;t require human intelligence: data entry, follow-up emails, 
            report generation, invoice chasing, onboarding paperwork. Every hour on admin is an hour not spent on billable work.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
          <p className="text-gray-600 mb-8">
            We audit your operations, identify automation opportunities, and build custom workflows using tools like Make.com, 
            Zapier, and AI integrations. The goal: free your team to focus on high-value work while the systems handle the rest.
          </p>

          <h2 className="text-2xl font-bold mb-4">What You Get</h2>
          <ul className="space-y-3 text-gray-600 mb-8">
            <li className="flex gap-3"><span className="text-electric">✓</span> Operations audit and automation roadmap</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Custom workflow design and build</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Client onboarding automation</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Automated reporting and dashboards</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Tool integration (CRM, email, calendar, accounting)</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Documentation and team training</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">The Result</h2>
          <p className="text-gray-600">
            Clients typically save <strong>20+ hours per week</strong> on repetitive tasks, improve accuracy, 
            and create capacity to take on more clients without hiring.
          </p>
        </div>
      </section>
      <CTA />
    </>
  )
}
