import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Nova<span className="text-electric">List</span></h3>
            <p className="text-gray-400 text-sm">AI-powered growth partner for UK service businesses.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services/content-engine" className="hover:text-white transition">AI Content Engine</Link></li>
              <li><Link href="/services/lead-generation" className="hover:text-white transition">AI Lead Generation</Link></li>
              <li><Link href="/services/automation" className="hover:text-white transition">Automation Infrastructure</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-white transition">Book a Discovery Call</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} NovaList. A Thiep Holdings Ltd company.
        </div>
      </div>
    </footer>
  )
}
