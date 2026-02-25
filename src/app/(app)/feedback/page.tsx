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
  Plus,
  TrendingUp,
  Calendar,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

// Mock score history
const scoreHistory = [
  { date: "Feb 20", score: 158, change: 0 },
  { date: "Feb 15", score: 158, change: 2 },
  { date: "Feb 10", score: 156, change: -1 },
  { date: "Feb 5", score: 157, change: 3 },
  { date: "Feb 1", score: 154, change: 0 },
]

const sidebarLinks = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard", active: false },
  { href: "/resources", icon: BookOpen, label: "Resources", active: false },
  { href: "/feedback", icon: BarChart3, label: "Progress", active: true },
  { href: "/account", icon: Settings, label: "Settings", active: false },
]

export default function FeedbackPage() {
  const [newScore, setNewScore] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)

  const currentScore = scoreHistory[0].score
  const startScore = scoreHistory[scoreHistory.length - 1].score
  const targetScore = 170
  const totalImprovement = currentScore - startScore
  const progressToTarget = ((currentScore - startScore) / (targetScore - startScore)) * 100

  const handleAddScore = () => {
    // TODO: Implement score submission
    setDialogOpen(false)
    setNewScore("")
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
        <div className="container-wide py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="font-display text-2xl font-bold mb-2">
                Progress Tracking
              </h1>
              <p className="text-muted-foreground">
                Track your score improvements over time.
              </p>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Log New Score
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Log Practice Test Score</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="score">Score (120-180)</Label>
                    <Input
                      id="score"
                      type="number"
                      min={120}
                      max={180}
                      placeholder="e.g., 162"
                      value={newScore}
                      onChange={(e) => setNewScore(e.target.value)}
                    />
                  </div>
                  <Button onClick={handleAddScore} className="w-full">
                    Save Score
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Current Score
                </CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="font-mono text-3xl font-bold">{currentScore}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Improvement
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <p className="font-mono text-3xl font-bold text-emerald-500">
                  +{totalImprovement}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Target Score
                </CardTitle>
                <Target className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="font-mono text-3xl font-bold">{targetScore}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Tests Logged
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="font-mono text-3xl font-bold">{scoreHistory.length}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Progress to Target */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-6 mb-8"
          >
            <h2 className="font-display font-semibold mb-4">Progress to Target</h2>
            <div className="flex items-center gap-4 mb-2">
              <span className="font-mono text-sm">{startScore}</span>
              <Progress value={progressToTarget} className="flex-1 h-3" />
              <span className="font-mono text-sm">{targetScore}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {Math.round(progressToTarget)}% of the way to your target.{" "}
              <span className="text-foreground font-medium">
                {targetScore - currentScore} points to go!
              </span>
            </p>
          </motion.div>

          {/* Score History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <h2 className="font-display font-semibold mb-4">Score History</h2>
            <div className="space-y-3">
              {scoreHistory.map((entry, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground w-16">
                      {entry.date}
                    </span>
                    <span className="font-mono text-xl font-bold">
                      {entry.score}
                    </span>
                  </div>
                  {entry.change !== 0 && (
                    <span
                      className={cn(
                        "font-mono text-sm font-medium",
                        entry.change > 0 ? "text-emerald-500" : "text-destructive"
                      )}
                    >
                      {entry.change > 0 ? "+" : ""}
                      {entry.change}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
