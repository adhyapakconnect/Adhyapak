import Link from "next/link"

import { BrandLogo, Container } from "@/components/common"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { DemoLink } from "./demo-link"
import { MobileNav } from "./mobile-nav"
import { NAV_LINKS } from "./nav-links"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-night/95 backdrop-blur-md supports-backdrop-filter:bg-night/85">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <BrandLogo />
        <nav aria-label="Main" className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b border-transparent py-1.5 text-sm font-medium text-mist transition-colors hover:border-saffron hover:text-paper"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <DemoLink className={cn(buttonVariants({ size: "sm" }), "hidden min-[400px]:inline-flex")}>
            Book Free Demo
          </DemoLink>
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
