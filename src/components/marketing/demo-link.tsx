import Link from "next/link"

import { siteConfig } from "@/config/site"
import { TRACK_EVENTS } from "@/lib/analytics"

/**
 * Every "Book Free Demo" button renders through this, so the destination is one
 * setting (NEXT_PUBLIC_DEMO_FORM_URL) and the click is tracked as a conversion.
 */
export function DemoLink({
  children,
  ...props
}: Omit<React.ComponentProps<"a">, "href">) {
  if (siteConfig.demoIsExternal) {
    return (
      <a
        href={siteConfig.demoHref}
        target="_blank"
        rel="noopener noreferrer"
        data-track={TRACK_EVENTS.bookDemo}
        {...props}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={siteConfig.demoHref} data-track={TRACK_EVENTS.bookDemo} {...props}>
      {children}
    </Link>
  )
}
