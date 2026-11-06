import localFont from "next/font/local"

/*
 * Brand fonts, self-hosted (no request to Google at runtime or build time).
 * Fraunces for headlines, Hanken Grotesk for body, Noto Serif Devanagari for
 * the अ mark — the trio named in the brand pack README.
 */

export const fraunces = localFont({
  src: [
    { path: "../assets/fonts/fraunces-latin-opsz-normal.woff2", style: "normal", weight: "100 900" },
    { path: "../assets/fonts/fraunces-latin-opsz-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
})

export const hanken = localFont({
  src: [{ path: "../assets/fonts/hanken-grotesk-latin-wght-normal.woff2", style: "normal", weight: "100 900" }],
  variable: "--font-hanken",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
})

export const notoDeva = localFont({
  src: [{ path: "../assets/fonts/noto-serif-devanagari-600.woff2", style: "normal", weight: "600" }],
  variable: "--font-noto-deva",
  display: "swap",
  preload: false,
})
