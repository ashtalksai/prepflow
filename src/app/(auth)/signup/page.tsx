"use client"

import { Suspense, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Mail, Lock, User, Chrome, ArrowLeft, Check } from "lucide-react"
import { toast } from "sonner"

function SignupForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "free"

  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // TODO: Implement NextAuth signUp
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success("Account created! Taking you to the diagnostic...")
    router.push("/diagnostic")
    setLoading(false)
  }

  const handleGoogleSignup = async () => {
    setLoading(true)
    // TODO: Implement NextAuth signIn with Google
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success("Signed up with Google!")
    router.push("/diagnostic")
    setLoading(false)
  }

  const planLabels: Record<string, { name: string; badge?: string }> = {
    free: { name: "Free" },
    premium: { name: "Premium", badge: "$9.99/mo" },
    annual: { name: "Annual", badge: "$99/yr" },
  }

  return (
    <div className="min-h-screen flex">
      {/* Left: Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 mb-8">
            <span className="font-mono text-2xl font-bold text-primary">[</span>
            <span className="font-display text-2xl font-bold">PrepFlow</span>
            <span className="font-mono text-2xl font-bold text-primary">]</span>
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <h1 className="font-display text-3xl font-bold">Create account</h1>
            {planLabels[plan].badge && (
              <Badge variant="secondary">{planLabels[plan].badge}</Badge>
            )}
          </div>
          <p className="text-muted-foreground mb-8">
            Start with a free diagnostic to find your plateau.
          </p>

          {/* Google Signup */}
          <Button
            variant="outline"
            className="w-full gap-3 mb-6"
            onClick={handleGoogleSignup}
            disabled={loading}
          >
            <Chrome className="h-5 w-5" />
            Continue with Google
          </Button>

          <div className="relative mb-6">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-xs text-muted-foreground">
              or continue with email
            </span>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleEmailSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  minLength={8}
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Minimum 8 characters
              </p>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right: What you get */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/20 via-card to-card items-center justify-center p-12 border-l border-border">
        <div className="max-w-md">
          <h2 className="font-display text-3xl font-bold mb-6">
            What you&apos;ll get
          </h2>
          <ul className="space-y-4">
            {[
              "Personalized diagnostic to find your plateau",
              "AI-matched resources for your score level",
              "Reddit-style interface with upvotes & signals",
              "Progress tracking to see what works",
              "Access to 5,000+ curated LSAT resources",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-emerald-500" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 bg-card border border-border rounded-xl">
            <p className="text-sm text-muted-foreground">
              &quot;I went from 158 to 170 in 6 weeks using PrepFlow&apos;s recommendations.
              Best $9.99 I&apos;ve ever spent.&quot;
            </p>
            <p className="text-sm font-medium mt-2">— Sarah M., Northwestern Law</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SignupForm />
    </Suspense>
  )
}
