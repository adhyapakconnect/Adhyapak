import { HouseIcon, LaptopIcon } from "lucide-react"

import { Section } from "@/components/common"
import { Reveal } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

import { SectionHead } from "./section-head"

const chip =
  "inline-flex items-center rounded-[4px] border border-[#d8d3c6] px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-white"

export function Subjects() {
  return (
    <Section id="subjects" aria-labelledby="subjects-title">
      <SectionHead
        id="subjects-title"
        eyebrow="Subjects & Classes"
        title="From early classes to boards"
        intro="Home & online tuition across every stage."
      />
      <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
        <Reveal className="flex flex-col gap-5 border-t-2 border-ink pt-6">
          <h3 className="text-xl font-semibold text-ink">Classes</h3>
          <ul className="grid grid-cols-2 gap-2 min-[420px]:grid-cols-4">
            {["1–5", "6–8", "9–10", "11–12"].map((c) => (
              <li
                key={c}
                className="grid place-items-center rounded-[4px] bg-ink px-2.5 py-4 font-serif text-2xl text-paper"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="flex flex-wrap items-center gap-2 text-[14.5px] text-stone">
            Modes: &nbsp;
            <span className="inline-flex items-center gap-1.5 font-semibold text-ink">
              <HouseIcon className="size-4 text-amber-text" aria-hidden />
              Home tuition
            </span>
            &nbsp;·&nbsp;
            <span className="inline-flex items-center gap-1.5 font-semibold text-ink">
              <LaptopIcon className="size-4 text-amber-text" aria-hidden />
              Online tuition
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col gap-5 border-t-2 border-ink pt-6">
          <h3 className="text-xl font-semibold text-ink">Subjects &amp; Languages</h3>
          <ul className="flex flex-wrap gap-2">
            {["Maths", "Science", "English", "Social Science", "Hindi", "Sanskrit", "Computer"].map((s) => (
              <li key={s} className={chip}>
                {s}
              </li>
            ))}
          </ul>
          <h4 className="text-xs font-semibold tracking-[0.16em] text-stone uppercase">Foreign Languages</h4>
          <ul className="flex flex-wrap gap-2">
            {["French", "German", "Spanish", "+ more"].map((s) => (
              <li key={s} className={cn(chip, s === "+ more" && "border-dashed")}>
                {s}
              </li>
            ))}
          </ul>
          <h4 className="text-xs font-semibold tracking-[0.16em] text-stone uppercase">Support &amp; help</h4>
          <ul className="flex flex-wrap gap-2">
            {["Doubt Solver", "Board Prep", "Homework & Assignment Help", "Project Help"].map((s) => (
              <li key={s} className={chip}>
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
