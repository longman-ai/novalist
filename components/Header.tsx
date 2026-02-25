import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-navy">
          Nova<span className="text-electric">List</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/services" className="hover:text-electric transition">Services</Link>
          <Link href="/about" className="hover:text-electric transition">About</Link>
          <Link href="/contact" className="bg-electric text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
            Book a Call
          </Link>
        </nav>
      </div>
    </header>
  )
}
