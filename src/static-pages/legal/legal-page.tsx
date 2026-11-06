import Link from "next/link"

import { Eyebrow, Heading, Section } from "@/components/common"
import { siteConfig } from "@/config/site"

import { LEGAL_PAGES, type LegalSlug } from "./content"

export function LegalPage({ slug }: { slug: LegalSlug }) {
  const page = LEGAL_PAGES[slug]
  const c = siteConfig.contact
  return (
    <Section aria-labelledby="legal-title" innerClassName="max-w-[820px]">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>{" "}
        <span aria-hidden>/</span> <span className="text-ink">{page.title}</span>
      </nav>
      <Eyebrow>Legal</Eyebrow>
      <Heading as="h1" id="legal-title" className="mt-5">
        {page.title}
      </Heading>
      <div className="mt-10 space-y-5 border-t border-rule pt-8 text-base text-stone">
        <p className="rounded-md border border-dashed border-amber-text/50 bg-[#fef3c7]/50 p-4 text-ink">
          This policy is being finalised and will be published here shortly.
        </p>
        <p>
          For any question in the meantime, write to{" "}
          <a className="font-medium text-ink underline underline-offset-4" href={`mailto:${c.email}`}>
            {c.email}
          </a>{" "}
          or call{" "}
          <a className="font-medium text-ink underline underline-offset-4" href={c.parentTel}>
            {c.parentPhoneDisplay}
          </a>
          .
        </p>
      </div>
    </Section>
  )
}
