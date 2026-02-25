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
  Crown,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ResourceCard } from "@/components/dashboard/resource-card"
import { SortControls } from "@/components/dashboard/sort-controls"
import { PlateauBadge } from "@/components/dashboard/plateau-badge"

// Mock data
const mockResources = [
  {
    id: "1",
    title:
      "[FREE] The Logic Games Bible Method Explained - Complete Breakdown for 155-165 Range",
    url: "https://reddit.com/r/LSAT/example1",
    platform: "REDDIT" as const,
    type: "THREAD" as const,
    difficulty: 160,
    upvotes: 2847,
    topic: "Logic Games",
    description:
      "Comprehensive breakdown of the PowerScore method for those stuck in the 155-165 range. Includes specific drills for sequencing and grouping games.",
    timeAgo: "3h ago",
    comments: 156,
  },
  {
    id: "2",
    title: "7Sage: Fool-Proof Method for Sequencing Games (157→168 in 4 weeks)",
    url: "https://youtube.com/example2",
    platform: "YOUTUBE" as const,
    type: "VIDEO" as const,
    difficulty: 162,
    upvotes: 1523,
    topic: "Logic Games",
    description:
      "Step-by-step walkthrough of the 7Sage fool-proof method. Specific timestamps for each game type.",
    timeAgo: "6h ago",
    comments: 89,
  },
  {
    id: "3",
    title:
      "Reading Comprehension: How I Finally Broke Through 165 After 2 Months Plateau",
    url: "https://reddit.com/r/LSAT/example3",
    platform: "REDDIT" as const,
    type: "THREAD" as const,
    difficulty: 166,
    upvotes: 982,
    topic: "Reading Comp",
    description:
      "Personal breakthrough story with specific techniques that helped. Focus on passage mapping and main point identification.",
    timeAgo: "1d ago",
    comments: 67,
  },
  {
    id: "4",
    title: "Khan Academy LSAT - Complete Logical Reasoning Playlist for Beginners",
    url: "https://khanacademy.org/lsat",
    platform: "KHAN" as const,
    type: "COURSE" as const,
    difficulty: 154,
    upvotes: 3241,
    topic: "Logical Reasoning",
    description:
      "Official LSAC-partnered content. Best for building fundamentals before 160.",
    timeAgo: "2d ago",
    comments: 203,
  },
]

const sidebarLinks = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard", active: true },
  { href: "/resources", icon: BookOpen, label: "Resources", active: false },
  { href: "/feedback", icon: BarChart3, label: "Progress", active: false },
  { href: "/account", icon: Settings, label: "Settings", active: false },
]

export default function DashboardPage() {
  const [sort, setSort] = useState<"hot" | "top" | "new">("hot")

  // Mock user data
  const user = {
    name: "Sarah",
    currentPlateau: 162,
    targetScore: 170,
    progress: 65,
    resourcesUsed: 23,
    subscription: "FREE" as const,
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 mb-8">
          <span className="font-mono text-lg font-bold text-primary">[</span>
          <span className="font-display text-lg font-bold">PrepFlow</span>
          <span className="font-mono text-lg font-bold text-primary">]</span>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  link.active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Upgrade CTA */}
        {user.subscription === "FREE" && (
          <div className="bg-gradient-to-br from-primary/20 via-secondary to-secondary border border-primary/30 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="h-5 w-5 text-amber-400" />
              <span className="font-display font-semibold">Go Premium</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Unlock unlimited resources and adaptive sequences.
            </p>
            <Link href="/pricing">
              <Button size="sm" className="w-full">
                Upgrade — $9.99/mo
              </Button>
            </Link>
          </div>
        )}

        {/* Logout */}
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
          <LogOut className="h-5 w-5" />
          Sign out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container-wide py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-2xl font-bold mb-2">
              Welcome back, {user.name}
            </h1>
            <p className="text-muted-foreground">
              Here are today&apos;s top resources for your plateau.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            {/* Current Plateau */}
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">
                  Current Plateau
                </span>
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-bold">
                  {user.currentPlateau}
                </span>
                <PlateauBadge score={user.currentPlateau} />
              </div>
            </div>

            {/* Target Score */}
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">
                  Target Score
                </span>
                <TrendingUp className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-3xl font-bold">
                  {user.targetScore}
                </span>
                <span className="text-sm text-muted-foreground">
                  (+{user.targetScore - user.currentPlateau} points to go)
                </span>
              </div>
              <Progress value={user.progress} className="h-2" />
            </div>

            {/* Resources Used */}
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">
                  Resources Used
                </span>
                <Zap className="h-5 w-5 text-amber-500" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-3xl font-bold">
                  {user.resourcesUsed}
                </span>
                <span className="text-sm text-muted-foreground">this month</span>
              </div>
              {user.subscription === "FREE" && (
                <p className="text-xs text-amber-500 mt-2">
                  3 of 3 daily recs used
                </p>
              )}
            </div>
          </motion.div>

          {/* Resource Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-bold">
                Recommended for You
              </h2>
              <SortControls value={sort} onChange={setSort} />
            </div>

            <div className="space-y-4">
              {mockResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <ResourceCard {...resource} />
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            {user.subscription === "FREE" ? (
              <div className="mt-8 p-6 bg-secondary/50 border border-dashed border-border rounded-xl text-center">
                <Crown className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                <p className="font-display font-semibold mb-1">
                  You&apos;ve reached your daily limit
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Upgrade to Premium for unlimited resource recommendations.
                </p>
                <Link href="/pricing">
                  <Button>Upgrade to Premium</Button>
                </Link>
              </div>
            ) : (
              <div className="text-center mt-8">
                <Button variant="outline">Load More Resources</Button>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
}
