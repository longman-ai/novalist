'use client'

import { useEffect, useState, useRef } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

interface CategoryResult {
  score: number
  verdict: string
  fix: string
}

interface AuditResult {
  id: string
  url: string
  overall: number
  categories: {
    messagingClarity: CategoryResult
    seoFoundations: CategoryResult
    contentFreshness: CategoryResult
    ctaEffectiveness: CategoryResult
  }
  quickWins: string[]
  analyzedAt: string
}

const CATEGORY_LABELS: Record<string, { label: string; icon: string }> = {
  messagingClarity: { label: 'Messaging Clarity', icon: '💬' },
  seoFoundations: { label: 'SEO Foundations', icon: '🔍' },
  contentFreshness: { label: 'Content Freshness', icon: '📅' },
  ctaEffectiveness: { label: 'CTA Effectiveness', icon: '🎯' },
}

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (started.current || !target) return
    started.current = true
    const start = performance.now()
    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration])

  return value
}

function ScoreRing({ score, size = 160 }: { score: number; size?: number }) {
  const displayScore = useCountUp(score)
  const color = score >= 75 ? '#22c55e' : score >= 50 ? '#f59e0b' : '#ef4444'
  const radius = (size - 16) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (displayScore / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth="10" fill="none" />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          stroke={color} strokeWidth="10" fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000"
        />
      </svg>
      <span className="absolute text-4xl font-bold text-navy">{displayScore}</span>
    </div>
  )
}

function CategoryBar({ score }: { score: number }) {
  const displayScore = useCountUp(score)
  const color = score >= 75 ? 'bg-green-500' : score >= 50 ? 'bg-amber-500' : 'bg-red-500'
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${displayScore}%` }} />
      </div>
      <span className="text-sm font-semibold text-navy w-8 text-right">{displayScore}</span>
    </div>
  )
}

export default function ResultsPage() {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState<AuditResult | null>(null)
  const [unlocked, setUnlocked] = useState(false)
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [unlocking, setUnlocking] = useState(false)
  const [unlockError, setUnlockError] = useState('')

  useEffect(() => {
    const stored = sessionStorage.getItem(`audit_${id}`)
    if (stored) {
      setData(JSON.parse(stored))
    }
  }, [id])

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault()
    setUnlockError('')
    setUnlocking(true)
    try {
      const res = await fetch('/api/audit/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          url: data?.url,
          score: data?.overall,
        }),
      })
      const result = await res.json()
      if (!res.ok) {
        setUnlockError(result.error || 'Something went wrong')
        return
      }
      setUnlocked(true)
    } catch {
      setUnlockError('Failed to connect. Please try again.')
    } finally {
      setUnlocking(false)
    }
  }

  if (!data) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-gray-500 mb-4">No results found for this audit.</p>
          <Link href="/audit" className="text-electric hover:underline">
            ← Run a new audit
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-sm text-gray-400 mb-2">Results for</p>
          <p className="text-electric font-medium mb-6 break-all">{data.url}</p>
          <ScoreRing score={data.overall} />
          <p className="mt-4 text-lg font-semibold text-navy">
            Overall Content Score
          </p>
          <p className="text-sm text-gray-400">
            {data.overall >= 75 ? 'Great — your content is strong!' : data.overall >= 50 ? 'Decent — room for improvement.' : 'Needs work — let\'s fix this.'}
          </p>
        </div>

        {/* Category Breakdown */}
        <div className="grid gap-4 mb-10 animate-fade-up-delay-1">
          {Object.entries(data.categories).map(([key, cat]) => {
            const meta = CATEGORY_LABELS[key]
            return (
              <div key={key} className="bg-gray-50 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-navy">
                    {meta.icon} {meta.label}
                  </span>
                </div>
                <CategoryBar score={cat.score} />
                <p className="text-sm text-gray-500 mt-2">{cat.verdict}</p>
                {unlocked && (
                  <div className="mt-2 bg-white border border-electric/20 rounded-lg px-4 py-2">
                    <p className="text-sm text-navy"><span className="font-medium text-electric">Fix:</span> {cat.fix}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Quick Wins / Gate */}
        {!unlocked ? (
          <div className="animate-fade-up-delay-2 bg-gradient-to-br from-navy to-slate-800 rounded-2xl p-8 text-center text-white">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-bold mb-2">Unlock Your Detailed Fixes &amp; Quick Wins</h3>
            <p className="text-gray-300 text-sm mb-6">
              Enter your email to see specific fixes for each category and 3 quick wins you can implement today.
            </p>
            <form onSubmit={handleUnlock} className="max-w-sm mx-auto space-y-3">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name (optional)"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-electric"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-electric"
              />
              <button
                type="submit"
                disabled={unlocking}
                className="w-full bg-electric text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition disabled:opacity-60"
              >
                {unlocking ? 'Unlocking…' : 'Unlock Full Report'}
              </button>
              {unlockError && <p className="text-red-400 text-sm">{unlockError}</p>}
            </form>
            <p className="text-gray-500 text-xs mt-4">No spam. We&apos;ll only contact you about your results.</p>
          </div>
        ) : (
          <div className="animate-fade-up bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy mb-4">⚡ 3 Quick Wins</h3>
            <div className="space-y-3">
              {data.quickWins.map((win, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="bg-green-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-navy text-sm">{win}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-up-delay-3">
          <p className="text-gray-500 mb-4">Want expert help improving your score?</p>
          <Link
            href="/contact"
            className="inline-block bg-electric text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Book a Free Strategy Call
          </Link>
          <div className="mt-4">
            <Link href="/audit" className="text-sm text-electric hover:underline">
              ← Score another website
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
