// app/page/[id]/page.tsx

import { notFound } from "next/navigation";
import { getNodeById, getAllNodes } from "@/app/tools/repository";
import { generateNodeMetadata } from "@/app/tools/seo";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

//This ensures Next only builds the pages returned from generateStaticParams()
//export const dynamic = "force-static";
//export const dynamicParams = false;

export async function generateStaticParams() {
  const nodes = await getAllNodes();

  return nodes.map((node) => ({
    id: node.id
  }));
}

// Auto SEO from JSON
export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    return generateNodeMetadata(id);
}

//find custom page
async function loadContentComponent(id: string) {
  try {
    const mod = await import(`@/app/content/${id}`);
    return mod.default;
  } catch {
    return null;
  }
}

export default async function ContentPage({ params }: Props) {
    const { id } = await params;
    const node = await getNodeById(id);

    const ContentComponent = await loadContentComponent(id);

  if (!node) {
    console.log(`unable to find id ${id}`);
    return (
        <p>this page could not be located</p>
    );
  }

  return (
    <>
        <h1>{node.name}</h1>
        <div className="mx-auto px-6">
        <article className="docs">
        {ContentComponent ? (
            <ContentComponent node={node} />
        ) : (
            <p>{node.description}</p>
        )}
        </article>
        </div>
    </>
  );
}