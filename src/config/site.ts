/**
 * Single source of truth for brand, contact and link details.
 *
 * Contact numbers and links follow the Home Go-Live Build Doc (§4 link wiring).
 * Parent and tutor leads stay separate: parents use the parent number, the
 * tutor "Apply" button uses the tutor number.
 */

const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  demoFormUrl: process.env.NEXT_PUBLIC_DEMO_FORM_URL,
  reviewMode: process.env.NEXT_PUBLIC_REVIEW_MODE,
}

const parentPhone = "918287583895"
const tutorPhone = "917266019278"

export const siteConfig = {
  name: "Adhyapak Connect",
  shortName: "Adhyapak",
  tagline: "Learning begins with trust.",
  url: (env.siteUrl ?? "https://adhyapakconnect.in").replace(/\/$/, ""),
  locale: "en_IN",

  /** Meta description — local keywords for home/online tuition + area names. */
  description:
    "ID-verified, teaching-tested home & online tutors in North-West Delhi — Rohini, Pitampura, Shalimar Bagh, Ashok Vihar, Model Town. Book a free demo. Free for parents.",

  /**
   * Every "Book Free Demo" button points here. Until the Google Form link is
   * ready it falls back to the free-demo call band on the home page.
   */
  demoHref: env.demoFormUrl || "/#demo",
  demoIsExternal: Boolean(env.demoFormUrl),

  /**
   * Review mode shows the [CHECK] markers from the
   * approved demo. Set NEXT_PUBLIC_REVIEW_MODE=false once the content is final.
   */
  reviewMode: env.reviewMode !== "false",

  contact: {
    parentPhone: `+${parentPhone}`,
    parentPhoneDisplay: "+91 82875 83895",
    parentTel: `tel:+${parentPhone}`,
    parentWhatsApp: `https://wa.me/${parentPhone}`,
    tutorPhoneDisplay: "+91 72660 19278",
    tutorWhatsApp: `https://wa.me/${tutorPhone}`,
    email: "officialadhyapakconnect@gmail.com",
    instagramHandle: "@adhyapakconnect",
    instagramUrl: "https://www.instagram.com/adhyapakconnect/",
    location: "Shalimar Bagh, New Delhi · 110088",
    hours: "Every day · 9:00 AM – 9:00 PM",
  },

  udyamNo: "UDYAM-DL-06-0173455",

  /** IT Act, 2000 grievance officer (footer + /grievance). */
  grievance: {
    officer: "Abhishek Tripathi",
    phoneDisplay: "+91 92176 57396",
    tel: "tel:+919217657396",
    responseDays: "15 (fifteen)",
  },

  areas: [
    "Shalimar Bagh",
    "Ashok Vihar",
    "Rohini",
    "Model Town",
    "Pitampura",
    "Keshav Puram",
    "Wazirpur",
    "Vijay Nagar",
  ],

  keywords: [
    "home tutor",
    "home tuition",
    "online tuition",
    "tutor near me",
    "home tutor in Rohini",
    "home tutor in Pitampura",
    "home tutor in Shalimar Bagh",
    "home tutor in Ashok Vihar",
    "home tutor in Model Town",
    "North-West Delhi tuition",
    "verified tutors Delhi",
    "CBSE tuition",
    "board exam tuition",
  ],
} as const

export type SiteConfig = typeof siteConfig
