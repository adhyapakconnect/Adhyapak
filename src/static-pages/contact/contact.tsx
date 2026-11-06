import { IconBrandInstagram } from "@tabler/icons-react"
import { ClockIcon, LandmarkIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { JsonLd, Section, WhatsAppIcon } from "@/components/common"
import { PageHero } from "@/components/marketing/page-hero"
import { buttonVariants } from "@/components/ui/button"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { siteConfig } from "@/config/site"
import { TRACK_EVENTS } from "@/lib/analytics"
import { cn } from "@/lib/utils"

import { Faq } from "./components/faq"
import { PARENT_FAQS, TUTOR_FAQS } from "./data"

/** Tabler's Instagram mark, sized to sit with the lucide icons beside it. */
function InstagramIcon(props: { className?: string; strokeWidth?: number }) {
  return <IconBrandInstagram className={props.className} stroke={props.strokeWidth} aria-hidden />
}

const link = "font-semibold text-ink underline-offset-4 hover:text-amber-text hover:underline"

export default function Contact() {
  const c = siteConfig.contact
  const cards = [
    {
      icon: PhoneIcon,
      title: "Call / WhatsApp",
      body: (
        <>
          <a href={c.parentTel} data-track={TRACK_EVENTS.call} className={link}>
            {c.parentPhoneDisplay}
          </a>
          <br />
          <a
            href={c.parentWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            data-track={TRACK_EVENTS.whatsapp}
            className="font-semibold text-verified underline-offset-4 hover:underline"
          >
            Message on WhatsApp
          </a>
        </>
      ),
    },
    {
      icon: MailIcon,
      title: "Email",
      body: (
        <a href={`mailto:${c.email}`} className={cn(link, "break-all")}>
          {c.email}
        </a>
      ),
    },
    {
      icon: InstagramIcon,
      title: "Instagram",
      body: (
        <a href={c.instagramUrl} target="_blank" rel="noopener noreferrer" className={link}>
          {c.instagramHandle}
        </a>
      ),
    },
    {
      icon: MapPinIcon,
      title: "Location",
      body: (
        <>
          {c.location}
          <br />
          Home &amp; online tuition across North-West Delhi
        </>
      ),
    },
    { icon: ClockIcon, title: "Hours", body: c.hours },
    {
      icon: LandmarkIcon,
      title: "Registered",
      body: (
        <>
          MSME · Udyam, Govt. of India
          <br />
          {siteConfig.udyamNo}
        </>
      ),
    },
  ]

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [...PARENT_FAQS, ...TUTOR_FAQS].map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero
        eyebrow="Contact"
        title="Talk to us"
        intro="Raise an enquiry and we’ll match you with a verified tutor near you — free. Call, WhatsApp or email, whatever suits you."
      />

      <Section tone="khadi" aria-label="Contact details">
        <Stagger className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title} className="flex flex-col gap-3 border-t border-[#d8d3c6] pt-7 pb-9">
              <Icon className="size-[26px] text-amber-text" strokeWidth={1.6} aria-hidden />
              <h2 className="font-sans text-xl font-semibold text-ink">{title}</h2>
              <p className="text-[15.5px] leading-relaxed text-stone">{body}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2} className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={c.parentTel} data-track={TRACK_EVENTS.call} className={buttonVariants({ size: "lg" })}>
            <PhoneIcon aria-hidden />
            Book a Free Demo
          </a>
          <a
            href={c.parentWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            data-track={TRACK_EVENTS.whatsapp}
            className={buttonVariants({ variant: "whatsapp", size: "lg" })}
          >
            <WhatsAppIcon />
            WhatsApp us
          </a>
        </Reveal>
      </Section>

      <Faq />
    </>
  )
}
