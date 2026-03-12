"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function MobileMenu({ open, setOpen }: Props) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  if (!open) return null;

return (
// Full screen overlay, blurred background
<div className="fixed inset-0 z-50">
  {/* Blurred background overlay */}
  <div
    className="absolute inset-0 backdrop-blur-md bg-black/10"
    onClick={() => setOpen(false)}
  />

  {/* Menu panel */}
  <div
    ref={menuRef}
    className="relative bg-white/90 backdrop-blur-lg p-6 shadow-xl flex flex-col"
  >
    {/* Close button */}
    <button
      onClick={() => setOpen(false)}
      className="mb-8 text-gray-700 hover:text-black font-medium"
    >
      Close
    </button>

    {/* Nav links */}
    <nav className="flex flex-col gap-4 text-lg">
      <Link
        href="/"
        className="hover:text-blue-600 transition-colors"
        onClick={() => setOpen(false)}
      >
        Home
      </Link>

      <Link
        href="/category"
        className="hover:text-blue-600 transition-colors"
        onClick={() => setOpen(false)}
      >
        Categories
      </Link>

      <Link
        href="/search"
        className="hover:text-blue-600 transition-colors"
        onClick={() => setOpen(false)}
      >
        Search
      </Link>
    </nav>
  </div>
</div>
  );
}