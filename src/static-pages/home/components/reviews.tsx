import Image from "next/image"

import { Section } from "@/components/common"
import { StaggerItem } from "@/components/motion/reveal"

import { REVIEWS } from "../data"
import { SectionHead } from "./section-head"
import { CarouselButtons, CarouselTrack } from "./tutor-carousel"

/**
 * Tutor testimonials. Deliberately NOT marked up as schema.org
 * Review/AggregateRating — they're about the platform, not customer reviews of
 * Adhyapak Connect's service (build doc §5.2).
 */
export function Reviews() {
  return (
    <Section id="reviews" tone="khadi" aria-labelledby="reviews-title">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-x-14 gap-y-6 sm:mb-11">
        <SectionHead
          id="reviews-title"
          eyebrow="What our tutors say"
          title="Real voices, real trust"
          className="mb-0 min-w-0 flex-[1_1_440px] sm:mb-0"
        />
        <CarouselButtons target="reviews-track" />
      </div>
      <CarouselTrack id="reviews-track" label="Tutor testimonials">
        {REVIEWS.map((r) => (
          <StaggerItem
            as="figure"
            key={r.name}
            className="m-0 flex w-[min(340px,82vw)] shrink-0 snap-start flex-col gap-5 border-t-2 border-ink pt-6"
          >
            <div
              className="text-sm tracking-[3px] text-amber-text"
              role="img"
              aria-label={`${r.rating} out of 5 stars`}
            >
              {"★".repeat(r.rating)}
              <span className="text-[#d8d3c6]">{"★".repeat(5 - r.rating)}</span>
            </div>
            <blockquote className="m-0 flex-1">
              <p className="font-serif text-[21px] leading-[1.4] font-light tracking-[-0.01em] text-ink sm:text-[22px]">
                {`"${r.quote}"`}
              </p>
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <Image src={r.photo} alt="" width={88} height={88} className="size-11 rounded-full object-cover" />
              <div>
                <b className="block text-[14.5px] text-ink">{r.name}</b>
                <span className="text-[13px] text-stone">{r.role}</span>
              </div>
            </figcaption>
          </StaggerItem>
        ))}
      </CarouselTrack>
    </Section>
  )
}
