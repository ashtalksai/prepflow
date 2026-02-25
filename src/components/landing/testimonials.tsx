"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "I was stuck at 162 for 3 months. PrepFlow showed me Logic Games resources I never would have found on my own. Hit 170 in 6 weeks.",
    author: "Sarah M.",
    role: "3L at Northwestern",
    score: "162 → 170",
    scoreColor: "text-emerald-400",
  },
  {
    quote:
      "The Reddit-style interface just clicks. It feels like the organized version of r/LSAT I always wanted. Finally broke through 158.",
    author: "Marcus T.",
    role: "Admitted to UCLA Law",
    score: "154 → 165",
    scoreColor: "text-blue-400",
  },
  {
    quote:
      "I was spending $200/month on Kaplan with no improvement. PrepFlow's free tier alone got me the resources that actually moved my score.",
    author: "Emily K.",
    role: "2L at Fordham",
    score: "159 → 168",
    scoreColor: "text-blue-400",
  },
  {
    quote:
      "The plateau diagnostic was eye-opening. I didn't even know I was struggling with Reading Comp until PrepFlow broke it down.",
    author: "David L.",
    role: "Law School Applicant",
    score: "156 → 163",
    scoreColor: "text-purple-400",
  },
]

export function Testimonials() {
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
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Real Breakthroughs, Real Scores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who stopped searching and started improving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover-lift"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                <p className="text-muted-foreground pl-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-display font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`font-mono font-bold ${testimonial.scoreColor}`}>
                    {testimonial.score}
                  </p>
                  <p className="text-xs text-muted-foreground">Score jump</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
