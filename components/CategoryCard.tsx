import Link from "next/link";

interface Props {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

export default function CategoryCard({ title, description, href, badge }: Props) {
  return (
    <Link
      href={href}
      className="group relative block rounded-3xl border border-gray-100 bg-white p-7 ring-soft transition duration-300 hover:-translate-y-0.5 hover:border-gray-200"
    >
      {/* Decorative corner gradient */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-austin-gold/0 to-austin-blue/0 group-hover:from-austin-gold/10 group-hover:to-austin-blue/10 transition" />

      <div className="relative flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-austin-deep-blue transition">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>
        {badge && (
          <span className="ml-3 shrink-0 inline-flex items-center rounded-full bg-austin-gold/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-austin-brown">
            {badge}
          </span>
        )}
      </div>

      <div className="relative mt-6 inline-flex items-center text-sm font-medium text-austin-deep-blue">
        Explore
        <svg
          className="ml-1.5 h-3.5 w-3.5 transition group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
