'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AuditPage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })

      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong')
        return
      }

      // Store results in sessionStorage and navigate
      sessionStorage.setItem(`audit_${data.id}`, JSON.stringify(data))
      router.push(`/audit/results/${data.id}`)
    } catch {
      setError('Failed to connect. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="animate-fade-up">
          <span className="inline-block bg-electric/10 text-electric text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Free Tool — No credit card required
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-4">
            Get Your Free Website<br />
            <span className="text-electric">Content Score</span>
          </h1>
          <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">
            Our AI analyses your homepage in seconds and scores your content across
            4 key areas. Find out what&apos;s working and what to fix.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="animate-fade-up-delay-1 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your website URL"
            className="flex-1 px-5 py-3.5 rounded-lg border border-gray-200 text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric text-base"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-electric text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {loading ? (
              <span className="flex items-center gap-2 justify-center">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Analysing…
              </span>
            ) : (
              'Score My Site'
            )}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-red-500 text-sm">{error}</p>
        )}

        <div className="animate-fade-up-delay-2 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
          {['Messaging Clarity', 'SEO Foundations', 'Content Freshness', 'CTA Effectiveness'].map((cat) => (
            <div key={cat} className="flex items-center gap-2 justify-center">
              <svg className="w-4 h-4 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {cat}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
