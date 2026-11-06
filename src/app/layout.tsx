import type { Metadata, Viewport } from "next"

import { JsonLd } from "@/components/common"
import { Analytics } from "@/components/marketing/analytics"
import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"
import { WhatsAppFab } from "@/components/marketing/whatsapp-fab"
import { MotionProvider } from "@/components/motion/reveal"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { fraunces, hanken, notoDeva } from "./fonts"
import "./globals.css"

const title = "Verified Home & Online Tutors in North-West Delhi"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${title} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "education",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: false },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — The right tutor, right near you.`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — The right tutor, right near you.`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
}

export const viewport: Viewport = {
  themeColor: "#0e0c24",
  colorScheme: "light",
}

const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  slogan: siteConfig.tagline,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.png`,
  image: `${siteConfig.url}/opengraph-image.png`,
  telephone: siteConfig.contact.parentPhone,
  email: siteConfig.contact.email,
  priceRange: "Free for parents",
  address: { "@type": "PostalAddress", addressRegion: "Delhi", addressCountry: "IN" },
  areaServed: siteConfig.areas.map((a) => ({ "@type": "Place", name: `${a}, Delhi` })),
  sameAs: [siteConfig.contact.instagramUrl],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.parentPhone,
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  ],
}

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "en-IN",
  publisher: { "@id": `${siteConfig.url}/#organization` },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={cn(fraunces.variable, hanken.variable, notoDeva.variable)}>
      <head>
        {/* Scroll reveals start hidden; without JS, show everything. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-saffron px-4 py-2 font-semibold text-indigo focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <MotionProvider>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
        <WhatsAppFab />
        <Analytics />
      </body>
    </html>
  )
}
