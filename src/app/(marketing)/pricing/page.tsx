"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check, Zap, Sparkles, Crown } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    icon: Zap,
    features: [
      "Complete diagnostic test",
      "3 resource recommendations per day",
      "Access to all free content",
      "Basic progress tracking",
      "Community signals",
    ],
    limitations: [
      "Limited to 3 resources/day",
      "No adaptive sequences",
      "Basic analytics only",
    ],
    cta: "Start Free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "/month",
    description: "For serious test takers",
    icon: Sparkles,
    features: [
      "Everything in Free",
      "Unlimited recommendations",
      "Full resource library",
      "Adaptive study sequences",
      "Advanced progress analytics",
      "Plateau breakthrough insights",
      "Priority resource updates",
      "Email support",
    ],
    limitations: [],
    cta: "Go Premium",
    href: "/signup?plan=premium",
    highlighted: true,
  },
  {
    name: "Annual",
    price: "$99",
    period: "/year",
    description: "Best value — 2 months free",
    icon: Crown,
    features: [
      "Everything in Premium",
      "Save 17% ($20.88)",
      "Early access to new features",
      "1-on-1 onboarding call",
      "Priority resource requests",
      "Exclusive study groups",
    ],
    limitations: [],
    cta: "Get Annual",
    href: "/signup?plan=annual",
    highlighted: false,
    badge: "Best Value",
  },
]

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes! Upgrade anytime and we'll prorate your first month. Downgrade at the end of your billing cycle.",
  },
  {
    question: "Is there a free trial for Premium?",
    answer:
      "We offer a 30-day money-back guarantee instead. If Premium doesn't work for you, get a full refund—no questions asked.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "All major credit cards through Stripe. We also support Apple Pay and Google Pay.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. Cancel with one click from your account settings. You'll keep access until your billing period ends.",
  },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="section-padding">
        <div className="container-wide">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
              Invest in Your Score
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kaplan charges $2,199. Blueprint charges $1,599. We charge $9.99/month
              because LSAT prep shouldn&apos;t bankrupt you before law school does.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "relative bg-card border rounded-xl p-6",
                    plan.highlighted
                      ? "border-primary shadow-lg shadow-primary/10 scale-105"
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
                        "h-12 w-12 rounded-lg flex items-center justify-center",
                        plan.highlighted ? "bg-primary/20" : "bg-secondary"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-6 w-6",
                          plan.highlighted
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="font-mono text-5xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.href} className="block">
                    <Button
                      className="w-full"
                      size="lg"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <Check className="h-5 w-5 text-emerald-500" />
              <span className="text-sm font-medium">
                30-day money-back guarantee. No questions asked.
              </span>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              Pricing FAQ
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
