import { GraduationCapIcon, HouseIcon, LanguagesIcon, LaptopIcon, MapPinIcon } from "lucide-react"
import { IconRosetteDiscountCheck } from "@tabler/icons-react"
import Image from "next/image"

import { Eyebrow, Heading, Section } from "@/components/common"
import { DemoLink } from "@/components/marketing/demo-link"
import { Reveal, StaggerItem } from "@/components/motion/reveal"

import { TUTORS, type Tutor } from "../data"
import { CarouselButtons, CarouselTrack } from "./tutor-carousel"

function ModeTag({ modes }: { modes: Tutor["modes"] }) {
  return (
    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-[3px] bg-night/85 px-2.5 py-1.5 text-[11.5px] font-semibold text-paper">
      {modes.map((m, i) => (
        <span key={m} className="inline-flex items-center gap-1.5">
          {i > 0 && <span aria-hidden>·</span>}
          {m === "home" ? (
            <HouseIcon className="size-[13px]" aria-hidden />
          ) : (
            <LaptopIcon className="size-[13px]" aria-hidden />
          )}
          {m === "home" ? "Home" : "Online"}
        </span>
      ))}
    </span>
  )
}

function TutorCard({ t }: { t: Tutor }) {
  return (
    <StaggerItem as="article" className="group flex w-[min(288px,78vw)] shrink-0 snap-start flex-col gap-3.5">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-khadi">
        <Image
          src={t.photo}
          alt={`${t.name}, tutor`}
          width={600}
          height={750}
          sizes="288px"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-[linear-gradient(135deg,#fcd34d,#f59e0b_50%,#f97316)] py-1 pr-2.5 pl-1.5 text-[11.5px] font-bold tracking-[0.04em] text-indigo uppercase shadow-[0_4px_14px_-4px_rgb(245_158_11/0.7)] ring-1 ring-white/50 ring-inset">
          <IconRosetteDiscountCheck className="size-4" stroke={2.25} aria-hidden />
          Verified
        </span>
        <ModeTag modes={t.modes} />
      </div>
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-serif text-2xl text-ink">{t.name}</h3>
        {t.hourlyFee && (
          <span className="text-sm font-bold whitespace-nowrap text-amber-text">₹{t.hourlyFee} / hr</span>
        )}
      </div>
      <p className="-mt-2.5 text-[13.5px] text-stone">{t.qualification}</p>
      <ul className="flex flex-wrap gap-1.5">
        {t.subjects.map((tag) => (
          <li key={tag} className="rounded-[3px] border border-[#d8d3c6] px-2 py-0.5 text-xs font-medium text-ink">
            {tag}
          </li>
        ))}
      </ul>
      <dl className="grid gap-1.5 border-y border-rule py-3 text-[13.5px] text-stone [&>div]:flex [&>div]:items-center [&>div]:gap-2 [&_dt]:font-semibold [&_dt]:text-ink [&_svg]:size-[15px] [&_svg]:text-amber-text">
        <div>
          <GraduationCapIcon aria-hidden />
          <dt>Classes:</dt>
          <dd>{t.classes}</dd>
        </div>
        <div>
          <MapPinIcon aria-hidden />
          <dt>Area:</dt>
          <dd>{t.area}</dd>
        </div>
        <div>
          <LanguagesIcon aria-hidden />
          <dt>Languages:</dt>
          <dd>{t.languages}</dd>
        </div>
      </dl>
      <DemoLink
        className="inline-flex min-h-11 items-center gap-2 self-start border-b-[1.5px] border-saffron text-[14.5px] font-semibold text-ink transition-colors hover:text-amber-text"
        aria-label={`Book Free Demo with ${t.name}`}
      >
        Book Free Demo <span aria-hidden>→</span>
      </DemoLink>
    </StaggerItem>
  )
}

export function TutorList() {
  return (
    <Section id="tutor-list" aria-labelledby="tutors-title" className="pt-0 sm:pt-0 lg:pt-0">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-x-14 gap-y-6 border-t border-rule pt-14 sm:mb-11">
        <Reveal className="flex min-w-0 flex-[1_1_480px] flex-col gap-5">
          <Eyebrow>Meet our verified tutors</Eyebrow>
          <Heading id="tutors-title">Tutors near you — at a glance</Heading>
          <p className="max-w-[34em] text-[17px] text-stone">
            Every profile is ID-verified and teaching-tested. Swipe to see a quick overview before you book a free demo.
          </p>
        </Reveal>
        <CarouselButtons target="tutor-track" />
      </div>
      <CarouselTrack id="tutor-track" label="Tutor profiles">
        {TUTORS.map((t) => (
          <TutorCard key={t.id} t={t} />
        ))}
      </CarouselTrack>
    </Section>
  )
}
