import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

/**
 * The approved demo's "[CHECK]" marker for numbers/claims still to be
 * confirmed. Renders only while the site is in review mode
 * (NEXT_PUBLIC_REVIEW_MODE ≠ "false").
 */
export function ReviewCheck({
  children = "[CHECK]",
  onDark,
  className,
}: {
  children?: React.ReactNode
  onDark?: boolean
  className?: string
}) {
  if (!siteConfig.reviewMode) return null
  return (
    <span
      className={cn(
        "text-[11px] font-bold tracking-[0.02em]",
        onDark ? "text-saffron" : "text-amber-text",
        className
      )}
    >
      {children}
    </span>
  )
}
