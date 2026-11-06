import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    /** Tutor photos in tutors.json: uploaded profile pictures, or Google sign-in avatars. */
    remotePatterns: [
      { protocol: "https", hostname: "bookyaar.s3.ap-south-1.amazonaws.com", pathname: "/profile-pictures/**" },
      { protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/a/**" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  /**
   * adhyapakconnect.in is primary. adhyapakconnect.com serves the same site;
   * canonical tags (metadataBase in app/layout.tsx) still point search engines at .in.
   */
  async redirects() {
    return [
      /** The Fees page became Pricing. */
      { source: "/fees", destination: "/pricing", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www\\.adhyapakconnect\\.in" }],
        destination: "https://adhyapakconnect.in/:path*",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ]
  },
}

export default nextConfig
