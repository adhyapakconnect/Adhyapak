import {
  CheckIcon,
  GraduationCapIcon,
  HandshakeIcon,
  HeartHandshakeIcon,
  MapPinIcon,
  ScaleIcon,
  ShieldCheckIcon,
} from "lucide-react"

import { Eyebrow, Heading, Section } from "@/components/common"
import { FinalCta } from "@/components/marketing/final-cta"
import { PageHero } from "@/components/marketing/page-hero"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"

import { PRINCIPLES, VALUES } from "./data"

const VALUE_ICONS = [HandshakeIcon, ShieldCheckIcon, MapPinIcon, ScaleIcon, HeartHandshakeIcon, GraduationCapIcon]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Trusted tutors, from your own neighbourhood"
        intro="Adhyapak Connect helps families in Delhi find the right tutor — a verified teacher who lives nearby, knows the subject, and genuinely fits the child. Finding a tutor has always meant word-of-mouth and guesswork; we set out to fix that."
      />

      <Section aria-label="Vision and mission">
        <Stagger as="div" className="grid gap-x-16 gap-y-12 md:grid-cols-2">
          {[
            ["Our Vision", "India’s most trusted teachers’ network."],
            ["Our Mission", "To provide the best-fit teacher for your child."],
          ].map(([title, body]) => (
            <StaggerItem as="div" key={title} className="flex flex-col gap-4 border-t-2 border-ink pt-7">
              <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-amber-text uppercase">{title}</h2>
              <p className="font-serif text-3xl leading-[1.2] font-light tracking-[-0.02em] text-ink sm:text-4xl">
                {body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="khadi" aria-labelledby="values-title">
        <Reveal className="mb-14 flex flex-col gap-5">
          <Eyebrow>What we stand for</Eyebrow>
          <Heading id="values-title">Our core values</Heading>
        </Reveal>
        <Stagger className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = VALUE_ICONS[i]
            return (
              <StaggerItem key={v.title} className="flex flex-col gap-3 border-t border-[#d8d3c6] pt-7 pb-9">
                <Icon className="size-[26px] text-amber-text" strokeWidth={1.6} aria-hidden />
                <h3 className="text-xl font-semibold text-ink">{v.title}</h3>
                <p className="text-[15.5px] text-stone">{v.body}</p>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Section>

      <Section aria-labelledby="principles-title">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-x-20 gap-y-5">
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
            <Eyebrow>How we operate</Eyebrow>
            <Heading id="principles-title">Guiding principles</Heading>
          </div>
          <p className="flex-[0_1_400px] text-base text-stone sm:text-[17px]">
            The promises that run the business — the same for every family and every teacher.
          </p>
        </Reveal>
        <Stagger className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <StaggerItem key={p.title} className="flex flex-col gap-3 border-t border-rule pt-7 pb-9">
              <span className="grid size-8 place-items-center rounded-full bg-verified/10 text-verified">
                <CheckIcon className="size-[18px]" strokeWidth={2.4} aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-ink">{p.title}</h3>
              <p className="text-[15.5px] text-stone">{p.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <FinalCta />
    </>
  )
}
