import Link from "next/link";
import { getAllNodes } from "@/app/tools/repository";

export default async function CategoryIndex() {
  const nodes = await getAllNodes();

  const rootCategories = nodes.filter(
    (n) => n.type === "category" && (!n.parentIds || n.parentIds.length === 0)
  );

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">
        Categories
      </h1>

      <div className="grid md:grid-cols-2 gap-4">

        {rootCategories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="block border rounded-lg p-4 hover:bg-gray-50"
          >
            <h2 className="font-semibold">
              {cat.name}
            </h2>

            {cat.description && (
              <p className="text-sm text-gray-600 mt-1">
                {cat.description}
              </p>
            )}

          </Link>
        ))}

      </div>

    </main>
  );
}