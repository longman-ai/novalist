import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-electric text-sm font-semibold uppercase tracking-wider mb-4 animate-fade-up">For UK B2B service businesses</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-up">
          You&apos;re Great at What You Do.<br />
          <span className="text-electric">Now Let People Find You.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-up-delay-1">
          Most service businesses rely on referrals and hope. We build AI-powered marketing systems 
          that get you found — on Google, on LinkedIn, and in AI search results — so you never 
          wonder where the next client is coming from.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <Link href="/audit" className="bg-electric text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 hover:scale-105 transition-all">
            Score My Website — Free
          </Link>
          <Link href="/contact" className="border border-gray-300 px-8 py-4 rounded-lg text-lg font-medium hover:border-electric hover:text-electric hover:scale-105 transition-all">
            Book a Discovery Call
          </Link>
        </div>
        <p className="text-gray-400 text-sm mt-6 animate-fade-up-delay-2">
          Get your AI content score in 30 seconds. No email required.
        </p>
      </div>
    </section>
  )
}
