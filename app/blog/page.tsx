import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - NovaList | AI Marketing Insights for UK B2B Businesses',
  description: 'Practical insights on AI-powered marketing, lead generation, and automation for UK B2B service businesses. No fluff, no theory — just what works.',
  openGraph: {
    title: 'Blog - NovaList',
    description: 'AI marketing insights for UK B2B service businesses.',
    url: 'https://novalist.co/blog',
  },
  alternates: {
    canonical: 'https://novalist.co/blog',
  },
}

const posts = [
  {
    slug: 'b2b-marketing-graveyard',
    title: 'The B2B Marketing Graveyard: 5 Strategies That Died in 2026 (And What Replaced Them)',
    excerpt: 'Cold email blasts, generic LinkedIn automation, gated whitepapers — the tactics that built pipelines for years are quietly dying. Here\'s what\'s actually working now.',
    date: '6 May 2026',
    readTime: '7 min read',
    category: 'Strategy',
  },
]

export default function BlogIndex() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-electric text-sm font-semibold uppercase tracking-wider mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Marketing That Actually Works</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            No fluff, no theory. Just real insights from the frontlines of AI-powered B2B marketing in the UK.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="border border-gray-200 rounded-xl p-8 hover:border-electric transition-colors">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-50 text-electric px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-electric transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <span className="inline-block mt-4 text-electric text-sm font-medium">
                  Read more →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
