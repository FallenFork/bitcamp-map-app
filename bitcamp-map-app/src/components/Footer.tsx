"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 pt-4 border-t border-gray-200">
      <div className="flex flex-wrap gap-2 justify-center text-sm text-gray-600">
        <Link
          href="#"
          className="hover:text-primary hover:underline"
        >
          Contact Free Map Tools
        </Link>
        <span>|</span>
        <Link
          href="#"
          className="hover:text-primary hover:underline"
        >
          Disclaimer
        </Link>
        <span>|</span>
        <Link
          href="#"
          className="hover:text-primary hover:underline"
        >
          Sitemap
        </Link>
        <span>|</span>
        <Link
          href="/"
          className="hover:text-primary hover:underline"
        >
          Free Map Tools
        </Link>
      </div>

      <div className="mt-2 text-center">
        <Link
          href="#"
          className="inline-block px-4 py-2 bg-primary/10 rounded-md text-primary text-sm hover:bg-primary/20 transition-colors"
        >
          Donate
        </Link>
      </div>
    </footer>
  );
}
