"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function TermsPage() {
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
              Terms of Service
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
              <h2 className="font-display text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using PrepFlow, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground">
                PrepFlow is an AI-powered LSAT preparation platform that aggregates and 
                recommends study resources based on your current score plateau. We curate 
                content from various sources including Reddit, YouTube, and 7Sage to provide 
                personalized study recommendations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground mb-4">
                To access certain features, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activity under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">4. Subscription and Payments</h2>
              <p className="text-muted-foreground mb-4">
                PrepFlow offers free and paid subscription tiers:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Free:</strong> Access to diagnostic tool and basic recommendations</li>
                <li><strong>Premium ($9.99/mo):</strong> Full access to personalized sequences and adaptive engine</li>
                <li><strong>Annual ($99/yr):</strong> Premium features at discounted rate</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Subscriptions renew automatically unless cancelled. You may cancel at any time 
                through your account settings. Refunds are handled on a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">5. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use PrepFlow for any illegal purpose</li>
                <li>Share your account with others</li>
                <li>Attempt to access other users&apos; accounts or data</li>
                <li>Interfere with or disrupt the service</li>
                <li>Scrape or extract content without permission</li>
                <li>Misrepresent your identity or affiliation</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">6. Content and Intellectual Property</h2>
              <p className="text-muted-foreground">
                PrepFlow aggregates and links to third-party content. We do not claim ownership 
                of external resources. All PrepFlow original content, branding, and software 
                are protected by intellectual property laws. LSAT is a registered trademark 
                of the Law School Admission Council (LSAC). PrepFlow is not affiliated with 
                or endorsed by LSAC.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">7. Disclaimers</h2>
              <p className="text-muted-foreground">
                PrepFlow is provided &quot;as is&quot; without warranties of any kind. We do not 
                guarantee specific LSAT score improvements. Results depend on individual effort, 
                existing knowledge, and many other factors. We aggregate resources but are not 
                responsible for the accuracy of third-party content.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, PrepFlow shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages resulting 
                from your use of or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may update these terms from time to time. We will notify you of significant 
                changes via email or through the service. Continued use after changes 
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-4">10. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@prepflow.com" className="text-primary hover:underline">
                  legal@prepflow.com
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
