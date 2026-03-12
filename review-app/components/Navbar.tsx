"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}

          <Link
            href="/"
            className="font-semibold text-lg tracking-tight"
          >
            Template
          </Link>

          {/* Desktop Nav */}

          <nav className="hidden md:flex gap-8 text-sm">

            <Link
              href="/category"
              className="hover:text-black text-gray-600"
            >
              Categories
            </Link>

            <Link
              href="/search"
              className="hover:text-black text-gray-600"
            >
              Search
            </Link>

          </nav>

          {/* Mobile Button */}

          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

      </div>

      <MobileMenu open={open} setOpen={setOpen} />

    </header>
  );
}