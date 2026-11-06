import { CredStrip } from "@/components/marketing/cred-strip"

import { ForTutors } from "./components/for-tutors"

export default function Tutors() {
  return (
    <>
      <div className="bg-night text-paper">
        <CredStrip />
      </div>
      <ForTutors headingAs="h1" />
    </>
  )
}
