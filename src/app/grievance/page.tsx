import type { Metadata } from "next"

import Grievance from "@/static-pages/grievance/grievance"

export const metadata: Metadata = {
  title: "Grievance Redressal",
  description: "Contact the Adhyapak Connect Grievance Officer.",
  alternates: { canonical: "/grievance" },
  robots: { index: false, follow: true },
}

export default Grievance
