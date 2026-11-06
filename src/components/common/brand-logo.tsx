import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

/** The अ mark: saffron Devanagari letter on a royal-indigo disc. */
export function BrandMark({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size, fontSize: size * 0.55 }}
      className={cn(
        "grid shrink-0 place-items-center rounded-full border-[1.5px] border-saffron bg-indigo font-deva leading-none font-semibold text-saffron",
        className
      )}
    >
      {/* Noto's अ sits high in its line box; nudge its ink onto the disc's centre. */}
      <span className="translate-y-[0.2em]">अ</span>
    </span>
  )
}

export function BrandLogo({ className, showTagline = true }: { className?: string; showTagline?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <BrandMark />
      <span className="flex flex-col">
        <span className="font-serif text-lg leading-tight font-medium tracking-[-0.01em] text-paper sm:text-[19px]">
          {siteConfig.name}
        </span>
        {showTagline && (
          <span className="hidden text-[11.5px] font-medium tracking-[0.01em] text-mist sm:block">
            Learning begins with trust
          </span>
        )}
      </span>
    </Link>
  )
}
