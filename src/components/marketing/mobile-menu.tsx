"use client"

import { PhoneIcon } from "lucide-react"
import Link from "next/link"

import { BrandMark } from "@/components/common/brand-logo"
import { WhatsAppIcon } from "@/components/common/whatsapp-icon"
import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import { TRACK_EVENTS } from "@/lib/analytics"
import { cn } from "@/lib/utils"

import { DemoLink } from "./demo-link"
import { NAV_LINKS } from "./nav-links"

/** The sheet behind the header's menu button. Loaded on first open only. */
export default function MobileMenu({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const close = () => onOpenChange(false)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="border-l border-white/10 bg-night">
        <SheetHeader className="flex-row items-center gap-3 border-b border-white/10 pr-16">
          <BrandMark size={36} />
          <SheetTitle className="font-serif text-lg">{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col px-5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="border-b border-white/10 py-4 font-serif text-xl text-paper transition-colors hover:text-saffron"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <SheetFooter className="gap-3">
          <DemoLink onClick={close} className={cn(buttonVariants(), "w-full")}>
            Book Free Demo
          </DemoLink>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={siteConfig.contact.parentTel}
              data-track={TRACK_EVENTS.call}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
            >
              <PhoneIcon /> Call
            </a>
            <a
              href={siteConfig.contact.parentWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              data-track={TRACK_EVENTS.whatsapp}
              className={cn(buttonVariants({ variant: "whatsapp", size: "sm" }), "w-full")}
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
