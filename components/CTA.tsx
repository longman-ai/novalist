import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Grow Faster with AI?
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Book a free 15-minute discovery call. We&apos;ll audit your current setup 
          and show you exactly where AI can save you time and generate more leads.
        </p>
        <Link href="/contact" className="inline-block bg-electric text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition">
          Book Your Free Call
        </Link>
        <p className="text-gray-500 text-sm mt-4">No commitment. No hard sell. Just honest advice.</p>
      </div>
    </section>
  )
}
