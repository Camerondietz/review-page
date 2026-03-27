"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type NodeType = {
  id: string;
  name: string;
  description?: string;
  tags?: string[];
  parentIds?: string[] | null;
  metadata?: Record<string, any>;
};

type Props = {
  nodes: NodeType[];
  tags: string[];
  categories: NodeType[];
};

/* ----------------------------- */
/* Build category tree */
/* ----------------------------- */

function buildCategoryTree(categories: NodeType[]) {

  const map: Record<string, NodeType[]> = {};

  categories.forEach(cat => {

    if (!cat.parentIds) return;

    cat.parentIds.forEach(parent => {

      if (!map[parent])
        map[parent] = [];

      map[parent].push(cat);

    });

  });

  return map;
}

/* ----------------------------- */
/* Get all descendants */
/* ----------------------------- */

function getDescendantIds(
  id:string,
  tree:Record<string, NodeType[]>
):string[]{

  let results:string[] = [];

  const children = tree[id];

  if (!children) return [];

  children.forEach(child=>{

    results.push(child.id);

    results = [
      ...results,
      ...getDescendantIds(child.id, tree)
    ];

  });

  return results;
}

/* ----------------------------- */
/* Category tree UI */
/* ----------------------------- */

function CategoryTree({
  categories,
  tree,
  selectedCategory,
  setSelectedCategory,
  level = 0
}: any){

  if (!categories || categories.length === 0)
    return null;

  return (

    <div className="space-y-1">

      {categories.map((cat:any)=>(

        <div key={cat.id}>

          <button

            onClick={()=>setSelectedCategory(cat.id)}

            className={`
              block w-full text-left py-1 rounded
              hover:bg-gray-100 transition
              ${selectedCategory === cat.id
                ? "bg-blue-100 font-medium"
                : ""
              }
            `}

            style={{
              paddingLeft: `${level * 14 + 8}px`
            }}

          >
            {cat.name}
          </button>

          <CategoryTree

            categories={tree[cat.id]}

            tree={tree}

            selectedCategory={selectedCategory}

            setSelectedCategory={setSelectedCategory}

            level={level + 1}

          />

        </div>

      ))}

    </div>

  );
}


export default function SearchClient({
  nodes,
  tags,
  categories
}: Props) {

  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  /* ----------------------------- */
  /* Build tree once */
  /* ----------------------------- */

  const categoryTree = useMemo(()=>{
    return buildCategoryTree(categories);
  },[categories]);

  /* --------------------------- */
  /* Filtering Logic */
  /* --------------------------- */

  const rootCategories = categories.filter(
    c => !c.parentIds || c.parentIds.length === 0
  );

  const results = nodes.filter((node) => {

    if (query) {
      const q = query.toLowerCase();

      const matchesText =
        node.name.toLowerCase().includes(q) ||
        node.description?.toLowerCase().includes(q);

      if (!matchesText) return false;
    }

    if (selectedTag) {
      if (!node.tags?.includes(selectedTag)) return false;
    }

    /* Category */

    if(selectedCategory){

      const descendants =
        getDescendantIds(
          selectedCategory,
          categoryTree
        );

      const validIds = [
        selectedCategory,
        ...descendants
      ];

      if(!node.parentIds?.some(id =>
        validIds.includes(id)
      )) return false;

    }

    return true;
  });

  /* --------------------------- */
  /* UI */
  /* --------------------------- */

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">

      {/* Filters */}

      <aside className="space-y-6">

        {/* Search */}

        <div>
          <label className="block text-sm font-medium mb-1">
            Search
          </label>

          <input
            type="text"
            placeholder="Search pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>

        {/* Category */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Category
          </label>

          <button
            onClick={()=>setSelectedCategory("")}
            className="text-xs text-blue-600 mb-2"
          >
            Clear category
          </button>

          <div className="
            border rounded p-2
            max-h-105
            overflow-auto
            bg-white
          ">

            <CategoryTree

              categories={rootCategories}

              tree={categoryTree}

              selectedCategory={selectedCategory}

              setSelectedCategory={
                setSelectedCategory
              }

            />

          </div>

        </div>

        {/* Tag Filter */}

        <div>
          <label className="block text-sm font-medium mb-1">
            Tag
          </label>

          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="border rounded w-full p-2"
          >
            <option value="">All</option>

            {tags.map((tag) => (
              <option key={tag}>
                {tag}
              </option>
            ))}

          </select>
        </div>

      </aside>

      {/* Results */}

      <section>

        <p className="text-sm text-gray-500 mb-4">
          {results.length} results
        </p>

        <div className="space-y-3">

          {results.map((node) => (
            <Link
              key={node.id}
              href={`/category/${node.id}`}
              className="block border rounded-lg p-4 hover:bg-gray-50"
            >
              <h2 className="font-semibold">
                {node.name}
              </h2>

              {node.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {node.description}
                </p>
              )}

              {node.tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {node.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

            </Link>
          ))}

        </div>

      </section>

    </div>
  );
}