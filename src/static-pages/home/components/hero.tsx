import { PhoneIcon } from "lucide-react"
import { IconRosetteDiscountCheck, IconRosetteDiscountCheckFilled } from "@tabler/icons-react"
import Image from "next/image"

import { Accent, Container, Heading, WhatsAppIcon } from "@/components/common"
import { CredStrip } from "@/components/marketing/cred-strip"
import { DemoLink } from "@/components/marketing/demo-link"
import { CountUp, Stagger, StaggerItem } from "@/components/motion/reveal"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { TRACK_EVENTS } from "@/lib/analytics"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-night text-paper">
      <div aria-hidden className="mesh" />
      <CredStrip />

      <Container className="relative grid items-center gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24 lg:pb-28">
        <div>
          <p className="inline-flex animate-rise items-center gap-2.5 text-[13.5px] font-medium text-[#d6d3e6]">
            <span className="size-[7px] rounded-full bg-saffron" aria-hidden />
            Verified teachers near you
          </p>
          <Heading as="h1" size="hero" tone="onDark" className="mt-6 animate-rise [animation-delay:80ms]">
            The right tutor,
            <br />
            <Accent>right near you.</Accent>
          </Heading>
          <p className="mt-6 max-w-[28em] animate-rise text-[17px] text-mist [animation-delay:160ms] sm:text-lg lg:text-[19px]">
            ID-verified, teaching-tested home &amp; online tutors in your area. Learning begins with trust.
          </p>
          <div className="mt-9 flex animate-rise flex-col gap-3 [animation-delay:240ms] min-[420px]:flex-row min-[420px]:flex-wrap">
            <DemoLink className={buttonVariants({ size: "lg" })}>
              <PhoneIcon aria-hidden />
              Book a Free Demo
            </DemoLink>
            <a
              href={siteConfig.contact.parentWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              data-track={TRACK_EVENTS.whatsapp}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <WhatsAppIcon className="text-[#4ade80]" />
              WhatsApp us
            </a>
          </div>
          <p className="mt-8 animate-rise text-sm text-mist [animation-delay:320ms]">
            ✓ <b className="font-semibold text-paper">Free to find</b> &nbsp;·&nbsp; Parents never pay to connect
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <figure className="relative w-full max-w-[400px] pb-8 sm:max-w-[440px]">
            {/* Cut-out portrait standing in a gold arch; the legs fade into the hero ground. */}
            <div className="relative h-[460px] animate-arch-in [mask-image:linear-gradient(to_bottom,black_82%,transparent)] [animation-delay:200ms] sm:h-[560px]">
              <div
                aria-hidden
                className="absolute inset-x-6 top-20 bottom-0 rounded-t-full bg-[radial-gradient(120%_80%_at_50%_15%,#fde68a,#f59e0b_45%,#c2410c_80%,transparent)] outline outline-offset-[10px] outline-saffron/50 sm:inset-x-8"
              />
              <Image
                src="/images/hero-tutor.webp"
                alt="A verified tutor holding a marker, ready to teach"
                width={941}
                height={1671}
                preload
                sizes="(min-width: 640px) 316px, 260px"
                className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 drop-shadow-[0_24px_40px_rgb(0_0_0/0.45)]"
              />
            </div>
            {/* Floating glass cards with a gold hairline frame: the wrapper enters, the frame floats. */}
            <div className="absolute top-10 -left-3 hidden animate-rise [animation-delay:650ms] sm:-left-24 sm:block lg:-left-28">
              <div className="-rotate-3 animate-float rounded-xl bg-[linear-gradient(135deg,#fcd34d,rgb(245_158_11/0.25)_55%,#fbbf24)] p-px shadow-[0_22px_44px_-18px_rgb(0_0_0/0.65)]">
                <div className="flex items-center gap-3 rounded-[11px] bg-white/95 py-3 pr-4 pl-3 text-ink backdrop-blur">
                  <span className="grid size-9 place-items-center rounded-full bg-[linear-gradient(135deg,#fcd34d,#f59e0b_50%,#f97316)] text-indigo shadow-[0_4px_12px_-4px_rgb(245_158_11/0.8)]">
                    <IconRosetteDiscountCheck className="size-5" stroke={2} aria-hidden />
                  </span>
                  <div>
                    <b className="block text-sm leading-tight">ID-Verified</b>
                    <span className="mt-0.5 block text-[12.5px] text-stone">KYC + teaching eligibility test</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-2 bottom-0 animate-rise [animation-delay:800ms] sm:-right-7">
              <div className="rotate-2 animate-float rounded-xl bg-[linear-gradient(135deg,#fbbf24,rgb(245_158_11/0.25)_45%,#fcd34d)] p-px shadow-[0_22px_44px_-18px_rgb(0_0_0/0.65)] [animation-delay:-3.5s]">
                <div className="flex items-center gap-3 rounded-[11px] bg-white/95 py-3 pr-4 pl-3 text-ink backdrop-blur">
                  <div className="grid size-[44px] place-items-center rounded-full bg-indigo font-serif text-[15px] text-saffron ring-2 ring-saffron ring-offset-2 ring-offset-white">
                    AK
                  </div>
                  <div>
                    <span className="flex items-center gap-1">
                      <b className="text-[14.5px] leading-tight">Arjun K.</b>
                      <IconRosetteDiscountCheckFilled className="size-4 text-amber-text" aria-label="Verified" />
                    </span>
                    <span className="text-[12.5px] text-stone">Maths · Class 9–10</span>
                  </div>
                  <div className="ml-1 text-xs tracking-[1px] text-amber-text" role="img" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </Container>
    </section>
  )
}

