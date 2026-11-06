import { IconBrandWhatsapp } from "@tabler/icons-react"

/** WhatsApp brand icon used on every WhatsApp action. */
export function WhatsAppIcon({ className, stroke }: { className?: string; stroke?: number }) {
  return <IconBrandWhatsapp aria-hidden className={className} stroke={stroke} />
}
