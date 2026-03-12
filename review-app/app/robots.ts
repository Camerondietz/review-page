// app/robots.ts

import type { MetadataRoute } from "next";
// FOR STATTIC EXPORT
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}