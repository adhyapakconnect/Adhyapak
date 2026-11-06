import {
  ClipboardCheckIcon,
  HeartHandshakeIcon,
  LandmarkIcon,
  MapPinIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
} from "lucide-react"

import { Eyebrow, Heading, Section } from "@/components/common"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"

const REASONS = [
  { icon: ShieldCheckIcon, title: "ID-verified tutors", body: "Every tutor passes KYC before they reach you." },
  {
    icon: ClipboardCheckIcon,
    title: "Teaching-tested",
    body: "A teaching eligibility test — we check teaching skill, not just degrees.",
  },
  { icon: MapPinIcon, title: "Local & nearby", body: "Tutors from your own area — easy, trusted." },
  { icon: LandmarkIcon, title: "MSME registered", body: "A registered business — Udyam, Govt. of India." },
  { icon: HeartHandshakeIcon, title: "Support after placement", body: "We stay with you — even after the match." },
  { icon: RefreshCwIcon, title: "Free replacement", body: "Wrong fit? We find another tutor, no hassle." },
]

export function WhyUs() {
  return (
    <Section id="why" tone="dark" className="pb-6 sm:pb-8 lg:pb-10" aria-labelledby="why-title">
      <Reveal className="mb-14 flex flex-col gap-5 sm:mb-16">
        <Eyebrow onDark>Why parents choose us</Eyebrow>
        <Heading id="why-title" tone="onDark">
          Trust, built in
        </Heading>
      </Reveal>
      <Stagger className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map(({ icon: Icon, title, body }) => (
          <StaggerItem key={title} className="flex flex-col gap-3 border-t border-white/13 pt-7 pb-9">
            <Icon className="size-[26px] text-saffron" strokeWidth={1.6} aria-hidden />
            <h3 className="text-xl font-semibold text-paper">{title}</h3>
            <p className="text-[15.5px] text-mist">{body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
