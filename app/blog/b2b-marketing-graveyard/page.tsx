import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The B2B Marketing Graveyard: 5 Strategies That Died in 2026 | NovaList',
  description: 'Cold email blasts, generic LinkedIn automation, gated whitepapers — the B2B tactics that built pipelines for years are dying. Here\'s what\'s replacing them and why AI-native marketing is the future.',
  keywords: [
    'B2B marketing strategy 2026',
    'cold email not working',
    'LinkedIn marketing changes',
    'AI marketing UK',
    'B2B lead generation',
    'answer engine optimisation',
    'AEO',
    'marketing automation',
  ],
  openGraph: {
    title: 'The B2B Marketing Graveyard: 5 Strategies That Died in 2026',
    description: 'The B2B playbook has changed. Cold email, LinkedIn spray-and-pray, and gated content are dying. Here\'s what\'s actually working now.',
    url: 'https://novalist.co/blog/b2b-marketing-graveyard',
    type: 'article',
    publishedTime: '2026-05-06T12:00:00Z',
  },
  alternates: {
    canonical: 'https://novalist.co/blog/b2b-marketing-graveyard',
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
          <span className="text-gray-400">Strategy</span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="bg-blue-50 text-electric px-2.5 py-0.5 rounded-full text-xs font-medium">Strategy</span>
            <span>6 May 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            The B2B Marketing Graveyard: 5 Strategies That Died in 2026 (And What Replaced Them)
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every year, a few marketing tactics quietly stop working. But 2026 feels different — 
            the entire B2B playbook is being rewritten. Here are the strategies we&apos;re watching die 
            in real time, and what the smartest businesses are doing instead.
          </p>
        </header>

        {/* Body */}
        <div className="prose prose-lg max-w-none">
          {/* Intro */}
          <p className="text-gray-700 leading-relaxed mb-8">
            We track hundreds of conversations across B2B marketing communities every week. Not because 
            we&apos;re nosy — because our clients need to know what&apos;s actually happening in the market, 
            not what some report from six months ago says.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            And the pattern is unmistakable: strategies that reliably filled pipelines for years are 
            breaking down. Not slowly — suddenly. Response rates crashing. Engagement evaporating. 
            Qualified leads drying up.
          </p>
          <p className="text-gray-700 leading-relaxed mb-12">
            Here are the five we keep seeing in the graveyard — and what&apos;s replacing them.
          </p>

          {/* Strategy 1 */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚰️</span>
              <h2 className="text-2xl font-bold m-0">1. Spray-and-Pray Cold Email</h2>
            </div>
            <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-red-800 font-medium mb-1">What died:</p>
              <p className="text-sm text-red-700">
                Buying a list of 10,000 emails from Apollo or ZoomInfo, loading them into a sequence tool, 
                and blasting the same template to everyone. &quot;Hi [FIRST_NAME], I noticed [COMPANY] is growing fast…&quot;
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              This used to work because inboxes weren&apos;t drowning. In 2026, decision-makers at mid-market 
              companies report receiving <strong>40-50 cold emails per week</strong>. The same Apollo lists are 
              being hammered by every SDR team on the planet. Reply rates have cratered to under 1%.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google and Microsoft have also tightened spam filters significantly. If your domain reputation 
              drops, you&apos;re not just landing in spam — you&apos;re being silently blocked.
            </p>
            <div className="bg-blue-50 border-l-4 border-electric p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-electric font-medium mb-1">What&apos;s replacing it:</p>
              <p className="text-sm text-gray-700">
                <strong>Intent-triggered outreach.</strong> Instead of blasting lists, monitor real buying signals — 
                new company registrations, job postings for roles that suggest pain points, review velocity changes, 
                even social mentions. Then reach out with context: &quot;I saw you just hired a Head of Digital — 
                here&apos;s how we helped a similar company 3x their pipeline during that transition.&quot;
              </p>
            </div>
          </div>

          {/* Strategy 2 */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚰️</span>
              <h2 className="text-2xl font-bold m-0">2. LinkedIn Automation (The &quot;Like, Comment, Connect&quot; Bots)</h2>
            </div>
            <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-red-800 font-medium mb-1">What died:</p>
              <p className="text-sm text-red-700">
                Tools that auto-like posts, drop generic comments (&quot;Great insight! 🔥&quot;), and blast connection 
                requests with a sales pitch in the first message.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              LinkedIn&apos;s 2026 algorithm update was the nail in the coffin. The platform now actively 
              penalises accounts with bot-like behaviour, and it&apos;s surprisingly good at detecting it. 
              Worse, the algorithm now <strong>rewards genuine conversations over broadcast content</strong> — 
              meaning your carefully scheduled thought leadership posts reach fewer people than a single 
              thoughtful comment on someone else&apos;s thread.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The result? Accounts that relied on automation saw their impressions crash 60-80% almost overnight.
            </p>
            <div className="bg-blue-50 border-l-4 border-electric p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-electric font-medium mb-1">What&apos;s replacing it:</p>
              <p className="text-sm text-gray-700">
                <strong>Strategic engagement with AI-powered relevance.</strong> Use AI to identify the right threads 
                and the right people, then craft genuinely useful comments in the founder&apos;s authentic voice. 
                Not &quot;Great post!&quot; — but a real perspective that adds value. The algorithm loves it, the 
                audience loves it, and it converts at 5-10x the rate of automation.
              </p>
            </div>
          </div>

          {/* Strategy 3 */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚰️</span>
              <h2 className="text-2xl font-bold m-0">3. Gated Whitepapers as Lead Magnets</h2>
            </div>
            <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-red-800 font-medium mb-1">What died:</p>
              <p className="text-sm text-red-700">
                &quot;Download our 2026 State of B2B Marketing Report&quot; → email gate → nurture sequence → 
                SDR calls you three days later.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Buyers figured this out years ago, but 2026 is when the data caught up. A recent study 
              showed that <strong>83% of B2B buyers</strong> now use fake email addresses for gated content. 
              The leads you&apos;re collecting aren&apos;t leads — they&apos;re junk.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Meanwhile, the businesses that ungated their best content saw a <em>increase</em> in qualified 
              pipeline. Turns out, giving away value builds trust. Who knew?
            </p>
            <div className="bg-blue-50 border-l-4 border-electric p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-electric font-medium mb-1">What&apos;s replacing it:</p>
              <p className="text-sm text-gray-700">
                <strong>Free interactive tools and soft engagement.</strong> Instead of gating a PDF, build something 
                useful — a calculator, a diagnostic tool, an instant audit. Let people get value immediately, 
                then offer deeper help. The contact info you collect is from people who actually want to talk to you.
              </p>
            </div>
          </div>

          {/* Strategy 4 */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚰️</span>
              <h2 className="text-2xl font-bold m-0">4. SEO for Google (and Nothing Else)</h2>
            </div>
            <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-red-800 font-medium mb-1">What died:</p>
              <p className="text-sm text-red-700">
                Writing 2,000-word blog posts optimised for Google keywords, building backlinks, 
                and waiting for organic traffic to convert.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google isn&apos;t dead. But the way people find businesses has fundamentally changed. 
              ChatGPT, Perplexity, Claude, Google&apos;s own AI Overviews — AI tools now answer the 
              questions your blog posts were ranking for, and they do it without sending the user 
              to your website.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zero-click searches now account for over <strong>60% of all Google queries</strong>. If your entire 
              strategy is &quot;rank on page 1,&quot; you&apos;re fighting for a shrinking pie.
            </p>
            <div className="bg-blue-50 border-l-4 border-electric p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-electric font-medium mb-1">What&apos;s replacing it:</p>
              <p className="text-sm text-gray-700">
                <strong>Answer Engine Optimisation (AEO).</strong> Structure your content so AI tools cite your 
                business as the authoritative answer. This means FAQ schemas, clear entity markup, concise 
                expert answers, and building the kind of topical authority that AI models trust. The businesses 
                doing this now are getting recommended by ChatGPT and Perplexity — essentially free, high-intent leads.
              </p>
            </div>
          </div>

          {/* Strategy 5 */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚰️</span>
              <h2 className="text-2xl font-bold m-0">5. The &quot;Post and Pray&quot; Content Calendar</h2>
            </div>
            <div className="bg-red-50 border-l-4 border-red-300 p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-red-800 font-medium mb-1">What died:</p>
              <p className="text-sm text-red-700">
                Publishing three blog posts a week and two LinkedIn posts a day from a pre-planned calendar, 
                hoping something sticks.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Volume used to be a competitive advantage. In 2026, it&apos;s a liability. AI has made it 
              trivially easy for everyone to produce content — which means the internet is drowning in 
              mediocre, AI-generated articles that say nothing new.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Buyers can smell it. &quot;If the visuals aren&apos;t real, it feels mass-produced&quot; — that&apos;s 
              a direct quote from a B2B buyer survey. The same applies to content. Generic AI slop 
              doesn&apos;t just fail to convert — it actively damages trust.
            </p>
            <div className="bg-blue-50 border-l-4 border-electric p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-electric font-medium mb-1">What&apos;s replacing it:</p>
              <p className="text-sm text-gray-700">
                <strong>Evergreen systems with authentic voice.</strong> Instead of a content calendar, build content 
                infrastructure — always-on funnels where each piece serves a purpose: attract, educate, convert. 
                Use AI for scale, but train it on your actual voice, your real client stories, your genuine 
                perspective. Fewer pieces, higher quality, compounding returns.
              </p>
            </div>
          </div>

          {/* The Pattern */}
          <div className="border-t border-gray-200 pt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Pattern Nobody&apos;s Talking About</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Look at what all five dead strategies have in common: <strong>they prioritise volume over relevance</strong>. 
              Blast more emails. Post more content. Automate more touchpoints. Scale, scale, scale.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              And look at what&apos;s replacing them: <strong>intelligence over volume</strong>. Target the right 
              person at the right moment. Say something worth hearing. Build systems that compound, not campaigns that expire.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is where AI actually helps — not by generating more generic content, but by making 
              every piece of marketing smarter. Better targeting. Better timing. Better personalisation. 
              And critically, keeping the human voice that builds trust.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Not Sure Where Your Marketing Stands?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Get an instant AI-powered content score for your website. See exactly where your messaging, 
              SEO, and AI search visibility are — in 30 seconds, completely free.
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
