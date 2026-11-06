import type { Metadata } from "next"

import Pricing from "@/static-pages/pricing/pricing"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free to find for parents and students. Tutors pay a success commission — 30% of the first month's fee, only when the match works — with loyalty and referral rates.",
  alternates: { canonical: "/pricing" },
}

export default Pricing
