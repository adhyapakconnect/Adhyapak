import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * shadcn (base-vega) button, re-toned for the Adhyapak Connect palette.
 *
 * For links that look like buttons, apply `buttonVariants()` to a `<Link>` or
 * `<a>` instead of nesting an anchor inside a <button>.
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2.5 rounded-md border font-sans font-semibold whitespace-nowrap transition-[background-position,background-color,border-color,color,box-shadow,scale] ease-(--ease-out) [transition-duration:300ms,300ms,300ms,300ms,300ms,160ms] active:scale-[0.97] outline-none select-none focus-visible:ring-3 focus-visible:ring-saffron/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[18px]",
  {
    variants: {
      variant: {
        /** Saffron, with a gradient that shifts on hover. */
        primary:
          "border-transparent bg-[linear-gradient(135deg,#fcd34d,#f59e0b_50%,#f97316)] bg-size-[160%_160%] bg-position-[0_0] text-indigo hover:bg-position-[100%_100%]",
        /** Dark ink fill — on saffron or light grounds. */
        ink: "border-transparent bg-ink text-paper hover:bg-indigo",
        /** Hairline outline for dark grounds. */
        outline: "border-paper/35 bg-transparent text-paper hover:border-paper",
        /** WhatsApp green (#15803D — 5:1 with white). */
        whatsapp: "border-transparent bg-verified text-white hover:bg-[#166534]",
        ghost: "border-transparent text-ink hover:bg-khadi",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        default: "h-12 px-5 text-[15px]",
        lg: "h-14 px-7 text-base",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
