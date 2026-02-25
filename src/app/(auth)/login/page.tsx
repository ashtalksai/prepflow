"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Mail, Lock, Chrome, ArrowLeft } from "lucide-react"
import { toast } from "sonner"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // TODO: Implement NextAuth signIn
    // For now, simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success("Logged in successfully!")
    router.push("/dashboard")
    setLoading(false)
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    // TODO: Implement NextAuth signIn with Google
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success("Logged in with Google!")
    router.push("/dashboard")
    setLoading(false)
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

          <h1 className="font-display text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted-foreground mb-8">
            Sign in to continue your LSAT prep journey.
          </p>

          {/* Google Login */}
          <Button
            variant="outline"
            className="w-full gap-3 mb-6"
            onClick={handleGoogleLogin}
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

          {/* Email Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up free
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right: Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/20 via-card to-card items-center justify-center p-12 border-l border-border">
        <div className="max-w-md text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Break Through Your Plateau
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of LSAT students who stopped searching and started
            improving with AI-powered resource matching.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-mono text-2xl font-bold text-primary">+8</p>
              <p className="text-xs text-muted-foreground">Avg. improvement</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold text-primary">5K+</p>
              <p className="text-xs text-muted-foreground">Resources</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold text-primary">231K</p>
              <p className="text-xs text-muted-foreground">Community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
