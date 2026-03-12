// app/sitemap.ts

import { getAllNodes } from "@/app/tools/repository";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const nodes = await getAllNodes();

  return [
    {
      url: "https://yourdomain.com",
      lastModified: new Date(),
    },
    ...nodes.map((node) => ({
      url: `https://yourdomain.com/page/${node.id}`,
      lastModified: new Date(),
    })),
  ];
}