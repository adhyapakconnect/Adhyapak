import { LandmarkIcon, MapPinIcon, ShieldCheckIcon, StarIcon } from "lucide-react"

import { Container } from "@/components/common"

/** Trust strip at the top of every page's dark header band. */
export function CredStrip() {
  const item = "inline-flex items-center gap-2 whitespace-nowrap"
  const icon = "size-[15px] text-saffron"
  return (
    <div className="relative border-b border-white/10">
      <Container>
        <ul className="flex flex-wrap gap-x-4 gap-y-1.5 py-3 text-[12.5px] font-medium text-[#d6d3e6] sm:gap-x-5 sm:text-[13px] md:gap-x-0 md:[&>li:not(:last-child)]:mr-5 md:[&>li:not(:last-child)]:border-r md:[&>li:not(:last-child)]:border-white/15 md:[&>li:not(:last-child)]:pr-5">
          <li className={item}>
            <LandmarkIcon className={icon} aria-hidden />
            <b className="font-semibold text-saffron">MSME Registered</b> · Udyam, Govt. of India
          </li>
          <li className={item}>
            <ShieldCheckIcon className={icon} aria-hidden />
            ID-Verified Tutors
          </li>
          <li className={item}>
            <StarIcon className={icon} aria-hidden />
            <b className="font-semibold text-saffron">200+</b> Verified Tutors
          </li>
          <li className={item}>
            <MapPinIcon className={icon} aria-hidden />
            Across North-West Delhi
          </li>
        </ul>
      </Container>
    </div>
  )
}
