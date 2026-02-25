"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/bg-dot-pattern.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container-wide section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Social proof badge */}
            <Badge
              variant="outline"
              className="mb-6 gap-2 px-4 py-2 text-sm bg-secondary/50"
            >
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
              Built with data from r/LSAT (231K members)
            </Badge>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Stop Drowning in
              <br />
              <span className="text-primary">LSAT Resources</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              You&apos;re stuck at {" "}
              <span className="font-mono text-primary">158</span>. That student who hit{" "}
              <span className="font-mono text-primary">175</span> used different resources.
              PrepFlow&apos;s AI matches your plateau to what actually works.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/diagnostic">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Zap className="h-5 w-5" />
                  Take Free Diagnostic
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 w-full sm:w-auto"
                >
                  See How It Works
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Free tier available
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                No credit card required
              </span>
            </div>
          </motion.div>

          {/* Right: Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/images/hero-plateau-visualization.png"
                alt="LSAT plateau visualization showing score progression"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/4 -left-4 bg-card border border-border rounded-lg p-3 shadow-xl"
            >
              <span className="font-mono text-sm text-purple-400">150-158</span>
              <p className="text-xs text-muted-foreground">Foundation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-1/4 -right-4 bg-card border border-border rounded-lg p-3 shadow-xl"
            >
              <span className="font-mono text-sm text-amber-400">170+</span>
              <p className="text-xs text-muted-foreground">Elite</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
