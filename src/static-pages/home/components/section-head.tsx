import { Eyebrow, Heading } from "@/components/common"
import { Reveal } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

/**
 * Eyebrow + heading on the left, optional intro on the right (stacks on
 * phones). Used at the top of most home sections.
 */
export function SectionHead({
  eyebrow,
  title,
  intro,
  onDark,
  className,
  id,
}: {
  eyebrow: React.ReactNode
  title: React.ReactNode
  intro?: React.ReactNode
  onDark?: boolean
  className?: string
  id?: string
}) {
  return (
    <Reveal className={cn("mb-12 flex flex-wrap items-end justify-between gap-x-20 gap-y-5 sm:mb-14", className)}>
      <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
        <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        <Heading id={id} tone={onDark ? "onDark" : "ink"}>
          {title}
        </Heading>
      </div>
      {intro && (
        <p className={cn("flex-[0_1_400px] text-base sm:text-[17px]", onDark ? "text-mist" : "text-stone")}>{intro}</p>
      )}
    </Reveal>
  )
}
