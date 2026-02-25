"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Flame,
  Filter,
  BarChart3,
  Zap,
  MessageSquare,
  Layers,
} from "lucide-react"

const features = [
  {
    icon: Flame,
    title: "Reddit-Style Resource Cards",
    description:
      "Every resource displayed like a Reddit post—upvotes, timestamps, flairs. You know exactly what's hot.",
  },
  {
    icon: Filter,
    title: "Plateau Filtering",
    description:
      "Filter by your score range. See only resources that helped people at YOUR level breakthrough.",
  },
  {
    icon: BarChart3,
    title: "Progress Dashboard",
    description:
      "Track your scores over time. See which resources correlate with your improvements.",
  },
  {
    icon: Zap,
    title: "AI Recommendations",
    description:
      "Our algorithm learns from successful breakthrough patterns and suggests what to study next.",
  },
  {
    icon: MessageSquare,
    title: "Community Signals",
    description:
      "Aggregated wisdom from r/LSAT, YouTube, and 7Sage—ranked by actual student feedback.",
  },
  {
    icon: Layers,
    title: "Adaptive Sequences",
    description:
      "Premium feature: multi-week study sequences that adapt based on your feedback.",
  },
]

export function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Built for Reddit-Native Studiers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We know you trust crowd-sourced wisdom. That&apos;s why PrepFlow feels
            like the r/LSAT you always wanted—organized, personalized, actionable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl p-6 hover-lift group"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Feature showcase image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="relative aspect-[21/9] rounded-xl overflow-hidden border border-border shadow-2xl">
            <Image
              src="/images/feature-icons.png"
              alt="PrepFlow feature icons"
              fill
              className="object-contain bg-card p-8"
            />
          </div>
          {/* Glow */}
          <div className="absolute -inset-8 bg-primary/5 blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  )
}
