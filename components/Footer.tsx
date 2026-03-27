import Link from "next/link";

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="border-t mt-20">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}

          <div>

            <h3 className="font-semibold text-lg mb-2">
              Template
            </h3>

            <p className="text-sm text-gray-600 max-w-xs">
              A modular knowledge and content platform
              built with Next.js.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="font-semibold mb-3">
              Navigation
            </h4>

            <div className="flex flex-col gap-2 text-sm text-gray-600">

              <Link href="/category">
                Categories
              </Link>

              <Link href="/search">
                Search
              </Link>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h4 className="font-semibold mb-3">
              Legal
            </h4>

            <div className="flex flex-col gap-2 text-sm text-gray-600">

              <Link href="/privacy">
                Privacy
              </Link>

              <Link href="/terms">
                Terms
              </Link>

            </div>

          </div>

        </div>

        <div className="border-t mt-10 pt-6 text-sm text-gray-500">

          © {year} Template. All rights reserved.

        </div>

      </div>

    </footer>
  );
}