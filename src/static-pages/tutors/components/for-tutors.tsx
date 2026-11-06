import { Accent, BrandMark, Eyebrow, Heading, Section, WhatsAppIcon } from "@/components/common"
import { buttonVariants } from "@/components/ui/button"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { siteConfig } from "@/config/site"
import { TRACK_EVENTS } from "@/lib/analytics"
import { cn } from "@/lib/utils"

const JOIN_STEPS = [
  { title: "Basic details", body: "Share your profile, subjects & area." },
  { title: "Teaching", body: "A short teaching / demo round." },
  { title: "Subject test", body: "Just 20 questions — quick & fair." },
  { title: "KYC", body: "ID verification — get your Verified badge." },
]

const PERKS: React.ReactNode[] = [
  "No upfront cost — start free",
  "Students near you",
  "Verified badge (teaching eligibility test + KYC)",
  <>
    Loyalty: <b className="text-saffron">20% off</b> re-match within 2 months
  </>,
  <>
    Refer &amp; earn — <b className="text-saffron">10%</b>
  </>,
  "Free BookYaar management tools",
]

export function ForTutors({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) {
  return (
    <Section id="tutors" tone="dark" mesh="alt" aria-labelledby="join-title">
      <Reveal className="mb-14 flex flex-col gap-5">
        <Eyebrow onDark>For Tutors</Eyebrow>
        <Heading as={headingAs} id="join-title" tone="onDark">
          How you join — 4 easy steps
        </Heading>
      </Reveal>

      <Stagger
        as="ol"
        className="mb-20 ml-1.5 grid gap-x-7 gap-y-9 border-l border-white/20 pl-7 sm:mb-24 sm:ml-0 sm:grid-cols-2 sm:border-t sm:border-l-0 sm:pl-0 lg:grid-cols-4"
      >
        {JOIN_STEPS.map((s, i) => (
          <StaggerItem key={s.title} className="relative sm:pt-8">
            <span
              aria-hidden
              className={cn(
                "absolute top-3 -left-[34px] size-[11px] rounded-full border-[1.5px] border-saffron sm:-top-1.5 sm:left-0",
                i === JOIN_STEPS.length - 1 ? "bg-saffron" : "bg-night",
              )}
            />
            <span aria-hidden className="mb-3.5 block font-serif text-[40px] leading-none font-light text-saffron">
              {i + 1}
            </span>
            <h3 className="mb-1.5 text-lg font-semibold text-paper">{s.title}</h3>
            <p className="text-[15px] text-mist">{s.body}</p>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="grid items-start gap-14 lg:grid-cols-2">
        <Reveal>
          <Heading size="sub" tone="onDark">
            Teach near home. <Accent>Grow with trust.</Accent>
          </Heading>
          <p className="mt-5 mb-8 max-w-[32em] text-[17px] text-mist">
            Get students in your area. <b className="text-paper">Pay only when the match works</b> — 30% of the first
            month, nothing upfront.
          </p>
          <Stagger className="grid gap-x-8 sm:grid-cols-2">
            {PERKS.map((p, i) => (
              <StaggerItem
                key={i}
                className="flex items-baseline gap-3 border-t border-white/13 py-3.5 text-[15px] text-[#e7e5f0]"
              >
                <span aria-hidden className="text-saffron">
                  ✦
                </span>
                <span>{p}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        {/* Gold hairline border: a 1px gradient frame around a white card. */}
        <Reveal
          delay={0.15}
          className="relative rounded-2xl bg-[linear-gradient(135deg,#fcd34d,#f59e0b_45%,rgb(245_158_11/0.15)_70%,#fbbf24)] p-px shadow-[0_30px_80px_-30px_rgb(245_158_11/0.55),0_12px_32px_-16px_rgb(0_0_0/0.6)]"
        >
          <div className="relative overflow-hidden rounded-[15px] bg-white px-7 pt-10 pb-8 text-ink sm:px-10 sm:pt-12 sm:pb-10">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-6 font-deva text-[220px] leading-none text-saffron/[0.07] select-none"
            >
              अ
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute -top-24 -left-24 size-64 rounded-full bg-[radial-gradient(circle,rgb(251_191_36/0.18),transparent_70%)]"
            />

            <div className="relative">
              <BrandMark size={56} className="mb-6 rounded-full shadow-[0_0_0_6px_rgb(245_158_11/0.12)]" />
              <h3 className="font-serif text-[34px] leading-[1.1] tracking-[-0.02em] sm:text-[40px]">Become a Tutor</h3>
              <p className="mt-3 text-[15px] text-stone">Join 200+ verified tutors across Delhi</p>

              <div
                aria-hidden
                className="my-7 h-px bg-[linear-gradient(90deg,#f59e0b,rgb(245_158_11/0.25)_40%,transparent)]"
              />

              <a
                href={siteConfig.contact.tutorWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                data-track={TRACK_EVENTS.tutorApply}
                className={cn(
                  buttonVariants({ variant: "whatsapp", size: "lg" }),
                  "w-full rounded-xl shadow-[0_10px_24px_-10px_rgb(21_128_61/0.6)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgb(21_128_61/0.7)] motion-reduce:hover:translate-y-0",
                )}
              >
                <WhatsAppIcon />
                Apply on WhatsApp
              </a>
              <p className="mt-4 text-center text-[13px] text-stone">
                Tutor WhatsApp: <span className="font-semibold text-ink">{siteConfig.contact.tutorPhoneDisplay}</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
