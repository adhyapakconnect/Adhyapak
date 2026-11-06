import Link from "next/link"

import { Eyebrow, Heading, Section } from "@/components/common"
import { siteConfig } from "@/config/site"

/** Grievance redressal — details mirror the footer's Grievance Officer block. */
export default function Grievance() {
  const c = siteConfig.contact
  const g = siteConfig.grievance
  return (
    <Section aria-labelledby="grievance-title" innerClassName="max-w-[820px]">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>{" "}
        <span aria-hidden>/</span> <span className="text-ink">Grievance Redressal</span>
      </nav>
      <Eyebrow>Support</Eyebrow>
      <Heading as="h1" id="grievance-title" className="mt-5">
        Grievance Redressal
      </Heading>
      <dl className="mt-10 border-t border-rule text-base">
        {[
          ["Grievance Officer", g.officer],
          [
            "Email",
            <a key="e" className="underline underline-offset-4" href={`mailto:${c.email}`}>
              {c.email}
            </a>,
          ],
          [
            "Phone",
            <a key="p" className="underline underline-offset-4" href={g.tel}>
              {g.phoneDisplay}
            </a>,
          ],
        ].map(([k, v]) => (
          <div key={k as string} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[200px_1fr]">
            <dt className="font-semibold text-ink">{k}</dt>
            <dd className="break-all text-stone">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-sm text-stone">
        As per the Information Technology Act, 2000 &amp; rules thereunder. We respond to complaints within{" "}
        {g.responseDays} working days.
      </p>
    </Section>
  )
}
