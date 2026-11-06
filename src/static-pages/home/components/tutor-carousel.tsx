"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Stagger } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

/**
 * A native scroll-snap row (swipe on touch, shift-scroll / buttons on desktop).
 * The cards stay server-rendered; only the prev/next buttons are client code.
 */
export function CarouselTrack({
  id,
  label,
  className,
  children,
}: {
  id: string
  label: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <Stagger
      as="div"
      id={id}
      role="region"
      aria-label={label}
      tabIndex={0}
      className={cn(
        "no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-7 overflow-x-auto px-5 pt-1 pb-6 scroll-smooth sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:px-0.5",
        className,
      )}
    >
      {children}
    </Stagger>
  )
}

export function CarouselButtons({ target }: { target: string }) {
  const scroll = (dir: -1 | 1) => {
    const el = document.getElementById(target)
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + 28 : 316
    el.scrollBy({ left: dir * step, behavior: "smooth" })
  }
  const cls =
    "grid size-12 place-items-center rounded-full border border-[#cfc9ba] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
  return (
    <div className="hidden gap-2.5 sm:flex">
      <button type="button" className={cls} onClick={() => scroll(-1)} aria-label="Previous" aria-controls={target}>
        <ChevronLeftIcon className="size-5" />
      </button>
      <button type="button" className={cls} onClick={() => scroll(1)} aria-label="Next" aria-controls={target}>
        <ChevronRightIcon className="size-5" />
      </button>
    </div>
  )
}
