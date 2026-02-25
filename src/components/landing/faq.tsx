"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How is PrepFlow different from Kaplan or 7Sage?",
    answer:
      "Kaplan and 7Sage create their own content. PrepFlow doesn't—we aggregate and organize the best FREE resources from Reddit, YouTube, and other platforms. Think of us as the Spotify of LSAT prep: we don't make the music, we help you find exactly what you need for YOUR score level.",
  },
  {
    question: "How does the plateau detection work?",
    answer:
      "Our 5-question diagnostic analyzes your current score, recent practice patterns, and weak areas. We then match your profile against patterns from thousands of successful breakthroughs to identify what's likely holding you back and what resources helped others in your exact situation.",
  },
  {
    question: "Is the free tier actually useful?",
    answer:
      "Yes! The free tier includes a full diagnostic, 3 personalized recommendations per day, and access to all free resources in our database. Many students see score improvements without ever upgrading. Premium just gives you unlimited access and adaptive sequences.",
  },
  {
    question: "Where does the data come from?",
    answer:
      "We aggregate public data from r/LSAT (231K members), YouTube LSAT channels, 7Sage forums, and other study communities. Our AI analyzes what resources students mention when discussing score improvements at specific levels.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. Cancel with one click from your account settings. No questions asked. If you cancel within 30 days, we'll refund you completely. We're confident in our product, so we make it easy to leave if it's not working for you.",
  },
  {
    question: "Do you cover MCAT, GRE, or other exams?",
    answer:
      "Not yet! We're starting with LSAT to perfect our approach. MCAT is on the roadmap for 2025. Sign up for our newsletter to be notified when we launch other exams.",
  },
  {
    question: "How often is the resource database updated?",
    answer:
      "Daily. We continuously scrape Reddit, YouTube, and other sources for new highly-upvoted LSAT resources. Our AI re-ranks recommendations based on fresh feedback signals every 24 hours.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about PrepFlow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
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
    </section>
  )
}
