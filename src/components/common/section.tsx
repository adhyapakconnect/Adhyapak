import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * A full-bleed section band with the centred max-width column inside.
 *
 * `tone` picks the ground. `dark` sections can add the drifting gradient with
 * `mesh` (decorative, hidden from assistive tech).
 */
const section = cva("relative scroll-mt-20", {
  variants: {
    tone: {
      light: "bg-ivory text-ink",
      khadi: "bg-khadi text-ink",
      dark: "dark-band bg-night text-paper",
    },
    space: {
      default: "py-20 sm:py-24 lg:py-32",
      tight: "py-14 sm:py-16 lg:py-20",
      none: "",
    },
  },
  defaultVariants: { tone: "light", space: "default" },
})

type SectionProps = React.ComponentProps<"section"> &
  VariantProps<typeof section> & {
    /** Classes for the inner max-width column. */
    innerClassName?: string
    /** Add the slow-moving gradient (dark sections only). */
    mesh?: boolean | "alt"
  }

export function Section({
  className,
  innerClassName,
  tone,
  space,
  mesh,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(section({ tone, space }), mesh && "overflow-hidden", className)}
      {...props}
    >
      {mesh && <div aria-hidden className={cn("mesh", mesh === "alt" && "mesh-alt")} />}
      <Container className={cn("relative", innerClassName)}>{children}</Container>
    </section>
  )
}

/** The page's max-width column with responsive side gutters. */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12", className)} {...props} />
}
