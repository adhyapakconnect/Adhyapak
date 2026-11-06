/**
 * FAQ copy, word for word from the approved demo (Web-Demo/contact.html).
 * Also feeds the FAQPage JSON-LD on the contact page.
 */

export type Faq = { q: string; a: string }

export const PARENT_FAQS: Faq[] = [
  {
    q: "Is it really free for parents?",
    a: "Yes. Finding and connecting with a tutor is completely free to find for parents — you never pay Adhyapak Connect. Tuition fees are paid directly to your tutor.",
  },
  {
    q: "How do I book a demo?",
    a: "Just call us. We note your requirement, fill the form on your behalf, and arrange a free demo class with a verified tutor near you.",
  },
  {
    q: "How are tutors verified?",
    a: "Every tutor clears a teaching eligibility test and KYC (ID verification) before being listed. You can also request a police verification at any time.",
  },
  {
    q: "Home tuition or online — which can I choose?",
    a: "Both. Pick home tuition for in-person learning nearby, or online tuition for flexible classes from anywhere.",
  },
  {
    q: "Which classes, subjects and boards do you cover?",
    a: "From the early classes through Class 12, across major subjects (Maths, Science, English, Social Science and more) and all main boards. Have a specific need? Just ask.",
  },
  {
    q: "What if the tutor isn't the right fit?",
    a: "We help even after placement, including replacing the tutor — free — so your child always has the right match.",
  },
]

export const TUTOR_FAQS: Faq[] = [
  {
    q: "What does it cost to join?",
    a: "Nothing to register. You pay only when a match works — 30% of the first month's fee, one time.",
  },
  { q: "When exactly do I pay?", a: "Only after a family hires you. No charges until you start earning." },
  {
    q: "How do I register?",
    a: "Share your details, complete ID verification (Aadhaar/PAN) and a short teaching eligibility test, and you're ready to be matched.",
  },
  {
    q: "What is the teaching eligibility test?",
    a: 'A short test of the subjects you want to teach, so families can trust that "teaching-tested" is real.',
  },
  {
    q: "How do I get students?",
    a: "We match you with families near you who need your subjects, and you meet them through a demo class.",
  },
  {
    q: "What is the loyalty rate?",
    a: "If the same family re-matches with you within 2 months, our fee drops to 20% of the first month.",
  },
  {
    q: "Can I earn by referring?",
    a: "Yes. Bring us a parent lead and earn 10% of our commission on that placement.",
  },
]
