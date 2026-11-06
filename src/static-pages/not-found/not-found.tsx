import Link from "next/link"

import { Heading, Section } from "@/components/common"
import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <Section tone="dark" mesh className="min-h-[70svh]" innerClassName="flex flex-col items-start gap-6 py-10">
      <p className="font-serif text-7xl font-light text-saffron italic">404</p>
      <Heading as="h1" tone="onDark">
        This page isn&apos;t here.
      </Heading>
      <p className="max-w-[32em] text-lg text-mist">The link may be old or mistyped. Let&apos;s get you back home.</p>
      <Link href="/" className={buttonVariants({ size: "lg" })}>
        Go to the home page
      </Link>
    </Section>
  )
}
