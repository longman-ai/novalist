'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-navy">
          Nova<span className="text-electric">List</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/services" className="hover:text-electric transition">Services</Link>
          <Link href="/audit" className="hover:text-electric transition font-medium">Free Audit</Link>
          <Link href="/about" className="hover:text-electric transition">About</Link>
          <Link href="/contact" className="bg-electric text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
            Book a Call
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-navy transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-6 py-6 space-y-4">
          <Link href="/services" className="block text-lg hover:text-electric transition" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/audit" className="block text-lg hover:text-electric transition font-medium" onClick={() => setOpen(false)}>Free Audit</Link>
          <Link href="/about" className="block text-lg hover:text-electric transition" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="block bg-electric text-white text-center px-5 py-3 rounded-lg text-lg hover:bg-blue-600 transition" onClick={() => setOpen(false)}>
            Book a Call
          </Link>
        </nav>
      )}
    </header>
  )
}
