import { Eyebrow, Heading, Section } from "@/components/common"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"

const STEPS = [
  { n: "1", title: "Tell us", body: "Call or WhatsApp your class, subject and area — we fill the form for you." },
  { n: "2", title: "Get matched", body: "We send verified tutors near you and set up a free demo class." },
  { n: "3", title: "Start learning", body: "Begin classes. Not the right fit? We help replace — free." },
]

export function HowItWorks() {
  return (
    <Section id="how" aria-labelledby="how-title" innerClassName="flex flex-wrap items-start gap-x-20 gap-y-10">
      <Reveal className="flex flex-[1_1_320px] flex-col gap-5 lg:sticky lg:top-28">
        <Eyebrow>How it works</Eyebrow>
        <Heading id="how-title">Three simple steps</Heading>
        <p className="max-w-[24em] text-[17px] text-stone sm:text-lg">
          Tell us what you need. We match. You start — with support all the way.
        </p>
      </Reveal>
      <Stagger as="ol" className="min-w-0 flex-[2_1_520px] border-b border-rule">
        {STEPS.map((s) => (
          <StaggerItem
            key={s.n}
            className="grid grid-cols-[56px_1fr] items-baseline gap-5 border-t border-rule py-7 sm:grid-cols-[96px_1fr] sm:gap-6 sm:py-8"
          >
            <span aria-hidden className="font-serif text-5xl leading-[0.9] font-light text-amber-text sm:text-[64px]">
              {s.n}
            </span>
            <div>
              <h3 className="mb-1.5 text-xl font-semibold text-ink sm:text-2xl">{s.title}</h3>
              <p className="text-base text-stone">{s.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
