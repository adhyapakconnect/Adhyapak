import { MapPinIcon } from "lucide-react"

import { Eyebrow, Heading, Section } from "@/components/common"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig } from "@/config/site"

export function Areas() {
  return (
    <Section
      id="areas"
      aria-labelledby="areas-title"
      className="pb-14 sm:pb-16 lg:pb-20"
      innerClassName="flex flex-wrap items-start gap-x-20 gap-y-10"
    >
      <Reveal className="flex flex-[1_1_340px] flex-col gap-5">
        <Eyebrow>Areas we serve</Eyebrow>
        <Heading id="areas-title">Tutors near you in North-West Delhi</Heading>
      </Reveal>
      <Reveal delay={0.12} className="min-w-0 flex-[1_1_480px]">
        <strong className="block border-b-2 border-ink pb-4 font-serif text-xl font-normal text-ink italic">
          Serving these areas &amp; nearby
        </strong>
        <ul className="grid grid-cols-2 gap-x-5 sm:gap-x-8">
          {siteConfig.areas.map((a) => (
            <li
              key={a}
              className="flex items-center gap-2 border-b border-rule py-3.5 text-[15px] font-medium sm:gap-2.5 sm:text-base"
            >
              <MapPinIcon className="size-4 text-amber-text" aria-hidden />
              {a}
            </li>
          ))}
          <li className="flex items-center border-b border-rule py-3.5 text-[15px] font-medium text-amber-text italic sm:text-base">
            + nearby
          </li>
        </ul>
      </Reveal>
    </Section>
  )
}
