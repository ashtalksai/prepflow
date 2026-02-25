"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Target, Zap, TrendingUp } from "lucide-react"

export function Solution() {
  return (
    <section id="solution" className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="/images/dashboard-mockup.png"
                alt="PrepFlow dashboard showing personalized LSAT resources"
                fill
                className="object-cover"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              The Solution
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
              AI That Knows Your Plateau
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              PrepFlow analyzes crowd-sourced signals from r/LSAT to rank what
              actually works for each score range. No more generic advice—just
              resources that helped people break through{" "}
              <span className="text-foreground font-medium">your exact plateau</span>.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">
                    Plateau Detection
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    5-question diagnostic pinpoints exactly where you&apos;re stuck
                    and why.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">
                    Smart Matching
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    AI matches your plateau to resources that actually helped
                    people at your level breakthrough.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">
                    Progress Tracking
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Track what works for you. Our algorithm learns and adapts
                    recommendations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
