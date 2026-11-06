import Image from "next/image"

import { Eyebrow, Heading, Section } from "@/components/common"
import { Reveal } from "@/components/motion/reveal"

export function Mission() {
  return (
    <Section id="about" tone="dark" space="none" className="pb-20 sm:pb-24 lg:pb-32" aria-labelledby="about-title">
      <div className="grid items-center gap-12 border-t border-white/13 pt-16 sm:pt-20 lg:grid-cols-2 lg:gap-16 lg:pt-24">
        <Reveal>
          <Image
            src="/images/mission-family.webp"
            alt="Parents with their child holding a mathematics textbook"
            width={800}
            height={500}
            sizes="(min-width: 1024px) 560px, 92vw"
            className="h-auto w-full rounded-sm object-cover lg:h-[400px]"
          />
        </Reveal>
        <Reveal delay={0.12} className="flex flex-col">
          <Eyebrow onDark className="mb-5">
            Our promise
          </Eyebrow>
          <Heading
            id="about-title"
            tone="onDark"
            className="text-[2.5rem] font-light italic sm:text-5xl lg:text-[4rem]"
          >
            Learning begins with trust.
          </Heading>
          <p className="mt-5 max-w-[32em] text-[17px] text-mist">
            We connect families with verified teachers from their own neighbourhood — and we stay with you even after
            the match. Trusted tutors, nearby, with real support.
          </p>
          <dl className="mt-10 grid grid-cols-1 gap-6 min-[440px]:grid-cols-3">
            {[
              ["100%", "Verified before listing"],
              ["Home + Online", "Your choice of mode"],
              ["Free", "Replacement if needed"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col-reverse justify-end border-t border-saffron pt-3.5">
                <dt className="text-[13.5px] text-mist">{v}</dt>
                <dd className="font-serif text-2xl leading-tight text-paper">{k}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
