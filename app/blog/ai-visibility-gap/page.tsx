import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '10 Things Working in B2B Marketing Right Now (July 2026) | NovaList',
  description: 'From AI answer visibility to agentic automation and lead-triage bottlenecks — 10 real signals we pulled from B2B marketing communities this month, and what they mean for UK service businesses.',
  keywords: [
    'AI visibility AEO GEO',
    'B2B marketing trends 2026',
    'agentic AI automation',
    'lead qualification B2B SaaS',
    'AI content marketing UK',
    'B2B marketing budget benchmarks',
  ],
  openGraph: {
    title: '10 Things Working in B2B Marketing Right Now (July 2026)',
    description: '10 real signals from B2B marketing communities this month, and what they mean for UK service businesses.',
    url: 'https://novalist.co/blog/ai-visibility-gap',
    type: 'article',
    publishedTime: '2026-07-27T12:00:00Z',
  },
  alternates: {
    canonical: 'https://novalist.co/blog/ai-visibility-gap',
  },
}

export default function BlogPost() {
  return (
    <article className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/blog" className="hover:text-electric transition">Blog</Link>
          <span>/</span>
          <span className="text-gray-400">Trends</span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-blue-50 text-electric px-2.5 py-0.5 rounded-full text-xs font-medium">Trends</span>
            <span>27 Jul 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            10 Things Working in B2B Marketing Right Now (July 2026)
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We monitor B2B marketing communities every day so our clients don&apos;t have to. Here&apos;s
            what actually mattered this month — no theory, just what practitioners are seeing in the field.
          </p>
        </header>

        {/* Body */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-12">
            Ten signals, ten implications. If you run marketing for a UK service business, this is
            the stuff worth acting on this quarter.
          </p>

          {/* 1 */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-4">1. Most businesses have no idea if AI even mentions them</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One founder tested a B2B SaaS product pulling 12,500 monthly visits across 40 non-branded
              buyer search queries. It showed up in AI answers <strong>1.9% of the time</strong>. That&apos;s not a typo —
              real organic traffic, near-zero AI answer share.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>What it means:</strong> Google rankings and AI visibility are now two separate games.
              You can be winning one and invisible in the other. Most SME owners haven&apos;t even checked.
            </p>
          </div>

          {/* 2 */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-4">2. Narrow AI automation beats &quot;automate everything&quot;</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The consensus among marketing ops practitioners is blunt: broad &quot;do all the marketing ops&quot;
              automation projects usually create more cleanup work than they save. The wins are coming from
              small, tightly-scoped automations — one job, done reliably.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>What it means:</strong> Skip the all-in-one AI marketing platform pitch. Specific,
              well-defined systems (a content engine, a lead-routing workflow) outperform vague automation promises.
            </p>
          </div>

          {/* 3 */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-4">3. Small B2B SaaS teams are drowning in inbound triage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A recurring thread: teams stuck on &quot;HubSpot form → manual review → Gmail/LinkedIn follow-up&quot;
              because they can&apos;t justify another SDR hire. It technically works. It doesn&apos;t scale.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>What it means:</strong> There&apos;s clear appetite for lightweight lead qualification
              automation that doesn&apos;t require a new headcount line — a strong wedge for smaller retainers.
            </p>
          </div>

          {/* 4 */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-4">4. Sales call recordings are becoming a messaging goldmine</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Marketers are experimenting with AI tools that mine discovery call recordings for the exact
              language customers use — then turning that into positioning and copy. The logic: real customer
              words consistently beat invented taglines.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>What it means:</strong> If you&apos;re not recording and mining sales calls for messaging,
              you&apos;re guessing at your own value proposition.
            </p>
          </div>

          {/* 5 */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-4">5. AI adoption is now the majority, not the edge case</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Verified 2026 figures: <strong>81% of B2B marketers</strong> report using AI in some capacity, and
              78% of mid-market organisations run at least one marketing automation platform — up from 73%
              just a few years ago.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>What it means:</strong> &quot;Should we use AI in marketing?&quot; isn&apos;t the question
              anymore. &quot;Are we behind the 81% who already do?&quot; is.
            </p>
          </div>

          {/* 6 */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-4">6. Owned channels are winning the &quot;one channel&quot; debate</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A viral thought experiment — &quot;you can only use ONE marketing channel for 12 months&quot; —
              drew heavy engagement from experienced marketers. The dominant answer wasn&apos;t paid social.
              It was email and owned content: channels you control, that compound instead of resetting to zero
              every time a platform algorithm changes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>What it means:</strong> Always-on, owned-channel systems remain the safer long-term bet
              over campaign-based, platform-dependent spend.
            </p>
          </div>

          {/* 7 */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-4">7. Marketers are frustrated they can&apos;t touch their own website</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A recurring complaint from in-house marketing managers: every landing page tweak, every headline
              change, has to go through a developer. Small changes take days.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>What it means:</strong> This is a live pain point worth surfacing directly in discovery
              calls — &quot;how long does a homepage headline change take you right now?&quot; often opens the conversation.
            </p>
          </div>

          {/* 8 */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-4">8. AI content fatigue is setting in — fast</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One marketer described being told to publish 50 pieces of content a day across platforms
              because &quot;competitors have published tens of thousands,&quot; calling themselves &quot;a spam
              content generator machine.&quot; The thread struck a nerve — dozens of similar stories followed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>What it means:</strong> Volume-first AI content is starting to actively damage trust.
              Quality and a real voice are becoming the differentiator, not a nice-to-have.
            </p>
          </div>

          {/* 9 */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-4">9. Marketing budgets are stabilising around 7-8% of revenue</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Verified benchmarks put 2026 B2B marketing spend at roughly <strong>7.7% of revenue</strong>, with
              64% of organisations running some form of account-based marketing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>What it means:</strong> A useful anchor for pricing conversations — you can frame a
              retainer as a concrete, benchmarked percentage of revenue rather than an arbitrary monthly fee.
            </p>
          </div>

          {/* 10 */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-4">10. Standing still is the actual risk</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One agency owner posted about shutting down after AI-driven self-serve tools ate the traditional
              service base they&apos;d built a business on. Not because AI marketing failed them — because they
              didn&apos;t adapt in time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>What it means:</strong> The businesses in trouble right now aren&apos;t the ones using AI
              badly. They&apos;re the ones who haven&apos;t started.
            </p>
          </div>

          {/* The Pattern */}
          <div className="border-t border-gray-200 pt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Thread Running Through All Ten</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Visibility, automation, and content are all splitting into two camps: generic and volume-driven
              versus specific and trust-driven. The businesses pulling ahead this year aren&apos;t the ones
              doing the most — they&apos;re the ones being found in the right place (including AI answers), with
              a real voice, backed by systems that don&apos;t need a bigger team to scale.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              That&apos;s the whole thesis behind how we build for clients: AI answer visibility instead of
              guessing, narrow systems instead of vague automation promises, and your actual voice instead
              of generic AI output.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Curious Where You Stand?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Get an instant AI-powered content score for your website — including how visible you are to
              ChatGPT, Perplexity, and Google AI Overviews. 30 seconds, completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="inline-block bg-electric text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition"
              >
                Score My Website — Free
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-gray-300 px-8 py-4 rounded-lg font-medium hover:border-electric hover:text-electric transition"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
