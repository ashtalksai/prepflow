import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  product: [
    { href: "/pricing", label: "Pricing" },
    { href: "/diagnostic", label: "Free Diagnostic" },
    { href: "/resources", label: "Resources" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/deck", label: "Investor Deck" },
    { href: "mailto:hello@prepflow.com", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="font-mono text-lg font-bold text-primary">[</span>
              <span className="font-display text-lg font-bold">PrepFlow</span>
              <span className="font-mono text-lg font-bold text-primary">]</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              AI-powered LSAT prep matching plateaus to breakthroughs.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/prepflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/prepflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/prepflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PrepFlow. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with data from{" "}
            <a
              href="https://reddit.com/r/LSAT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              r/LSAT
            </a>{" "}
            (231K members)
          </p>
        </div>
      </div>
    </footer>
  )
}
