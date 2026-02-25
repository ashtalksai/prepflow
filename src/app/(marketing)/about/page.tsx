"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Zap, Check, X } from "lucide-react"

const differentiators = [
  { feature: "Personalized to your plateau", us: true, them: false },
  { feature: "Aggregates free resources", us: true, them: false },
  { feature: "Reddit-first design", us: true, them: false },
  { feature: "AI-powered matching", us: true, them: false },
  { feature: "Community signals", us: true, them: false },
  { feature: "$9.99/mo price point", us: true, them: false },
  { feature: "Own content library", us: false, them: true },
  { feature: "Live tutoring", us: false, them: true },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="section-padding">
        <div className="container-narrow">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              About PrepFlow
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
              LSAT Prep Should Be Smarter
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We built PrepFlow because we were tired of watching talented students
              waste months searching for the right resources. There had to be a
              better way.
            </p>
          </motion.div>

          {/* Origin Story */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold mb-6">The Story</h2>
            <div className="bg-card border border-border rounded-xl p-8 space-y-4 text-muted-foreground">
              <p>
                It started on r/LSAT. We noticed the same pattern over and over:
                students posting &quot;stuck at 158, what should I do?&quot; and getting
                dozens of responses recommending completely different resources.
              </p>
              <p>
                The problem wasn&apos;t lack of resources—it was too many resources
                with no way to know what worked for YOUR specific situation. A
                student stuck at 158 needs different material than one at 168, but
                everyone was getting the same generic &quot;use 7Sage and Khan
                Academy&quot; advice.
              </p>
              <p>
                We realized we could solve this with data. If we could analyze what
                resources successful students mentioned when discussing their
                breakthroughs—and correlate that with their starting and ending
                scores—we could build something actually useful.
              </p>
              <p className="text-foreground font-medium">
                PrepFlow isn&apos;t another prep course. It&apos;s the organized, AI-powered
                version of r/LSAT that shows you exactly what to study based on
                your plateau.
              </p>
            </div>
          </motion.section>

          {/* Differentiation Table */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold mb-6">
              PrepFlow vs. Traditional Prep
            </h2>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 border-b border-border font-display font-semibold text-sm">
                <span>Feature</span>
                <span className="text-center text-primary">PrepFlow</span>
                <span className="text-center text-muted-foreground">
                  Kaplan/Blueprint
                </span>
              </div>
              {differentiators.map((item, index) => (
                <div
                  key={item.feature}
                  className={`grid grid-cols-3 gap-4 p-4 text-sm ${
                    index !== differentiators.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <span className="text-muted-foreground">{item.feature}</span>
                  <span className="text-center">
                    {item.us ? (
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                    )}
                  </span>
                  <span className="text-center">
                    {item.them ? (
                      <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold mb-6">Our Mission</h2>
            <div className="bg-gradient-to-br from-primary/10 via-card to-card border border-primary/30 rounded-xl p-8">
              <p className="text-xl font-display font-medium text-center">
                &quot;Make world-class LSAT prep accessible to every student—not just
                those who can afford $2,000 courses.&quot;
              </p>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              Ready to find out what&apos;s holding you back?
            </p>
            <Link href="/diagnostic">
              <Button size="lg" className="gap-2">
                <Zap className="h-5 w-5" />
                Take the Free Diagnostic
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
