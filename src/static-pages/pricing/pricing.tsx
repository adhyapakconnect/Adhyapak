import { HandCoinsIcon, RepeatIcon, TicketIcon, UsersIcon } from "lucide-react"

import { Section } from "@/components/common"
import { FinalCta } from "@/components/marketing/final-cta"
import { PageHero } from "@/components/marketing/page-hero"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"

import { COMMISSIONS, EXTRAS } from "./data"

const EXTRA_ICONS = [RepeatIcon, UsersIcon, TicketIcon]

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="How our commission works"
        intro={
          <>
            Finding a tutor is always <b className="font-semibold text-paper">free</b> for parents. Tutors pay only when
            the match works — nothing upfront.
          </>
        }
      />

      <Section tone="khadi" aria-label="Pricing">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          {/* Success commission: indigo card in a gold hairline frame. */}
          <Reveal className="rounded-2xl bg-[linear-gradient(135deg,#fcd34d,rgb(245_158_11/0.2)_45%,#fbbf24)] p-px shadow-[0_30px_70px_-30px_rgb(30_27_75/0.7)]">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[15px] bg-indigo px-7 py-9 text-paper sm:px-10 sm:py-11">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full bg-[radial-gradient(circle,rgb(245_158_11/0.22),transparent_70%)]"
              />
              <div className="relative flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-saffron/15 text-saffron">
                  <HandCoinsIcon className="size-5" strokeWidth={1.8} aria-hidden />
                </span>
                <h2 className="font-serif text-3xl text-saffron sm:text-[34px]">Success commission</h2>
              </div>
              <p className="relative mt-3 text-[15px] text-mist italic">
                Tutor-paid, only on success. Parents never pay AC.
              </p>

              <dl className="relative mt-9 flex-1">
                {COMMISSIONS.map((c, i) => (
                  <div key={c.label} className={i > 0 ? "mt-8 border-t border-white/12 pt-8" : undefined}>
                    <dt
                      className={
                        i === 0
                          ? "text-xs font-semibold tracking-[0.2em] text-paper uppercase"
                          : "text-xs font-semibold tracking-[0.2em] text-saffron uppercase"
                      }
                    >
                      {c.label}
                    </dt>
                    <dd className="mt-3">
                      <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-serif text-6xl leading-none font-light tracking-[-0.03em] sm:text-7xl">
                          {c.value}
                        </span>
                        <span className="text-base text-[#d6d3e6] sm:text-lg">{c.unit}</span>
                      </span>
                      {"examples" in c && (
                        <ul className="mt-5 flex flex-wrap gap-2" aria-label="For example">
                          {c.examples.map((e) => (
                            <li
                              key={e}
                              className="rounded-full border border-white/16 px-3 py-1 text-[13px] text-mist italic"
                            >
                              {e}
                            </li>
                          ))}
                        </ul>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="relative mt-10 rounded-xl bg-white/6 px-5 py-4 text-base font-semibold text-paper">
                Parents / students: <span className="text-saffron">Free to find.</span>
              </p>
            </div>
          </Reveal>

          <Stagger className="grid content-between gap-6">
            {EXTRAS.map((x, i) => {
              const Icon = EXTRA_ICONS[i]
              return (
                <StaggerItem
                  key={x.title}
                  className="flex flex-col gap-4 rounded-2xl bg-white px-6 py-7 ring-1 ring-rule transition-shadow hover:shadow-[0_20px_40px_-24px_rgb(30_27_75/0.35)] sm:px-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <h3 className="flex items-center gap-3 font-serif text-xl text-ink sm:text-[22px]">
                      <Icon className="size-5 shrink-0 text-amber-text" strokeWidth={1.8} aria-hidden />
                      {x.title}
                    </h3>
                    <p className="font-serif text-2xl leading-tight text-amber-text sm:text-[28px]">{x.value}</p>
                  </div>
                  <p className="border-t border-rule pt-4 text-[15px] text-stone">{x.body}</p>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </Section>

      <FinalCta />
    </>
  )
}
