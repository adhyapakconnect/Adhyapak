import { AtSignIcon, MailIcon } from "lucide-react"
import Link from "next/link"

import { BrandMark, Container } from "@/components/common"
import { siteConfig } from "@/config/site"

import { DemoLink } from "./demo-link"
import { FOOTER_COMPANY, FOOTER_LEGAL } from "./nav-links"

const linkCls = "block py-1 text-sm text-mist transition-colors hover:text-paper"
const headCls = "mb-3.5 font-sans text-xs font-semibold tracking-[0.16em] text-paper uppercase"

export function SiteFooter() {
  const c = siteConfig.contact
  const g = siteConfig.grievance
  return (
    <footer id="contact" className="scroll-mt-20 bg-night-deep pt-16 pb-24 text-mist sm:pt-20 sm:pb-10">
      <Container>
        <div className="mb-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="col-span-2 min-w-0 md:col-span-1">
            <div className="flex items-center gap-3">
              <BrandMark />
              <span className="font-serif text-[19px] font-medium text-paper">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-[280px] text-sm">Verified home &amp; online tutors near you. Learning begins with trust.</p>
            <p className="mt-3 text-[13px] text-[#918db0]">
              MSME Registered · Udyam, Govt. of India
              <br />
              Udyam No: <span className="text-saffron">{siteConfig.udyamNo}</span>
            </p>
          </div>

          <nav aria-label="Company">
            <h2 className={headCls}>Company</h2>
            {FOOTER_COMPANY.map((l) => (
              <Link key={l.href} href={l.href} className={linkCls}>
                {l.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Legal">
            <h2 className={headCls}>Legal</h2>
            {FOOTER_LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className={linkCls}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="col-span-2 min-w-0 md:col-span-1">
            <h2 className={headCls}>Support</h2>
            <DemoLink className={linkCls}>Book Free Demo</DemoLink>
            <Link href="/fees" className={linkCls}>
              Fees
            </Link>
            <Link href="/contact#faq" className={linkCls}>
              FAQ
            </Link>
            <Link href="/grievance" className={linkCls}>
              Grievance Redressal
            </Link>
            <a href={`mailto:${c.email}`} className="mt-3.5 flex items-center gap-2 text-sm break-all hover:text-paper">
              <MailIcon className="size-4 shrink-0 text-saffron" aria-hidden />
              {c.email}
            </a>
            <a
              href={c.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-sm hover:text-paper"
            >
              <AtSignIcon className="size-4 shrink-0 text-saffron" aria-hidden />
              {c.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-1.5 border-y border-white/12 py-5">
          <h2 className="mb-1 font-sans text-xs font-semibold tracking-[0.16em] text-saffron uppercase">Grievance Officer</h2>
          <p className="text-sm text-[#d6d3e6]">
            Name: {g.officer}
          </p>
          <p className="text-sm text-[#d6d3e6]">
            Email: {c.email} &nbsp;·&nbsp; Phone: {g.phoneDisplay}
          </p>
          <p className="text-[12.5px] text-[#918db0]">
            As per the Information Technology Act, 2000 &amp; rules thereunder. We respond to complaints within{" "}
            {g.responseDays} working days.
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-3 text-[13.5px]">
          <span>© 2026 Adhyapak Connect · Delhi, India</span>
          <span className="font-serif text-base text-saffron italic">Learning begins with trust.</span>
        </div>
      </Container>
    </footer>
  )
}
