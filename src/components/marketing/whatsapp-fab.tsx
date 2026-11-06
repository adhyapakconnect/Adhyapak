import { WhatsAppIcon } from "@/components/common"
import { siteConfig } from "@/config/site"
import { TRACK_EVENTS } from "@/lib/analytics"

/** Persistent WhatsApp button (parent number), mobile + desktop. */
export function WhatsAppFab() {
  return (
    <a
      href={siteConfig.contact.parentWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp us"
      data-track={TRACK_EVENTS.whatsapp}
      className="fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-verified text-white shadow-[0_10px_24px_-10px_rgb(0_0_0/0.55)] ring-4 ring-verified/20 transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" stroke={1.75} />
    </a>
  )
}
