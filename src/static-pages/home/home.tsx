import { JsonLd } from "@/components/common"
import { FinalCta } from "@/components/marketing/final-cta"
import { siteConfig } from "@/config/site"

import { Areas } from "./components/areas"
import { DemoCallBand, Hero, Stats } from "./components/hero"
import { HowItWorks } from "./components/how-it-works"
import { Mission } from "./components/mission"
import { Reviews } from "./components/reviews"
import { Subjects } from "./components/subjects"
import { TutorList } from "./components/tutor-list"
import { WhyUs } from "./components/why-us"

/**
 * Home — section order is the approved demo's (Web-Demo/adhyapak-connect-demo.html).
 * Fees, For Tutors and FAQ live on their own pages, as in the demo. Copy is word
 * for word; only layout and styling were redesigned.
 */
export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Home & online tuition",
          serviceType: "Tutoring",
          provider: { "@id": `${siteConfig.url}/#organization` },
          areaServed: siteConfig.areas.map((a) => ({ "@type": "Place", name: `${a}, Delhi` })),
          audience: { "@type": "EducationalAudience", educationalRole: "student" },
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Free demo class — free to find for parents" },
        }}
      />
      <Hero />
      <DemoCallBand />
      <Stats />
      <HowItWorks />
      <WhyUs />
      <Mission />
      <Subjects />
      <Areas />
      <TutorList />
      <Reviews />
      <FinalCta />
    </>
  )
}
