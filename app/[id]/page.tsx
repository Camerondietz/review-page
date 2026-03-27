// app/[id]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";

import {
  getNodeById,
  getAllNodes,
  getChildren,
  getBreadcrumbs,
  NodeType,
  getDescendantCategoryIds
} from "@/app/tools/repository";

import { generateNodeMetadata } from "@/app/tools/seo";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

/* -------------------------------- */
/* STATIC GENERATION */
/* -------------------------------- */

export async function generateStaticParams() {
  const nodes = await getAllNodes();

  return nodes.map((node) => ({
    id: node.id
  }));
}

/* -------------------------------- */
/* SEO */
/* -------------------------------- */

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return generateNodeMetadata(id);
}

/* -------------------------------- */
/* OPTIONAL CONTENT MODULE */
/* -------------------------------- */

async function loadContentComponent(id: string) {
  try {
    const mod = await import(`@/app/content/${id}`);
    return mod.default;
  } catch {
    return null;
  }
}

/* -------------------------------- */
/* PAGE */
/* -------------------------------- */

export async function getItemsForCategoryTree(categoryId: string): Promise<NodeType[]> {

  const nodes = await getAllNodes();

  const descendantIds = await getDescendantCategoryIds(categoryId);

  const allCategoryIds = [categoryId, ...descendantIds];

  return nodes.filter(n =>
    n.type !== "category" &&
    n.parentIds?.some(id => allCategoryIds.includes(id))
  );
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  const node = await getNodeById(id);

  if (!node) return notFound();

  const children = await getChildren(id);

  const breadcrumbs = await getBreadcrumbs(node);

  const categories = children.filter((c) => c.type === "category");
  //const pages = children.filter((c) => c.type !== "category");
  const pages = await getItemsForCategoryTree(id);

  const ContentComponent = await loadContentComponent(id);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">

      {/* Breadcrumbs */}

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        {breadcrumbs.map((crumb: NodeType) => (
          <span key={crumb.id}>
            {" / "}
            <Link
              href={`/${crumb.id}`}
              className="hover:underline"
            >
              {crumb.name}
            </Link>
          </span>
        ))}

        {" / "}
        <span className="text-gray-900">{node.name}</span>
      </nav>

      {/* Title */}

      <header className="mb-8">
        <h1 className="text-3xl font-bold">
          {node.name}
        </h1>

        {node.description && (
          <p className="mt-3 text-gray-600">
            {node.description}
          </p>
        )}
      </header>

      {/* Custom Content */}

      {ContentComponent && (
        <section className="docs mb-12">
          <ContentComponent node={node} />
        </section>
      )}

      {/* Subcategories */}

      {categories.length > 0 && (
        <section className="mb-12">

          <h2 className="text-xl font-semibold mb-4">
            Categories
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {categories.map((cat: NodeType) => (
              <Link
                key={cat.id}
                href={`/${cat.id}`}
                className="block border rounded-lg p-4 hover:bg-gray-50"
              >
                <h3 className="font-medium">
                  {cat.name}
                </h3>

                {cat.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {cat.description}
                  </p>
                )}
              </Link>
            ))}

          </div>

        </section>
      )}

      {/* Pages */}

      {pages.length > 0 && (
        <section>

          <h2 className="text-xl font-semibold mb-4">
            Pages
          </h2>

          <div className="space-y-3">

            {pages.map((page: NodeType) => (
              <Link
                key={page.id}
                href={`/${page.id}`}
                className="block border rounded-md p-3 hover:bg-gray-50"
              >
                <h3 className="font-medium">
                  {page.name}
                </h3>

                {page.description && (
                  <p className="text-sm text-gray-600">
                    {page.description}
                  </p>
                )}
              </Link>
            ))}

          </div>

        </section>
      )}

    </main>
  );
}