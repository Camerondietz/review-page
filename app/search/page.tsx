import { getAllNodes, getAllTags } from "@/app/tools/repository";
import SearchClient from "./SearchClient";

export default async function SearchPage() {
  const nodes = await getAllNodes();
  const tags = await getAllTags();

  const items = nodes.filter(n => n.type !== "category");
  const categories = nodes.filter(n => n.type === "category");

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Search
      </h1>

      <SearchClient
        nodes={items}
        tags={tags}
        categories={categories}
      />

    </main>
  );
}