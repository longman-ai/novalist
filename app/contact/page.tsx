export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Book a Discovery Call</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          15 minutes. No commitment. We&apos;ll learn about your business and show you exactly 
          where AI can save you time and generate more leads.
        </p>

        {/* Placeholder for Calendly or Cal.com embed */}
        <div className="bg-gray-50 rounded-xl p-12 text-center mb-12">
          <p className="text-gray-500 mb-4">📅 Booking calendar coming soon</p>
          <p className="text-gray-600 mb-6">
            In the meantime, reach out directly:
          </p>
          <a 
            href="mailto:hello@novalist.co" 
            className="inline-block bg-electric text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
          >
            Email hello@novalist.co
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
        <div className="space-y-6">
          {[
            { step: '1', title: 'Quick Intro', desc: 'Tell us about your business, what you do, and who you serve.' },
            { step: '2', title: 'Pain Points', desc: 'We\'ll identify where you\'re spending the most time on manual, repetitive work.' },
            { step: '3', title: 'AI Opportunities', desc: 'We\'ll map out 2-3 specific areas where AI can create immediate impact.' },
            { step: '4', title: 'Next Steps', desc: 'If it\'s a fit, we\'ll propose a custom plan. If not, you\'ll still walk away with actionable insights.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="text-electric font-bold text-lg">{item.step}.</div>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
