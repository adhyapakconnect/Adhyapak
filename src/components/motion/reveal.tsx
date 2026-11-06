"use client"

import { animate, motion, MotionConfig, useInView, useReducedMotion, type Variants } from "motion/react"
import { useLayoutEffect, useRef } from "react"

/**
 * Scroll-reveal building blocks. Server components pass their markup in as
 * children, so only these thin wrappers ship as client code.
 *
 * Motion: opacity + a short rise, strong ease-out (the --ease-out token in
 * globals.css), once per element. Transforms are full strings so they stay
 * on the compositor. With prefers-reduced-motion, MotionProvider drops the
 * rise and keeps the fade.
 */

const EASE_OUT = [0.23, 1, 0.32, 1] as const
const DURATION = 0.8
const RISE = "translateY(24px)"
const REST = "translateY(0px)"
/** Start a little before the element is fully on screen. */
const VIEWPORT = { once: true, margin: "0px 0px -10% 0px" } as const

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

const tags = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  article: motion.article,
  figure: motion.figure,
  p: motion.p,
} as const

type Tag = keyof typeof tags
type RevealProps = {
  as?: Tag
  className?: string
  /** Seconds. Use for a heading → intro → content cascade inside one section. */
  delay?: number
  children: React.ReactNode
} & Omit<React.HTMLAttributes<HTMLElement>, "children" | "className">

/** One block that fades and rises into place when scrolled into view. */
export function Reveal({ as = "div", className, delay = 0, children, ...rest }: RevealProps) {
  const Comp = tags[as] as typeof motion.div
  return (
    <Comp
      data-reveal
      className={className}
      initial={{ opacity: 0, transform: RISE }}
      whileInView={{ opacity: 1, transform: REST }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION, ease: EASE_OUT, delay }}
      {...(rest as object)}
    >
      {children}
    </Comp>
  )
}

const group: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}
const item: Variants = {
  hidden: { opacity: 0, transform: RISE },
  shown: { opacity: 1, transform: REST, transition: { duration: DURATION, ease: EASE_OUT } },
}

/** A list whose StaggerItem children arrive one after another (70ms apart). */
export function Stagger({ as = "ul", className, children, ...rest }: RevealProps) {
  const Comp = tags[as] as typeof motion.ul
  return (
    <Comp
      className={className}
      variants={group}
      initial="hidden"
      whileInView="shown"
      viewport={VIEWPORT}
      {...(rest as object)}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({ as = "li", className, children, ...rest }: Omit<RevealProps, "delay">) {
  const Comp = tags[as] as typeof motion.li
  return (
    <Comp data-reveal className={className} variants={item} {...(rest as object)}>
      {children}
    </Comp>
  )
}

/**
 * A number that counts up once when it scrolls into view. The server renders
 * the final value (for search engines and no-JS visitors); the client resets it
 * to 0 before first paint while its StaggerItem is still invisible.
 */
export function CountUp({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, VIEWPORT)
  const reduce = useReducedMotion()
  const fmt = (n: number) => `${n.toFixed(decimals)}${suffix}`

  useLayoutEffect(() => {
    if (!reduce && ref.current) ref.current.textContent = fmt(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reset once, before paint
  }, [])

  useLayoutEffect(() => {
    if (!inView || reduce || !ref.current) return
    const el = ref.current
    const controls = animate(0, value, {
      duration: 1.6,
      ease: EASE_OUT,
      delay: 0.15,
      onUpdate: (n) => (el.textContent = fmt(n)),
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- value/decimals/suffix are static per instance
  }, [inView, reduce])

  return <span ref={ref}>{fmt(value)}</span>
}
