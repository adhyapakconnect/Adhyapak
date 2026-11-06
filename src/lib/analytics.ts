/**
 * Conversion tracking for GA4 and the Meta Pixel.
 *
 * Elements opt in with `data-track="<event>"` — a single delegated listener in
 * `components/marketing/analytics.tsx` picks the click up, so server components
 * never need an onClick handler just to be measured.
 */

export const TRACK_EVENTS = {
  bookDemo: "book_demo_click",
  whatsapp: "whatsapp_click",
  call: "call_click",
  tutorApply: "tutor_apply_click",
} as const

export type TrackEvent = (typeof TRACK_EVENTS)[keyof typeof TRACK_EVENTS]

type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void
type Fbq = (command: "track" | "trackCustom", name: string, params?: Record<string, unknown>) => void

declare global {
  interface Window {
    gtag?: Gtag
    fbq?: Fbq
    dataLayer?: unknown[]
  }
}

/** Meta's standard events, so ad sets can optimise on them directly. */
const META_STANDARD: Partial<Record<TrackEvent, string>> = {
  book_demo_click: "Lead",
  whatsapp_click: "Contact",
  call_click: "Contact",
  tutor_apply_click: "SubmitApplication",
}

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return
  window.gtag?.("event", event, params)
  const standard = META_STANDARD[event as TrackEvent]
  if (standard) window.fbq?.("track", standard, { ...params, source_event: event })
  else window.fbq?.("trackCustom", event, params)
}
