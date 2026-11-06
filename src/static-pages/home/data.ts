/**
 * Home page copy that repeats in a list. Wording is the approved demo's, word
 * for word (adhyapak-connect-demo.html) — change it there first, then here.
 */

import tutors from "./tutors.json"

export type Mode = "home" | "online"

/** One approved tutor, generated from the tutors table export — see tutors.json. */
export type Tutor = {
  id: number
  name: string
  photo: string
  qualification: string
  subjects: string[]
  classes: string
  area: string
  languages: string
  modes: Mode[]
  hourlyFee?: number
}

/** Approved tutors with a public photo, nearest to the service areas first. */
export const TUTORS = tutors as Tutor[]

/**
 * Tutor testimonials from the BookYaar site, with "BookYaar" renamed to Adhyapak
 * Connect at the client's request (each tutor agreed to
 * public display). Photos live in public/images/testimonials.
 */
export const REVIEWS = [
  {
    quote: "The platform is user friendly, it serves well both the students and tutors. I m genuinely impressed by its qualities.",
    name: "Kripa Choudhary",
    role: "Tutor",
    rating: 5,
    photo: "/images/testimonials/kripa-choudhary.jpeg",
  },
  {
    quote: "Adhyapak Connect hooked me up with real students, and everything's super transparent and organized when I teach.",
    name: "Harshit Gautam",
    role: "Tutor",
    rating: 4,
    photo: "/images/testimonials/harshit-gautam.jpeg",
  },
  {
    quote: "Adhyapak Connect backs tutors with clear info, real respect, and a solid focus on academics.",
    name: "Ankita Bhat",
    role: "Tutor",
    rating: 3,
    photo: "/images/testimonials/ankita-bhat.jpeg",
  },
  {
    quote: "Great communication, a helpful team, and everything's so well put together—teaching just flows smoothly",
    name: "Shivam Kumar",
    role: "Tutor",
    rating: 4,
    photo: "/images/testimonials/shivam-kumar.jpeg",
  },
  {
    quote: "Its a solid platform that actually respects good teaching and the hard work tutors put in.",
    name: "Kuldeep Gautam",
    role: "Tutor",
    rating: 4,
    photo: "/images/testimonials/kuldeep-gautam.jpeg",
  },
  {
    quote: "It's so well-run, I can just zero in on delivering top-notch lessons without distractions.",
    name: "Harsh Nagre",
    role: "Tutor",
    rating: 5,
    photo: "/images/testimonials/harsh-nagre.jpeg",
  },
  {
    quote: "Adhyapak Connect gives fair shots, structured classes, and hassle-free communication",
    name: "Arpit Chauhan",
    role: "Tutor",
    rating: 5,
    photo: "/images/testimonials/arpit-chauhan.jpeg",
  },
  {
    quote: "They handle tracking student progress and chatting with parents like pros—super smooth.",
    name: "Avadhesh Sarswat",
    role: "Tutor",
    rating: 4,
    photo: "/images/testimonials/avadhesh-sarswat.jpeg",
  },
  {
    quote: "I love the discipline, openness, and how seriously they take education.",
    name: "Sanrag K",
    role: "Tutor",
    rating: 4,
    photo: "/images/testimonials/sanrag-k.jpeg",
  },
  {
    quote: "Adhyapak Connect builds a positive space for teaching with students who truly engage.",
    name: "Ankit Sharma",
    role: "Tutor",
    rating: 4,
    photo: "/images/testimonials/ankit-sharma.jpeg",
  },
  {
    quote: "Teaching with Adhyapak Connect is organized, respectful, and all about growth.",
    name: "Sumit Sharma",
    role: "Tutor",
    rating: 4,
    photo: "/images/testimonials/sumit-sharma.jpeg",
  },
  {
    quote: "Teaching on Adhyapak Connect feels put-together, honest, and all about helping students actually grow",
    name: "Cheshta",
    role: "Tutor",
    rating: 4,
    photo: "/images/testimonials/cheshta.jpeg",
  },
  {
    quote: "it's built on trust, reliability, and true passion for learning",
    name: "Zainab",
    role: "Tutor",
    rating: 4,
    photo: "/images/testimonials/zainab.jpeg",
  },
  {
    quote: "Clear guidelines and a focus on students make my teaching actually work here.",
    name: "Vipin Vishwakarma",
    role: "Tutor",
    rating: 4,
    photo: "/images/testimonials/vipin-vishwakarma.jpeg",
  },
  {
    quote: "The coordination is supportive, and the students are serious—makes teaching fun.",
    name: "Saumya Rangi",
    role: "Tutor",
    rating: 4,
    photo: "/images/testimonials/saumya-rangi.jpeg",
  },
]
