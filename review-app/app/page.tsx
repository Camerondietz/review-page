import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import FeaturedCard from "@/components/FeaturedCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="py-32 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-semibold tracking-tight mb-6">
            The Best of Austin.
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Curated recommendations for the best restaurants, coffee shops,
            nightlife, neighborhoods, and hidden gems in Austin, Texas.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#featured"
              className="bg-austinGold text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Explore Austin
            </a>
            <a
              href="#categories"
              className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:border-austinBlue transition"
            >
              Browse Categories
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-16 text-center">
            Browse by Category
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <CategoryCard
              title="Restaurants"
              description="The best dining experiences in Austin."
              href="/restaurants"
            />
            <CategoryCard
              title="Coffee Shops"
              description="Work-friendly and specialty coffee spots."
              href="/coffee"
            />
            <CategoryCard
              title="Things To Do"
              description="Experiences, nightlife, and activities."
              href="/things-to-do"
            />
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-16 text-center">
            Featured Places
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeaturedCard
              title="Terry Black’s BBQ"
              category="BBQ"
              image="/bbq.jpg"
              href="/places/terry-blacks"
            />
            <FeaturedCard
              title="Houndstooth Coffee"
              category="Coffee"
              image="/coffee.jpg"
              href="/places/houndstooth"
            />
            <FeaturedCard
              title="South Congress"
              category="Neighborhood"
              image="/soc.jpg"
              href="/neighborhoods/south-congress"
            />
          </div>
        </div>
      </section>

      {/* EMAIL CTA */}
      <section className="py-32 bg-gray-900 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">
            Get the Austin Insider Guide
          </h2>
          <p className="text-gray-300 mb-10">
            The best places, hidden gems, and new openings — delivered monthly.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-black w-full sm:w-auto"
            />
            <button className="bg-austinGold px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          A modern knowledge platform
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Explore categories, discover topics, and search through structured
          content using a clean and powerful knowledge system.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <Link
            href="/category"
            className="px-5 py-3 rounded-md bg-black text-white hover:bg-gray-800"
          >
            Browse Categories
          </Link>

          <Link
            href="/search"
            className="px-5 py-3 rounded-md border hover:bg-gray-50"
          >
            Search
          </Link>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="font-semibold text-lg">
              Structured Knowledge
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              Organize information into categories, pages, and relationships
              to create powerful knowledge systems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Powerful Search
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              Instantly locate information with advanced filtering by tags,
              categories, and metadata.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Modular Architecture
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              Built for flexibility so this template can power documentation,
              directories, and research sites.
            </p>
          </div>

        </div>

      </section>

      {/* Example Sections */}

      <section className="bg-gray-50 py-16">

        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-2xl font-semibold mb-8">
            Example Content Sections
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Example Block */}

            <div className="border rounded-lg p-5 bg-white">
              <h3 className="font-semibold">
                Documentation
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Create structured documentation similar to developer docs
                or technical references.
              </p>
            </div>

            <div className="border rounded-lg p-5 bg-white">
              <h3 className="font-semibold">
                Reviews
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Build a review platform for products, places, or services
                using categories and tags.
              </p>
            </div>

            <div className="border rounded-lg p-5 bg-white">
              <h3 className="font-semibold">
                Knowledge Base
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Organize research, articles, and guides into a navigable
                knowledge network.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Explore */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-3xl font-semibold">
              Explore the content graph
            </h2>

            <p className="text-gray-600 mt-4">
              This platform organizes information into a flexible graph of
              categories, pages, tags, and relationships so you can explore
              knowledge naturally.
            </p>

            <div className="mt-6 flex gap-4">

              <Link
                href="/category"
                className="px-5 py-3 border rounded-md hover:bg-gray-50"
              >
                View Categories
              </Link>

              <Link
                href="/search"
                className="px-5 py-3 border rounded-md hover:bg-gray-50"
              >
                Open Search
              </Link>

            </div>

          </div>

          {/* Example card grid */}

          <div className="grid grid-cols-2 gap-4">

            <div className="border rounded-lg p-4">
              <p className="font-medium">
                Categories
              </p>
              <p className="text-xs text-gray-500">
                hierarchical navigation
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="font-medium">
                Tags
              </p>
              <p className="text-xs text-gray-500">
                cross-topic discovery
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="font-medium">
                Relationships
              </p>
              <p className="text-xs text-gray-500">
                related content linking
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="font-medium">
                Metadata
              </p>
              <p className="text-xs text-gray-500">
                powerful filtering
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t">

        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <h2 className="text-3xl font-semibold">
            Start exploring
          </h2>

          <p className="text-gray-600 mt-3">
            Browse the category structure or search the entire knowledge base.
          </p>

          <div className="mt-6 flex justify-center gap-4">

            <Link
              href="/category"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Categories
            </Link>

            <Link
              href="/search"
              className="px-6 py-3 border rounded-md hover:bg-gray-50"
            >
              Search
            </Link>

          </div>

        </div>

      </section>
    </div>
  );
}