// lib/siteConfig.ts
// ------------------------------------------------------------
// Single source of truth for site-specific branding & content.
// Swap this file (and data/nodes.json + app/content/*) to retheme
// the template for another site (e.g. an engineering reference).
// ------------------------------------------------------------

export type NavLink = { label: string; href: string };

export type FeaturedItem = {
  title: string;
  category: string;
  image: string; // path relative to /public, e.g. "/mount-bonnell.jpg"
  href: string; // route, e.g. "/mount-bonnell"
};

export type FeaturedCategory = {
  title: string;
  description: string;
  href: string;
  // Optional emoji or short label rendered as a soft pill on the card
  badge?: string;
};

export const siteConfig = {
  // ---------- Brand ----------
  name: "Best of Austin",
  shortName: "Best of Austin",
  domain: "https://bestofaustin.example.com",
  description:
    "Curated recommendations for the best restaurants, coffee shops, nightlife, neighborhoods, and hidden gems in Austin, Texas.",
  tagline: "The Best of Austin.",
  heroSubtitle:
    "A curated guide to the food, drinks, places, and experiences that make Austin worth getting excited about.",

  // ---------- SEO defaults (used by app/layout + tools/seo) ----------
  defaultKeywords: [
    "Best Austin",
    "Austin Restaurants",
    "Austin Coffee Shops",
    "Things to do in Austin",
  ],
  locale: "en_US",

  // ---------- Navigation ----------
  primaryNav: [
    { label: "Categories", href: "/category" },
    { label: "Search", href: "/search" },
  ] satisfies NavLink[],

  footerNav: [
    { label: "Categories", href: "/category" },
    { label: "Search", href: "/search" },
  ] satisfies NavLink[],

  footerLegal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ] satisfies NavLink[],

  footerBlurb:
    "Curated by locals with decades of first-hand Austin experience.",
  footerCopyrightHolder: "Cameron Dietz",

  // ---------- Homepage content ----------
  featuredItems: [
    {
      title: "Terry Black's BBQ",
      category: "BBQ",
      image: "/terry-blacks-bbq.jpg",
      href: "/terry-blacks-bbq",
    },
    {
      title: "Trumodern Esthetics",
      category: "Esthetician",
      image: "/trumodern-esthetics.jpg",
      href: "/trumodern-esthetics",
    },
    {
      title: "Mount Bonnell",
      category: "Landmark",
      image: "/mount-bonnell.jpg",
      href: "/mount-bonnell",
    },
  ] satisfies FeaturedItem[],

  featuredCategories: [
    {
      title: "Food & Drink",
      description: "The best dining experiences in Austin.",
      href: "/food-drink",
      badge: "Eat",
    },
    {
      title: "Things To Do",
      description: "Experiences, parks, and outdoor adventures.",
      href: "/things-to-do",
      badge: "Do",
    },
    {
      title: "Nightlife",
      description: "Bars, live music, and after-dark hotspots.",
      href: "/nightlife",
      badge: "Night",
    },
  ] satisfies FeaturedCategory[],

  // ---------- Search experience ----------
  search: {
    // Result types this site cares about. The search page renders a
    // type-filter row only when more than one type appears in results.
    // Future sites (e.g. engineering reference) can add { id: "article", label: "Articles" }, etc.
    types: [
      { id: "item", label: "Places", match: (t?: string) => t !== "category" },
    ] as { id: string; label: string; match: (type?: string) => boolean }[],
    placeholder: "Search places, neighborhoods, tags…",
  },
} as const;

export type SiteConfig = typeof siteConfig;