export function DemoCallBand() {
  return (
    <div id="demo" className="band-gold-move scroll-mt-20 bg-saffron text-indigo">
      <Container className="flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="max-w-[640px]">
          <h2 className="flex items-center gap-3 font-serif text-2xl sm:text-[28px] lg:text-[32px]">
            <PhoneIcon className="size-6 shrink-0 sm:size-7" strokeWidth={1.6} aria-hidden />
            Book a free demo on call
          </h2>
          <p className="mt-2 text-[15.5px] text-[#2a2566]">
            No forms to fill. Just call us — we note your needs and fill the whole form for you, then arrange a free
            demo class with a verified tutor.
          </p>
        </div>
        <a
          href={siteConfig.contact.parentTel}
          data-track={TRACK_EVENTS.call}
          className={cn(buttonVariants({ variant: "ink", size: "lg" }), "group w-full sm:w-auto")}
        >
          Call {siteConfig.contact.parentPhoneDisplay}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </Container>
    </div>
  )
}

export function Stats() {
  const stat = "py-8 sm:py-10"
  const num = "block font-serif text-5xl leading-none font-light tracking-[-0.03em] sm:text-[56px]"
  const label = "mt-3 block text-sm text-mist"
  return (
    <div className="bg-night text-paper">
      <Container>
        <Stagger className="grid grid-cols-2 md:grid-cols-4 [&>li]:border-white/12 [&>li:nth-child(odd)]:border-r [&>li:nth-child(-n+2)]:border-b md:[&>li]:border-b-0 md:[&>li:not(:last-child)]:border-r [&>li:nth-child(even)]:pl-6 md:[&>li:not(:first-child)]:pl-6">
          <StaggerItem className={stat}>
            <span className={num}>
              <CountUp value={200} suffix="+" />
            </span>
            <span className={label}>Verified tutors</span>
          </StaggerItem>
          <StaggerItem className={stat}>
            <span className={num}>
              <CountUp value={8} suffix="+" />
            </span>
            <span className={label}>Areas served</span>
          </StaggerItem>
          <StaggerItem className={stat}>
            <span className={num}>
              <CountUp value={4.8} decimals={1} suffix="★" />
            </span>
            <span className={label}>Parent rating</span>
          </StaggerItem>
          <StaggerItem className={stat}>
            <span className={cn(num, "text-saffron italic")}>Free</span>
            <span className={label}>For parents, always</span>
          </StaggerItem>
        </Stagger>
      </Container>
    </div>
  )
}
