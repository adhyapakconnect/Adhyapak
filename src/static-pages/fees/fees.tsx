import { Section } from "@/components/common"
import { FinalCta } from "@/components/marketing/final-cta"
import { PageHero } from "@/components/marketing/page-hero"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

import { FEE_ITEMS } from "./data"

export default function Fees() {
  return (
    <>
      <PageHero
        eyebrow="Simple, honest pricing"
        title="What you’ll pay"
        intro={
          <>
            Finding a tutor is always <b className="font-semibold text-paper">free</b> for parents. You only ever pay
            your tutor’s tuition fee — agreed directly with them.
          </>
        }
      />

      <Section tone="khadi" aria-label="Fees">
        <Stagger className="grid gap-6 md:grid-cols-3">
          {FEE_ITEMS.map((f) => (
            <StaggerItem
              key={f.title}
              className={cn(
                "flex flex-col gap-4 rounded-xl px-7 py-9 sm:px-8 sm:py-10",
                "featured" in f
                  ? "bg-night text-paper shadow-[0_30px_60px_-30px_rgb(14_12_36/0.7)] ring-1 ring-saffron/50"
                  : "bg-white text-ink ring-1 ring-rule",
              )}
            >
              <div className="flex min-h-7 items-center justify-between gap-3">
                <h2 className="font-sans text-lg font-semibold">{f.title}</h2>
                {"tag" in f && (
                  <span className="rounded-full bg-[linear-gradient(135deg,#fcd34d,#f59e0b_50%,#f97316)] px-2.5 py-1 text-[11px] font-bold tracking-[0.1em] text-indigo">
                    {f.tag}
                  </span>
                )}
              </div>
              <p
                className={cn(
                  "font-serif text-5xl leading-[1.1] font-light tracking-[-0.03em]",
                  "featured" in f ? "text-saffron" : "text-ink",
                )}
              >
                {f.price}
              </p>
              <p
                className={cn(
                  "border-t pt-4 text-[15px]",
                  "featured" in f ? "border-white/12 text-mist" : "border-rule text-stone",
                )}
              >
                {f.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal as="p" delay={0.3} className="mt-8 text-center text-[13.5px] text-stone">
          No hidden charges. Finding a tutor is always free — you only pay your tutor for the classes you take.
        </Reveal>
      </Section>

      <FinalCta />
    </>
  )
}
