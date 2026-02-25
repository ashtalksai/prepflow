"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Users,
  Target,
  Lightbulb,
  BarChart3,
  DollarSign,
  TrendingUp,
  Rocket,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    type: "title",
    icon: null,
    title: "[PrepFlow]",
    subtitle: "AI-Powered LSAT Prep",
    tagline: "Matching Plateaus to Breakthroughs",
  },
  {
    id: 2,
    type: "problem",
    icon: Target,
    title: "The Problem",
    points: [
      "231K students on r/LSAT searching for resources",
      "3+ hours/week wasted on wrong materials",
      "Generic advice doesn't work for specific plateaus",
      "$69-$2,199/month for traditional prep courses",
    ],
    stat: { value: "80%", label: "of students use wrong resources for their level" },
  },
  {
    id: 3,
    type: "solution",
    icon: Lightbulb,
    title: "Our Solution",
    points: [
      "AI matches your plateau to breakthrough resources",
      "Aggregates free content from Reddit, YouTube, 7Sage",
      "Reddit-style interface with upvotes & signals",
      "Adaptive learning that evolves with your progress",
    ],
    stat: { value: "+8", label: "average score improvement" },
  },
  {
    id: 4,
    type: "product",
    icon: BarChart3,
    title: "How It Works",
    steps: [
      { num: "01", title: "Diagnostic", desc: "5-question plateau detection" },
      { num: "02", title: "Match", desc: "AI finds what works for your level" },
      { num: "03", title: "Learn", desc: "Curated resources, Reddit-style" },
      { num: "04", title: "Adapt", desc: "Feedback loop refines recommendations" },
    ],
  },
  {
    id: 5,
    type: "market",
    icon: Users,
    title: "Market Opportunity",
    points: [
      "Test prep market: $12.4B → $29.7B by 2033",
      "19.2% CAGR growth rate",
      "231K r/LSAT members (primary GTM channel)",
      '"LSAT prep resources" keyword: +23,900% growth',
    ],
    stat: { value: "$29.7B", label: "market size by 2033" },
  },
  {
    id: 6,
    type: "business",
    icon: DollarSign,
    title: "Business Model",
    tiers: [
      { name: "Free", price: "$0", features: "3 recs/day, basic diagnostic" },
      { name: "Premium", price: "$9.99/mo", features: "Unlimited, adaptive sequences" },
      { name: "Annual", price: "$99/yr", features: "17% savings, priority features" },
    ],
    stat: { value: "$1M-$10M", label: "ARR potential (IdeaBrowser estimate)" },
  },
  {
    id: 7,
    type: "competition",
    icon: Target,
    title: "Competitive Advantage",
    comparison: [
      { us: "Personalized to plateau", them: "Generic course content" },
      { us: "Free resource aggregation", them: "Create expensive content" },
      { us: "$9.99/month", them: "$69-$2,199/month" },
      { us: "Reddit-native UX", them: "Corporate SaaS feel" },
    ],
  },
  {
    id: 8,
    type: "traction",
    icon: TrendingUp,
    title: "Traction & Roadmap",
    milestones: [
      { date: "Q1 2026", item: "MVP Launch", status: "current" },
      { date: "Q2 2026", item: "1,000 users", status: "upcoming" },
      { date: "Q3 2026", item: "MCAT expansion", status: "upcoming" },
      { date: "Q4 2026", item: "10,000 users, Series A", status: "upcoming" },
    ],
  },
  {
    id: 9,
    type: "ask",
    icon: Rocket,
    title: "The Ask",
    content: {
      raising: "$500K Pre-Seed",
      use: [
        "Engineering (AI matching, mobile app)",
        "Marketing (Reddit, content partnerships)",
        "Operations (resource curation, support)",
      ],
      contact: "hello@prepflow.com",
    },
  },
]

