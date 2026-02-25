import CTA from '@/components/CTA'

export default function ContentEnginePage() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">AI Content Engine</h1>
          <p className="text-xl text-gray-600 mb-12">
            Consistent, high-quality content that builds your authority and drives inbound leads — produced in a fraction of the time.
          </p>

          <h2 className="text-2xl font-bold mb-4">The Problem</h2>
          <p className="text-gray-600 mb-8">
            Most UK service businesses know they should be creating content. But between client work, operations, and everything else, 
            it falls to the bottom of the list. The result? An invisible online presence and a pipeline that depends entirely on referrals.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
          <p className="text-gray-600 mb-8">
            We build you a content engine powered by AI that produces high-quality, on-brand content consistently — without requiring 
            hours of your time each week. Your expertise, amplified by AI, published everywhere that matters.
          </p>

          <h2 className="text-2xl font-bold mb-4">What You Get</h2>
          <ul className="space-y-3 text-gray-600 mb-8">
            <li className="flex gap-3"><span className="text-electric">✓</span> 4 SEO-optimised blog posts per month</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> 12-20 social media posts per month (LinkedIn, X, Instagram)</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Monthly email newsletter</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Custom AI trained on your brand voice and expertise</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Content calendar and scheduling</li>
            <li className="flex gap-3"><span className="text-electric">✓</span> Monthly performance report</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">The Result</h2>
          <p className="text-gray-600 mb-4">
            Clients typically see a <strong>3-5x increase in content output</strong> while spending <strong>80% less time</strong> on content creation. 
            Within 3-6 months, organic inbound leads start becoming a reliable growth channel.
          </p>
        </div>
      </section>
      <CTA />
    </>
  )
}
