import { Eyebrow, Heading, Section } from "@/components/common"
import { Reveal } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

import { PARENT_FAQS, TUTOR_FAQS, type Faq as FaqItem } from "../data"

const GROUPS = [
  { id: "parents", label: "For Parents", items: PARENT_FAQS },
  { id: "tutors", label: "For Tutors", items: TUTOR_FAQS },
] as const

function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-b border-rule">
      {items.map((f, i) => (
        <details key={f.q} open={i === 0} className="group border-t border-rule">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-serif text-xl tracking-[-0.01em] text-ink transition-colors hover:text-amber-text sm:text-[22px] [&::-webkit-details-marker]:hidden">
            {f.q}
            <span
              aria-hidden
              className="shrink-0 font-sans text-[28px] leading-none font-light text-amber-text transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-[62ch] pr-2 pb-6 text-base text-stone sm:pr-12">{f.a}</p>
        </details>
      ))}
    </div>
  )
}

/**
 * Native <details> so every answer is in the HTML for search engines and
 * works without JavaScript. The Parents / Tutors switch is a radio pair:
 * the checked radio shows its panel through :has(), no client code.
 */
export function Faq() {
  return (
    <Section
      id="faq"
      aria-labelledby="faq-title"
      innerClassName="group/faq flex flex-wrap items-start gap-x-20 gap-y-10"
    >
      <Reveal className="flex flex-[1_1_300px] flex-col gap-5">
        <Eyebrow>FAQ</Eyebrow>
        <Heading id="faq-title">Questions, answered</Heading>
        <fieldset className="mt-3 inline-flex self-start rounded-full bg-khadi p-1">
          <legend className="sr-only">Show questions for</legend>
          {GROUPS.map((g, i) => (
            <label
              key={g.id}
              className="cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-stone transition-colors has-checked:bg-night has-checked:text-paper has-focus-visible:ring-2 has-focus-visible:ring-saffron"
            >
              <input type="radio" name="faq-group" id={`faq-${g.id}`} defaultChecked={i === 0} className="sr-only" />
              {g.label}
            </label>
          ))}
        </fieldset>
      </Reveal>
      <Reveal delay={0.12} className="min-w-0 flex-[2_1_540px]">
        {GROUPS.map((g) => (
          <div
            key={g.id}
            aria-label={g.label}
            role="region"
            className={cn(
              g.id === "parents"
                ? "group-has-[#faq-tutors:checked]/faq:hidden"
                : "hidden group-has-[#faq-tutors:checked]/faq:block",
            )}
          >
            <FaqList items={g.items} />
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
