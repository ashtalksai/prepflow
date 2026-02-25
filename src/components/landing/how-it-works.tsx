"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, Brain, BookOpen, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Take the Diagnostic",
    description:
      "5 quick questions to identify your current plateau and weak areas. Takes under 2 minutes.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Analyzes Your Profile",
    description:
      "Our algorithm matches your plateau to successful breakthrough patterns from thousands of students.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Get Personalized Resources",
    description:
      "Reddit threads, YouTube videos, and 7Sage content—ranked by what actually works for YOUR level.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track & Adapt",
    description:
      "Report what works. Our system learns and refines recommendations as you progress.",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            From Plateau to Breakthrough in 4 Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No more guesswork. PrepFlow gives you a clear path from where you are
            to where you want to be.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
                )}

                <div className="bg-card border border-border rounded-xl p-6 hover-lift h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`font-mono text-2xl font-bold ${step.color}`}>
                      {step.number}
                    </span>
                    <div
                      className={`h-10 w-10 rounded-lg ${step.bgColor} flex items-center justify-center`}
                    >
                      <Icon className={`h-5 w-5 ${step.color}`} />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
