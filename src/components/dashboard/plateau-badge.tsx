import { cn } from "@/lib/utils"

interface PlateauBadgeProps {
  score: number
  className?: string
}

function getPlateauLevel(score: number): {
  label: string
  className: string
} {
  if (score < 158) {
    return {
      label: "150-158",
      className: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    }
  } else if (score < 165) {
    return {
      label: "158-165",
      className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    }
  } else if (score < 170) {
    return {
      label: "165-170",
      className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    }
  } else {
    return {
      label: "170+",
      className: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    }
  }
}

export function PlateauBadge({ score, className }: PlateauBadgeProps) {
  const { label, className: plateauClass } = getPlateauLevel(score)

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium border",
        plateauClass,
        className
      )}
    >
      {label}
    </span>
  )
}

export function PlateauBadgeInteractive({
  score,
  selected,
  onClick,
}: PlateauBadgeProps & { selected?: boolean; onClick?: () => void }) {
  const { label, className: plateauClass } = getPlateauLevel(score)

  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-md text-sm font-mono font-medium border transition-all",
        selected
          ? cn(plateauClass, "ring-2 ring-offset-2 ring-offset-background")
          : "bg-secondary/50 text-muted-foreground border-border hover:bg-secondary",
        "hover:scale-105"
      )}
    >
      {label}
    </button>
  )
}
