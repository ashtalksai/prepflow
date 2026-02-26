import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Target, TrendingUp, Users } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            PrepFlow Documentation
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Marketing strategy, go-to-market plan, and product documentation
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="#gtm-plan"
            className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <Target className="h-8 w-8 text-blue-600" />
            <h3 className="mt-4 font-semibold">GTM Plan</h3>
            <p className="mt-2 text-sm text-gray-600">
              Target audience, channels, pricing, timeline
            </p>
          </a>
          <a
            href="#marketing-plan"
            className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <TrendingUp className="h-8 w-8 text-green-600" />
            <h3 className="mt-4 font-semibold">Marketing Plan</h3>
            <p className="mt-2 text-sm text-gray-600">
              Brand voice, content strategy, social campaigns
            </p>
          </a>
          <a
            href="#pitch-deck"
            className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <FileText className="h-8 w-8 text-purple-600" />
            <h3 className="mt-4 font-semibold">Pitch Deck</h3>
            <p className="mt-2 text-sm text-gray-600">
              Investor pitch content and slides
            </p>
          </a>
          <a
            href="#brand-copy"
            className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <Users className="h-8 w-8 text-orange-600" />
            <h3 className="mt-4 font-semibold">Brand Copy</h3>
            <p className="mt-2 text-sm text-gray-600">
              Taglines, CTAs, messaging guidelines
            </p>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* GTM Plan Section */}
        <section id="gtm-plan" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Go-To-Market Plan</h2>
          <div className="prose prose-lg max-w-none rounded-lg border bg-white p-8">
            <h3>1. Target Audience</h3>
            <p>
              <strong>Primary Persona:</strong> The Plateaued Pre-Law Student
            </p>
            <ul>
              <li>Age: 22-28 (undergrad seniors + recent grads)</li>
              <li>Active on r/LSAT (231K members) daily</li>
              <li>Stuck at score plateau (158, 162, 165) for 6+ weeks</li>
              <li>Studies 15-25 hours/week, test date within 3 months</li>
              <li>Has tried expensive courses (Kaplan $200-500/month) with no improvement</li>
            </ul>

            <p>
              <strong>Where They Hang Out:</strong>
            </p>
            <ul>
              <li>r/LSAT (231K members)</li>
              <li>r/LawSchoolAdmissions (178K members)</li>
              <li>LSAT Facebook Groups (45K-89K members)</li>
              <li>TikTok #LSATprep (23M views)</li>
              <li>YouTube: 7Sage, LSAT Demon, LSATMax channels</li>
            </ul>

            <h3>2. Launch Channels</h3>
            
            <div className="my-6">
              <h4 className="font-semibold">Week 1: r/LSAT Soft Launch</h4>
              <p>
                Value-first post analyzing 231K members&apos; breakthrough patterns. Expected: 500+ upvotes, 200 free signups.
              </p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold">Week 2-4: Multi-Channel Scale</h4>
              <ul>
                <li><strong>TikTok:</strong> 3 videos/week (POV plateau struggles)</li>
                <li><strong>Facebook Groups:</strong> Weekly resource roundups</li>
                <li><strong>YouTube:</strong> Comment on 7Sage/LSAT Demon videos</li>
                <li><strong>ProductHunt:</strong> Launch Week 3 (Tuesday)</li>
              </ul>
              <p>Goal: 1,500 free signups, 75 paid conversions ($750 MRR)</p>
            </div>

            <div className="my-6">
              <h4 className="font-semibold">Month 2-3: Content Marketing + SEO</h4>
              <ul>
                <li>2 blog articles/week targeting keywords (&quot;LSAT plateau,&quot; &quot;score not improving&quot;)</li>
                <li>Email nurture sequence (7-email welcome series)</li>
                <li>Test paid ads: $200 Facebook ads to LSAT groups</li>
              </ul>
              <p>Goal: 5,000 free users, 250 paid ($2,500 MRR)</p>
            </div>

            <h3>3. Pricing Strategy</h3>
            <div className="my-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">FREE</h4>
                <p className="mt-2 text-sm">
                  Basic diagnostic, 3 recs/day, basic tracking
                </p>
              </div>
              <div className="rounded-lg border-2 border-blue-600 p-4">
                <h4 className="font-semibold">PREMIUM — $9.99/mo</h4>
                <p className="mt-2 text-sm">
                  Unlimited recs, adaptive sequences, analytics
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">ANNUAL — $99/yr</h4>
                <p className="mt-2 text-sm">
                  Premium + 2 months free, onboarding call
                </p>
              </div>
            </div>

            <h3>4. Revenue Targets</h3>
            <ul>
              <li><strong>Month 1:</strong> $750 MRR (75 paid conversions)</li>
              <li><strong>Month 3:</strong> $2,500 MRR (250 paid)</li>
              <li><strong>Month 6:</strong> $5,000 MRR (500 paid) → $60K ARR</li>
            </ul>

            <div className="mt-8 rounded-lg bg-blue-50 p-6">
              <p className="text-sm">
                <strong>Full GTM Plan:</strong>{" "}
                <a
                  href="https://drive.google.com/file/d/1dMBou97CfWXOhilF_4-rHEfZ4oOoAC2j/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View on Google Drive →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Marketing Plan Section */}
        <section id="marketing-plan" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Marketing Plan</h2>
          <div className="prose prose-lg max-w-none rounded-lg border bg-white p-8">
            <h3>1. Brand Voice</h3>
            <p>
              <strong>Tone:</strong> Casual + Helpful + Data-Driven
            </p>
            <ul>
              <li>Sound like a knowledgeable r/LSAT member, not a corporate course</li>
              <li>Use data to back claims but keep language accessible</li>
              <li>Empathetic to plateau frustration</li>
            </ul>

            <p>
              <strong>Key Phrases:</strong>
            </p>
            <ul>
              <li>&quot;Plateau to breakthrough&quot;</li>
              <li>&quot;Stop searching, start improving&quot;</li>
              <li>&quot;Built from r/LSAT wisdom&quot;</li>
              <li>&quot;Resources for YOUR level&quot;</li>
              <li>&quot;Crowd-vetted, AI-ranked&quot;</li>
            </ul>

            <h3>2. Content Strategy</h3>
            
            <div className="my-6">
              <h4 className="font-semibold">Blog Topics (SEO-Targeted)</h4>
              <ul>
                <li>&quot;How to Break Through Your LSAT Plateau&quot; (590 searches/month)</li>
                <li>&quot;Why Your LSAT Score Isn&apos;t Improving&quot; (720 searches/month)</li>
                <li>&quot;Best LSAT Resources for 150-160 Range&quot; (1,200 searches/month)</li>
                <li>&quot;How to Improve Reading Comp on LSAT&quot; (880 searches/month)</li>
              </ul>
            </div>

            <div className="my-6">
              <h4 className="font-semibold">Social Media Cadence</h4>
              <ul>
                <li><strong>Reddit:</strong> Daily replies + weekly value posts</li>
                <li><strong>TikTok:</strong> 3x/week (Tue/Thu/Sat 7 PM ET)</li>
                <li><strong>Facebook Groups:</strong> Daily engagement + 2x/week posts</li>
                <li><strong>YouTube:</strong> Daily comments on 7Sage/LSAT Demon videos</li>
              </ul>
            </div>

            <h3>3. Social Media Campaigns</h3>
            <div className="my-6 space-y-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <h4 className="font-semibold">Reddit: &quot;Plateau Breakthrough Series&quot;</h4>
                <p className="mt-2 text-sm">
                  Soft launch analyzing 231K members → Value posts with resource roundups → Success stories
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <h4 className="font-semibold">TikTok: &quot;LSAT Plateau POV Series&quot;</h4>
                <p className="mt-2 text-sm">
                  POV stuck at score → Before/after reveals → Reddit LSAT hacks → AI explainers
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <h4 className="font-semibold">Facebook: &quot;Weekly Resource Roundups&quot;</h4>
                <p className="mt-2 text-sm">
                  Top 5 resources by score range → Free diagnostics → Success stories
                </p>
              </div>
            </div>

            <h3>4. Email Sequence (7-Email Welcome Series)</h3>
            <ol>
              <li>Welcome — Your plateau diagnosis is ready (Day 0)</li>
              <li>Value Proof — Why you&apos;re stuck at [score] (Day 2)</li>
              <li>Social Proof — Success story (Day 5)</li>
              <li>Feature Highlight — Hit your 3 free recs limit (Day 7)</li>
              <li>Urgency — Your test date is coming (Day 10)</li>
              <li>Last Chance — 50% off expires tonight (Day 14)</li>
              <li>Re-Engagement — How&apos;s your prep going? (Day 21)</li>
            </ol>

            <div className="mt-8 rounded-lg bg-green-50 p-6">
              <p className="text-sm">
                <strong>Full Marketing Plan:</strong>{" "}
                <a
                  href="https://drive.google.com/file/d/17BRXD9wNqpdPBtkOEIX23KfVwXvsBq7f/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  View on Google Drive →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Pitch Deck Section */}
        <section id="pitch-deck" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Pitch Deck Content</h2>
          <div className="prose prose-lg max-w-none rounded-lg border bg-white p-8">
            <p className="lead">
              10-slide pitch deck content for investors. View the live deck at{" "}
              <Link href="/deck" className="text-blue-600 hover:underline">
                /deck
              </Link>
            </p>

            <h3>Slide Highlights</h3>
            <ol>
              <li><strong>Title:</strong> PrepFlow — AI LSAT Prep Matching Plateaus to Breakthroughs</li>
              <li><strong>Problem:</strong> 231K students, 3+ hrs/week wasted, 80% using wrong resources</li>
              <li><strong>Solution:</strong> AI matches plateaus to crowd-sourced breakthrough patterns</li>
              <li><strong>Market:</strong> $200M+ LSAT prep market, growing 8%/year</li>
              <li><strong>How It Works:</strong> Diagnostic → AI matching → Personalized resources → Track & adapt</li>
              <li><strong>Traction:</strong> 231K community signals, +8 avg score improvement</li>
              <li><strong>Business Model:</strong> Freemium ($0 → $9.99/mo → $99/yr), 12:1 LTV:CAC</li>
              <li><strong>Competition:</strong> &quot;The Netflix of LSAT Prep&quot; — affordable + personalized</li>
              <li><strong>GTM:</strong> Reddit-first, multi-channel scale, $5K MRR by Month 6</li>
              <li><strong>Ask:</strong> $150K seed for 10% equity → $300K ARR in 12 months</li>
            </ol>

            <div className="mt-8 rounded-lg bg-purple-50 p-6">
              <p className="text-sm">
                <strong>Full Pitch Deck Content:</strong>{" "}
                <a
                  href="https://drive.google.com/file/d/1RXcoeQ8_XTD7dDg_RBFn4d6Wt-XTFs-N/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  View on Google Drive →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Brand Copy Section */}
        <section id="brand-copy" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">Brand Copy</h2>
          <div className="prose prose-lg max-w-none rounded-lg border bg-white p-8">
            <h3>Tagline</h3>
            <p className="text-xl font-semibold">
              AI LSAT Prep Matching Plateaus to Breakthroughs
            </p>

            <h3>Subtitle</h3>
            <p>
              PrepFlow analyzes 231K r/LSAT members&apos; breakthrough patterns to match your exact score plateau 
              to resources that actually work. No more endless Reddit searching or generic courses. 
              Get personalized, crowd-vetted resource recommendations in 2 minutes.
            </p>

            <h3>Primary CTAs</h3>
            <ul>
              <li><strong>Homepage:</strong> &quot;Take Free Diagnostic&quot;</li>
              <li><strong>Pricing:</strong> &quot;Start Premium — $9.99/month&quot;</li>
              <li><strong>Blog:</strong> &quot;Find My Plateau&quot;</li>
            </ul>

            <h3>Meta Description (SEO)</h3>
            <p className="text-sm">
              Stop searching Reddit for 3 hours/week. PrepFlow&apos;s AI matches your LSAT plateau to resources 
              that helped 231K students break through. Free diagnostic in 2 min.
            </p>

            <h3>Value Proposition</h3>
            <p>
              LSAT prep is broken. You spend $200/month on Kaplan&apos;s one-size-fits-all course, waste 3+ hours/week 
              searching r/LSAT for resources, and still plateau at 158 for 6 weeks. Why? Because resources that 
              help someone at 170 won&apos;t help you at 158. PrepFlow fixes this. We analyzed 231K r/LSAT members&apos; 
              breakthrough patterns to build an AI that matches your exact plateau to resources that actually work.
            </p>

            <div className="mt-8 rounded-lg bg-orange-50 p-6">
              <p className="text-sm">
                <strong>Full Brand Copy Guidelines:</strong>{" "}
                <a
                  href="https://drive.google.com/file/d/1_xrIB-qgIEsmJ3u8rWC2cvwc_gvr8iP6/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline"
                >
                  View on Google Drive →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="mt-16 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to Break Through Your Plateau?</h2>
          <p className="mt-2">
            Join thousands of LSAT students who stopped searching and started improving.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/">
              <Button size="lg" variant="secondary">
                Take Free Diagnostic
              </Button>
            </Link>
            <Link href="/deck">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Pitch Deck
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