export default function DeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
    }
  }

  const slide = slides[currentSlide]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <Home className="h-4 w-4" />
          <span className="text-sm">Back to site</span>
        </Link>
        <span className="text-sm text-muted-foreground">
          {currentSlide + 1} / {slides.length}
        </span>
      </header>

      {/* Slide Content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl"
          >
            {slide.type === "title" && (
              <div className="text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-mono text-6xl md:text-8xl font-bold text-primary mb-6"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-display text-2xl md:text-4xl font-bold mb-4"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-muted-foreground"
                >
                  {slide.tagline}
                </motion.p>
              </div>
            )}

            {(slide.type === "problem" || slide.type === "solution" || slide.type === "market") && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    {slide.icon && <slide.icon className="h-8 w-8 text-primary" />}
                    <h2 className="font-display text-4xl font-bold">{slide.title}</h2>
                  </div>
                  <ul className="space-y-4">
                    {slide.points?.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-lg text-muted-foreground">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                {slide.stat && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-card border border-border rounded-2xl p-8 text-center"
                  >
                    <p className="font-mono text-6xl md:text-7xl font-bold text-primary mb-2">
                      {slide.stat.value}
                    </p>
                    <p className="text-muted-foreground">{slide.stat.label}</p>
                  </motion.div>
                )}
              </div>
            )}

            {slide.type === "product" && (
              <div>
                <div className="flex items-center gap-3 mb-8 justify-center">
                  {slide.icon && <slide.icon className="h-8 w-8 text-primary" />}
                  <h2 className="font-display text-4xl font-bold">{slide.title}</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  {slide.steps?.map((step, index) => (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="bg-card border border-border rounded-xl p-6 text-center"
                    >
                      <span className="font-mono text-3xl font-bold text-primary">
                        {step.num}
                      </span>
                      <h3 className="font-display font-semibold text-lg mt-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {slide.type === "business" && (
              <div>
                <div className="flex items-center gap-3 mb-8 justify-center">
                  {slide.icon && <slide.icon className="h-8 w-8 text-primary" />}
                  <h2 className="font-display text-4xl font-bold">{slide.title}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {slide.tiers?.map((tier, index) => (
                    <motion.div
                      key={tier.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className={cn(
                        "bg-card border rounded-xl p-6",
                        index === 1 ? "border-primary" : "border-border"
                      )}
                    >
                      <h3 className="font-display font-semibold text-lg">{tier.name}</h3>
                      <p className="font-mono text-3xl font-bold text-primary my-2">
                        {tier.price}
                      </p>
                      <p className="text-sm text-muted-foreground">{tier.features}</p>
                    </motion.div>
                  ))}
                </div>
                {slide.stat && (
                  <div className="text-center">
                    <p className="font-mono text-4xl font-bold text-primary">
                      {slide.stat.value}
                    </p>
                    <p className="text-muted-foreground">{slide.stat.label}</p>
                  </div>
                )}
              </div>
            )}

            {slide.type === "competition" && (
              <div>
                <div className="flex items-center gap-3 mb-8 justify-center">
                  {slide.icon && <slide.icon className="h-8 w-8 text-primary" />}
                  <h2 className="font-display text-4xl font-bold">{slide.title}</h2>
                </div>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="grid grid-cols-2 gap-4 p-4 border-b border-border font-display font-semibold">
                    <span className="text-primary">PrepFlow</span>
                    <span className="text-muted-foreground">Traditional Prep</span>
                  </div>
                  {slide.comparison?.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="grid grid-cols-2 gap-4 p-4 border-b border-border last:border-0"
                    >
                      <span className="text-emerald-400">✓ {item.us}</span>
                      <span className="text-muted-foreground">✗ {item.them}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {slide.type === "traction" && (
              <div>
                <div className="flex items-center gap-3 mb-8 justify-center">
                  {slide.icon && <slide.icon className="h-8 w-8 text-primary" />}
                  <h2 className="font-display text-4xl font-bold">{slide.title}</h2>
                </div>
                <div className="space-y-4">
                  {slide.milestones?.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl border",
                        milestone.status === "current"
                          ? "bg-primary/10 border-primary"
                          : "bg-card border-border"
                      )}
                    >
                      <span className="font-mono text-sm text-muted-foreground w-20">
                        {milestone.date}
                      </span>
                      <span className="font-display font-semibold flex-1">
                        {milestone.item}
                      </span>
                      {milestone.status === "current" && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                          NOW
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {slide.type === "ask" && (
              <div className="text-center">
                <div className="flex items-center gap-3 mb-8 justify-center">
                  {slide.icon && <slide.icon className="h-8 w-8 text-primary" />}
                  <h2 className="font-display text-4xl font-bold">{slide.title}</h2>
                </div>
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="font-mono text-5xl md:text-6xl font-bold text-primary mb-8"
                >
                  {slide.content?.raising}
                </motion.p>
                <div className="bg-card border border-border rounded-xl p-6 inline-block text-left mb-8">
                  <p className="font-display font-semibold mb-3">Use of Funds</p>
                  <ul className="space-y-2">
                    {slide.content?.use.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-2 text-muted-foreground"
                >
                  <Mail className="h-5 w-5" />
                  <span>{slide.content?.contact}</span>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation */}
      <footer className="flex items-center justify-between p-4 border-t border-border">
        <Button
          variant="ghost"
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <div className="flex gap-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                currentSlide === index ? "bg-primary" : "bg-muted hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={currentSlide === slides.length - 1}
          className="gap-2"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </footer>
    </div>
  )
}
