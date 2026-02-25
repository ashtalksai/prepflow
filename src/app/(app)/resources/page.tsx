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
  Filter,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ResourceCard } from "@/components/dashboard/resource-card"
import { SortControls } from "@/components/dashboard/sort-controls"
import { PlateauBadgeInteractive } from "@/components/dashboard/plateau-badge"
import { cn } from "@/lib/utils"

const allResources = [
  {
    id: "1",
    title: "[FREE] The Logic Games Bible Method Explained - Complete Breakdown",
    url: "https://reddit.com/r/LSAT/example1",
    platform: "REDDIT" as const,
    type: "THREAD" as const,
    difficulty: 160,
    upvotes: 2847,
    topic: "Logic Games",
    description: "Comprehensive breakdown of the PowerScore method.",
    timeAgo: "3h ago",
    comments: 156,
  },
  {
    id: "2",
    title: "7Sage: Fool-Proof Method for Sequencing Games",
    url: "https://youtube.com/example2",
    platform: "YOUTUBE" as const,
    type: "VIDEO" as const,
    difficulty: 162,
    upvotes: 1523,
    topic: "Logic Games",
    timeAgo: "6h ago",
    comments: 89,
  },
  {
    id: "3",
    title: "Reading Comprehension: Breaking Through 165",
    url: "https://reddit.com/r/LSAT/example3",
    platform: "REDDIT" as const,
    type: "THREAD" as const,
    difficulty: 166,
    upvotes: 982,
    topic: "Reading Comp",
    timeAgo: "1d ago",
    comments: 67,
  },
  {
    id: "4",
    title: "Khan Academy LSAT - Logical Reasoning Playlist",
    url: "https://khanacademy.org/lsat",
    platform: "KHAN" as const,
    type: "COURSE" as const,
    difficulty: 154,
    upvotes: 3241,
    topic: "Logical Reasoning",
    timeAgo: "2d ago",
    comments: 203,
  },
  {
    id: "5",
    title: "7Sage Explanation Videos - All PT 1-40 Logic Games",
    url: "https://7sage.com/lg",
    platform: "SEVENSAGE" as const,
    type: "VIDEO" as const,
    difficulty: 158,
    upvotes: 1876,
    topic: "Logic Games",
    timeAgo: "5d ago",
    comments: 45,
  },
  {
    id: "6",
    title: "My 148→172 Journey: Complete Resource List",
    url: "https://reddit.com/r/LSAT/example6",
    platform: "REDDIT" as const,
    type: "THREAD" as const,
    difficulty: 155,
    upvotes: 4521,
    topic: "General",
    timeAgo: "1w ago",
    comments: 312,
  },
]

const topics = ["All", "Logic Games", "Logical Reasoning", "Reading Comp", "General"]
const plateaus = [150, 158, 165, 170]

const sidebarLinks = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard", active: false },
  { href: "/resources", icon: BookOpen, label: "Resources", active: true },
  { href: "/feedback", icon: BarChart3, label: "Progress", active: false },
  { href: "/account", icon: Settings, label: "Settings", active: false },
]

export default function ResourcesPage() {
  const [sort, setSort] = useState<"hot" | "top" | "new">("hot")
  const [search, setSearch] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("All")
  const [selectedPlateau, setSelectedPlateau] = useState<number | null>(null)

  // Filter resources
  const filteredResources = allResources.filter((r) => {
    const matchesTopic = selectedTopic === "All" || r.topic === selectedTopic
    const matchesSearch =
      search === "" || r.title.toLowerCase().includes(search.toLowerCase())
    const matchesPlateau =
      selectedPlateau === null ||
      (r.difficulty >= selectedPlateau && r.difficulty < selectedPlateau + 8)
    return matchesTopic && matchesSearch && matchesPlateau
  })

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
            className="mb-8"
          >
            <h1 className="font-display text-2xl font-bold mb-2">
              Resource Library
            </h1>
            <p className="text-muted-foreground">
              Browse all {allResources.length}+ curated LSAT resources.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-4 mb-6"
          >
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Topic Filter */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Topic
              </p>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <Badge
                    key={topic}
                    variant={selectedTopic === topic ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedTopic(topic)}
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Plateau Filter */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Plateau Range</p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedPlateau === null ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedPlateau(null)}
                >
                  All Levels
                </Badge>
                {plateaus.map((p) => (
                  <PlateauBadgeInteractive
                    key={p}
                    score={p}
                    selected={selectedPlateau === p}
                    onClick={() =>
                      setSelectedPlateau(selectedPlateau === p ? null : p)
                    }
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sort + Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                {filteredResources.length} resources found
              </p>
              <SortControls value={sort} onChange={setSort} />
            </div>

            <div className="space-y-4">
              {filteredResources.map((resource, index) => (
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

            {filteredResources.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <p>No resources match your filters.</p>
                <Button
                  variant="ghost"
                  className="mt-2"
                  onClick={() => {
                    setSearch("")
                    setSelectedTopic("All")
                    setSelectedPlateau(null)
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
}
