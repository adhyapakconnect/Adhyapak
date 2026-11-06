import type { Metadata } from "next"

import { LEGAL_PAGES } from "@/static-pages/legal/content"
import { LegalPage } from "@/static-pages/legal/legal-page"

const page = LEGAL_PAGES["service-policy"]

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/service-policy" },
  // Placeholder text until Legal sends the final policy — keep out of the index.
  robots: { index: false, follow: true },
}

export default function Page() {
  return <LegalPage slug="service-policy" />
}
