/**
 * Pricing copy, word for word from the client's revenue-model slide
 * ("How Adhyapak Connect earns"); the page heading reads "How our commission works".
 * The broker share is internal and left out.
 */

/** The success commission tutors pay — parents never pay AC. */
export const COMMISSIONS = [
  { label: "Tuition", value: "30%", unit: "of the first month’s fee" },
  {
    label: "Assistance",
    value: "10%",
    unit: "of the job value",
    examples: ["projects", "assignments", "notes", "AI / coding"],
  },
] as const

export const EXTRAS = [
  {
    title: "Loyalty re-match",
    value: "20%",
    body: "Re-engage the same family within 2 months → we take 20%, not 30%.",
  },
  {
    title: "Tutor referral",
    value: "20% of our cut",
    body: "A tutor who brings a parent lead earns 20% of AC's commission on it.",
  },
  {
    title: "Demo fee (parent)",
    value: "₹50 / demo",
    body: "Only from the 11th demo in a month — first 10 free, resets monthly.",
  },
] as const
