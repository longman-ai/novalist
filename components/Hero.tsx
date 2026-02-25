import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-up">
          Your AI-Powered <span className="text-electric">Growth Partner</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-up-delay-1">
          We help UK service businesses automate their marketing, generate qualified leads, 
          and scale operations — saving you 20+ hours every week.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <Link href="/contact" className="bg-electric text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 hover:scale-105 transition-all">
            Book a Free Discovery Call
          </Link>
          <Link href="/services" className="border border-gray-300 px-8 py-4 rounded-lg text-lg font-medium hover:border-electric hover:text-electric hover:scale-105 transition-all">
            See Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}
