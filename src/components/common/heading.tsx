import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/** Fraunces display headings. Sizes are Tailwind's stock steps. */
const heading = cva("m-0 font-serif font-normal", {
  variants: {
    size: {
      hero: "text-[2.75rem] leading-[1.02] font-light sm:text-6xl lg:text-7xl xl:text-8xl",
      section: "text-4xl sm:text-5xl lg:text-6xl",
      sub: "text-3xl sm:text-4xl lg:text-5xl",
    },
    tone: {
      ink: "text-ink",
      onDark: "text-paper",
    },
  },
  defaultVariants: { size: "section", tone: "ink" },
})

type HeadingProps = React.ComponentProps<"h2"> &
  VariantProps<typeof heading> & { as?: "h1" | "h2" | "h3" }

export function Heading({ className, size, tone, as: Tag = "h2", ...props }: HeadingProps) {
  return <Tag className={cn(heading({ size, tone }), className)} {...props} />
}

/** Emphasised words inside a heading: saffron italic with a slow moving gradient. */
export function Accent({ className, ...props }: React.ComponentProps<"em">) {
  return <em className={cn("text-gold-move font-normal italic", className)} {...props} />
}
