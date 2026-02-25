"use client"

import { cn } from "@/lib/utils"
import { Flame, TrendingUp, Clock } from "lucide-react"

type SortOption = "hot" | "top" | "new"

interface SortControlsProps {
  value: SortOption
  onChange: (value: SortOption) => void
}

const sortOptions = [
  { value: "hot" as const, label: "Hot", icon: Flame },
  { value: "top" as const, label: "Top", icon: TrendingUp },
  { value: "new" as const, label: "New", icon: Clock },
]

export function SortControls({ value, onChange }: SortControlsProps) {
  return (
    <div className="flex items-center gap-1 p-1 bg-secondary/50 rounded-lg">
      {sortOptions.map((option) => {
        const Icon = option.icon
        const isActive = value === option.value
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            <Icon className="h-4 w-4" />
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
