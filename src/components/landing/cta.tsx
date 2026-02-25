"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-primary/20 via-card to-card border border-primary/30 rounded-2xl p-8 md:p-12 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />

          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            Ready to Break Through?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Your Plateau Ends Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Join thousands of LSAT students who stopped searching and started
            improving. Take the free diagnostic and get your personalized resource
            recommendations in under 2 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/diagnostic">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                <Zap className="h-5 w-5" />
                Take Free Diagnostic
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 w-full sm:w-auto"
              >
                Create Account
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-border/50">
            <div>
              <p className="font-mono text-2xl md:text-3xl font-bold text-primary">
                231K+
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                r/LSAT members analyzed
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl md:text-3xl font-bold text-primary">
                5,000+
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Curated resources
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl md:text-3xl font-bold text-primary">
                +8
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Avg. score improvement
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
