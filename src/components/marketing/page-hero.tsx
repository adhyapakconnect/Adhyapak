import { Container, Eyebrow, Heading } from "@/components/common"

import { CredStrip } from "./cred-strip"

/** Dark header band for inner pages: cred strip, eyebrow, h1 and intro. */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: React.ReactNode
  title: React.ReactNode
  intro?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-night text-paper">
      <div aria-hidden className="mesh" />
      <CredStrip />
      <Container className="relative flex flex-col gap-6 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <Eyebrow onDark className="animate-rise">
          {eyebrow}
        </Eyebrow>
        <Heading as="h1" tone="onDark" className="max-w-[16em] animate-rise [animation-delay:80ms]">
          {title}
        </Heading>
        {intro && (
          <p className="max-w-[40em] animate-rise text-[17px] text-mist [animation-delay:160ms] sm:text-lg">{intro}</p>
        )}
      </Container>
    </section>
  )
}
