// app/tools/seo.ts

import type { Metadata } from "next";
import { getNodeById } from "./repository";

export async function generateNodeMetadata(
  id: string
): Promise<Metadata> {
  const node = await getNodeById(id);

  if (!node) return {};

  const title = node.seo?.title || node.name;
  const description =
    node.seo?.description || node.description || "";

  return {
    title,
    description,
    keywords: node.seo?.keywords || node.tags,
    openGraph: {
      title,
      description,
      url: `webapage.com/page/${id}`,
      siteName: "webpage",
      locale: "idk",
      type: "article",
      images: node.media?.featuredImage
        ? [node.media.featuredImage]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: node.media?.featuredImage
        ? [node.media.featuredImage]
        : [],
    },
  };
}