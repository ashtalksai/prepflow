"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              Legal
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: February 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-invert max-w-none space-y-8"
          >
            <section>
              <h2 className="font-display text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                When you use PrepFlow, we collect information you provide directly to us:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Account information (email address, name)</li>
                <li>Diagnostic quiz responses and LSAT score data</li>
                <li>Learning preferences and plateau information</li>
                <li>Usage data and interaction with resources</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Personalize your LSAT prep experience based on your plateau</li>
                <li>Match you with relevant resources from Reddit, YouTube, and 7Sage</li>
                <li>Track your progress and provide feedback</li>
                <li>Improve our AI matching algorithms</li>
                <li>Send you important updates about your account</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share aggregated, anonymized data for research purposes or to improve 
                our services. We may share information with service providers who assist us 
                in operating PrepFlow (payment processors, hosting providers).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your data, 
                including encryption in transit and at rest. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your account and data</li>
                <li>Export your data in a portable format</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">6. Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies to maintain your session, remember your preferences, 
                and analyze how our service is used. You can control cookie preferences 
                through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@prepflow.com" className="text-primary hover:underline">
                  privacy@prepflow.com
                </a>
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
