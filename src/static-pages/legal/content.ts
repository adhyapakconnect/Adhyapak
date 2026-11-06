/**
 * Legal pages. The final policy text comes from Aman / Legal (Build Doc §7);
 * until then each page carries a clearly-marked placeholder so the footer
 * links resolve and ad networks find the pages.
 */
export type LegalSlug = "privacy" | "terms" | "refund-policy" | "service-policy" | "disclaimer"

export const LEGAL_PAGES: Record<LegalSlug, { title: string; description: string }> = {
  privacy: {
    title: "Privacy Policy",
    description: "How Adhyapak Connect collects, uses and protects the details parents and tutors share with us.",
  },
  terms: {
    title: "Terms & Conditions",
    description: "The terms that apply when parents and tutors use Adhyapak Connect.",
  },
  "refund-policy": {
    title: "Refund & Cancellation",
    description: "Adhyapak Connect's refund and cancellation policy.",
  },
  "service-policy": {
    title: "Service / Delivery Policy",
    description: "How Adhyapak Connect delivers its tutor-matching service.",
  },
  disclaimer: {
    title: "Disclaimer",
    description: "Disclaimer for the Adhyapak Connect website.",
  },
}
