import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  href: string
}

export default function ServiceCard({ title, description, features, href }: ServiceCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-8 hover:border-electric hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      <h3 className="text-xl font-bold mb-3 group-hover:text-electric transition">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
            <span className="text-electric mt-0.5">✓</span> {f}
          </li>
        ))}
      </ul>
      <Link href={href} className="text-electric font-medium text-sm hover:underline">
        Learn more →
      </Link>
    </div>
  )
}
