import { cn } from "@/lib/utils"

/**
 * The small all-caps label above a section heading, led by a short rule.
 * Amber on light grounds (AA), saffron on dark ones.
 */
export function Eyebrow({
  className,
  onDark,
  ...props
}: React.ComponentProps<"p"> & { onDark?: boolean }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-xs font-semibold tracking-[0.16em] uppercase before:h-px before:w-5.5 before:bg-current",
        onDark ? "text-saffron" : "text-amber-text",
        className
      )}
      {...props}
    />
  )
}
