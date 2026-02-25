"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, Zap, Sparkles, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the basics",
    icon: Zap,
    features: [
      "Basic diagnostic test",
      "3 resource recommendations/day",
      "Access to free content",
      "Score tracking (basic)",
    ],
    cta: "Start Free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "/month",
    description: "For serious LSAT prep",
    icon: Sparkles,
    features: [
      "Advanced diagnostic analysis",
      "Unlimited recommendations",
      "Full resource library access",
      "Adaptive study sequences",
      "Progress analytics",
      "Priority support",
    ],
    cta: "Go Premium",
    href: "/signup?plan=premium",
    highlighted: true,
  },
  {
    name: "Annual",
    price: "$99",
    period: "/year",
    description: "Best value — save 17%",
    icon: Crown,
    features: [
      "Everything in Premium",
      "2 months free",
      "Early access to new features",
      "1-on-1 onboarding call",
      "Resource request priority",
    ],
    cta: "Get Annual",
    href: "/signup?plan=annual",
    highlighted: false,
    badge: "Best Value",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Invest in Your Score, Not in Searching
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free. Upgrade when you&apos;re ready to accelerate your breakthrough.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative bg-card border rounded-xl p-6 hover-lift",
                  plan.highlighted
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border"
                )}
              >
                {plan.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black">
                    {plan.badge}
                  </Badge>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={cn(
                      "h-10 w-10 rounded-lg flex items-center justify-center",
                      plan.highlighted ? "bg-primary/20" : "bg-secondary"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5",
                        plan.highlighted ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                  </div>
                  <h3 className="font-display font-semibold text-xl">
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="font-mono text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={plan.href} className="block">
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Money back guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          30-day money-back guarantee. Cancel anytime.
        </motion.p>
      </div>
    </section>
  )
}
