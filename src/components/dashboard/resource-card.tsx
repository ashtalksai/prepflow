"use client"

import { ArrowUp, ExternalLink, Clock, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlateauBadge } from "./plateau-badge"
import { cn } from "@/lib/utils"

interface ResourceCardProps {
  title: string
  url: string
  platform: "REDDIT" | "YOUTUBE" | "SEVENSAGE" | "KHAN" | "BLOG" | "OTHER"
  type: "VIDEO" | "ARTICLE" | "THREAD" | "COURSE" | "TOOL"
  difficulty: number
  upvotes: number
  topic: string
  description?: string
  timeAgo?: string
  comments?: number
}

const platformIcons: Record<string, string> = {
  REDDIT: "🔴",
  YOUTUBE: "▶️",
  SEVENSAGE: "7️⃣",
  KHAN: "📚",
  BLOG: "📝",
  OTHER: "🔗",
}

const platformColors: Record<string, string> = {
  REDDIT: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  YOUTUBE: "bg-red-500/20 text-red-400 border-red-500/30",
  SEVENSAGE: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  KHAN: "bg-green-500/20 text-green-400 border-green-500/30",
  BLOG: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  OTHER: "bg-gray-500/20 text-gray-400 border-gray-500/30",
}

export function ResourceCard({
  title,
  url,
  platform,
  type,
  difficulty,
  upvotes,
  topic,
  description,
  timeAgo = "2h ago",
  comments = 0,
}: ResourceCardProps) {
  return (
    <Card className="hover-lift group border-border/50 hover:border-primary/30 transition-all">
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Upvote Section (Reddit-style) */}
          <div className="flex flex-col items-center gap-1 text-muted-foreground">
            <button className="p-1 hover:text-primary hover:bg-primary/10 rounded transition-colors">
              <ArrowUp className="h-5 w-5" />
            </button>
            <span className="font-mono text-sm font-bold text-foreground">
              {upvotes >= 1000 ? `${(upvotes / 1000).toFixed(1)}k` : upvotes}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Header badges */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge
                variant="outline"
                className={cn("text-xs font-mono", platformColors[platform])}
              >
                {platformIcons[platform]} {platform}
              </Badge>
              <PlateauBadge score={difficulty} />
              <Badge variant="outline" className="text-xs">
                {topic}
              </Badge>
            </div>

            {/* Title */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2"
            >
              <h3 className="font-display font-semibold text-foreground group-hover/link:text-primary transition-colors line-clamp-2">
                {title}
              </h3>
              <ExternalLink className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity text-muted-foreground" />
            </a>

            {/* Description */}
            {description && (
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {description}
              </p>
            )}

            {/* Footer meta */}
            <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {timeAgo}
              </span>
              {comments > 0 && (
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  {comments} comments
                </span>
              )}
              <Badge variant="secondary" className="text-xs">
                {type}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
