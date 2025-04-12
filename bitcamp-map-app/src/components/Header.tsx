"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <div>
              <h1 className="text-2xl font-semibold">
                <Link href="/" className="text-gray-700 hover:text-primary">
                  <span className="text-gray-600">Travelero</span>
                </Link>
              </h1>
              <p className="text-sm text-gray-500">??????</p>
            </div>
          </div>

          <div className="hidden sm:flex space-x-2">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-4 flex space-x-2">
          <div className="relative flex-1">
            <div className="flex">
              <Input
                type="text"
                placeholder="Site Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-r-none"
              />
              <Button
                variant="outline"
                className="rounded-l-none border-l-0"
              >
                Search
              </Button>
            </div>
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              className="text-sm text-gray-600"
            >
              User Menu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
