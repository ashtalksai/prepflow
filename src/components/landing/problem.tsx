"use client"

import { motion } from "framer-motion"
import { Clock, Search, TrendingDown, AlertTriangle } from "lucide-react"

const problems = [
  {
    icon: Search,
    title: "Endless Searching",
    description:
      "You spend 3+ hours per week sifting through Reddit threads, YouTube videos, and forums trying to find what works.",
    stat: "3+ hrs/week",
    statLabel: "wasted searching",
  },
  {
    icon: AlertTriangle,
    title: "Wrong Resources",
    description:
      "Resources that helped someone at 165 won't help you at 158. You're using material that's wrong for your level.",
    stat: "80%",
    statLabel: "using wrong resources",
  },
  {
    icon: TrendingDown,
    title: "Score Plateaus",
    description:
      "Your score hasn't moved in weeks. You're studying hard but spinning your wheels with no breakthrough.",
    stat: "6+ weeks",
    statLabel: "average plateau",
  },
  {
    icon: Clock,
    title: "Time Pressure",
    description:
      "Law school applications are coming. You can't afford to waste another month figuring out what to study.",
    stat: "75%",
    statLabel: "stressed about timeline",
  },
]

export function Problem() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            The Problem
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            LSAT Prep is Broken
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            231K students on r/LSAT all searching for the same thing: the right
            resources for their level. But everyone shares the same generic lists.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover-lift"
              >
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {problem.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <span className="font-mono text-2xl font-bold text-destructive">
                    {problem.stat}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {problem.statLabel}
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
