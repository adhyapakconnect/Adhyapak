import type { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

/** Bump when page content changes meaningfully. */
const LAST_UPDATED = "2026-11-06"

/**
 * Only indexable pages. The legal and grievance pages are `noindex` until their
 * final text is in (they still resolve for visitors and ad-network review).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly" as const,
    priority,
  })
  return [
    {
      url: siteConfig.url,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteConfig.url}/images/hero-tutor.webp`],
    },
    page("/about", 0.7),
    page("/pricing", 0.8),
    page("/tutors", 0.8),
    page("/contact", 0.8),
  ]
}
