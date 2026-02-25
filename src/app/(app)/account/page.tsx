"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  LogOut,
  User,
  CreditCard,
  Bell,
  Shield,
  Crown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const sidebarLinks = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard", active: false },
  { href: "/resources", icon: BookOpen, label: "Resources", active: false },
  { href: "/feedback", icon: BarChart3, label: "Progress", active: false },
  { href: "/account", icon: Settings, label: "Settings", active: true },
]

export default function AccountPage() {
  const [name, setName] = useState("Sarah Mitchell")
  const [email, setEmail] = useState("sarah@example.com")

  // Mock user data
  const user = {
    subscription: "FREE" as const,
    createdAt: "February 20, 2026",
    targetScore: 170,
    currentPlateau: 162,
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card p-4">
        <Link href="/" className="flex items-center gap-1 mb-8">
          <span className="font-mono text-lg font-bold text-primary">[</span>
          <span className="font-display text-lg font-bold">PrepFlow</span>
          <span className="font-mono text-lg font-bold text-primary">]</span>
        </Link>

        <nav className="flex-1 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  link.active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
          <LogOut className="h-5 w-5" />
          Sign out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container-wide py-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-2xl font-bold mb-2">
              Account Settings
            </h1>
            <p className="text-muted-foreground">
              Manage your profile and subscription.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile" className="gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="subscription" className="gap-2">
                  <CreditCard className="h-4 w-4" />
                  Subscription
                </TabsTrigger>
                <TabsTrigger value="preferences" className="gap-2">
                  <Bell className="h-4 w-4" />
                  Preferences
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="font-display font-semibold mb-4">
                    Personal Information
                  </h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <Button>Save Changes</Button>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="font-display font-semibold mb-4">LSAT Goals</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="target">Target Score</Label>
                      <Input
                        id="target"
                        type="number"
                        min={120}
                        max={180}
                        defaultValue={user.targetScore}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plateau">Current Plateau</Label>
                      <Input
                        id="plateau"
                        type="number"
                        min={120}
                        max={180}
                        defaultValue={user.currentPlateau}
                      />
                    </div>
                  </div>
                  <Button className="mt-4">Update Goals</Button>
                </div>

                <div className="bg-card border border-destructive/30 rounded-xl p-6">
                  <h2 className="font-display font-semibold mb-2 text-destructive">
                    Danger Zone
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Permanently delete your account and all data.
                  </p>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </TabsContent>

              {/* Subscription Tab */}
              <TabsContent value="subscription" className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-display font-semibold">Current Plan</h2>
                      <p className="text-sm text-muted-foreground">
                        Member since {user.createdAt}
                      </p>
                    </div>
                    <Badge
                      variant={user.subscription === "FREE" ? "secondary" : "default"}
                      className="text-sm"
                    >
                      {user.subscription}
                    </Badge>
                  </div>

                  {user.subscription === "FREE" ? (
                    <div className="bg-gradient-to-br from-primary/10 via-secondary to-secondary border border-primary/30 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Crown className="h-8 w-8 text-amber-400" />
                        <div>
                          <h3 className="font-display font-semibold">
                            Upgrade to Premium
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Unlock unlimited resources and adaptive sequences.
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2 mb-4 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-500">✓</span>
                          Unlimited resource recommendations
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-500">✓</span>
                          Full resource library access
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-500">✓</span>
                          Adaptive study sequences
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-500">✓</span>
                          Advanced analytics
                        </li>
                      </ul>
                      <div className="flex gap-3">
                        <Link href="/pricing">
                          <Button>Upgrade — $9.99/mo</Button>
                        </Link>
                        <Link href="/pricing">
                          <Button variant="outline">See All Plans</Button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Next billing</span>
                        <span>March 20, 2026</span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground">Amount</span>
                        <span>$9.99/month</span>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline">Change Plan</Button>
                        <Button variant="ghost" className="text-destructive">
                          Cancel Subscription
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Preferences Tab */}
              <TabsContent value="preferences" className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h2 className="font-display font-semibold mb-4">
                    Email Notifications
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        label: "Daily recommendations",
                        description: "Get personalized resources every morning",
                      },
                      {
                        label: "Weekly progress report",
                        description: "Summary of your score improvements",
                      },
                      {
                        label: "New resource alerts",
                        description: "When highly-rated resources match your plateau",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between py-2"
                      >
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-border"
                        />
                      </div>
                    ))}
                  </div>
                  <Button className="mt-4">Save Preferences</Button>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
