import { PhoneIcon } from "lucide-react"

import { Accent, Heading, Section } from "@/components/common"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig } from "@/config/site"
import { TRACK_EVENTS } from "@/lib/analytics"

export function FinalCta() {
  return (
    <Section tone="dark" mesh="alt" className="py-24 sm:py-28 lg:py-40" aria-labelledby="final-title">
      <Reveal>
        <Heading id="final-title" className="max-w-[12em] text-5xl font-light text-paper sm:text-7xl lg:text-8xl">
          Book a free demo <Accent>today.</Accent>
        </Heading>
      </Reveal>
      <Reveal
        delay={0.15}
        className="mt-10 flex flex-col gap-6 border-t border-white/16 pt-8 md:flex-row md:items-center md:justify-between"
      >
        <p className="text-lg text-mist">Free to find. Trusted by parents across North-West Delhi.</p>
        <a
          href={siteConfig.contact.parentTel}
          data-track={TRACK_EVENTS.call}
          className={buttonVariants({ size: "lg" })}
        >
          <PhoneIcon aria-hidden />
          Call {siteConfig.contact.parentPhoneDisplay}
        </a>
      </Reveal>
    </Section>
  )
}
