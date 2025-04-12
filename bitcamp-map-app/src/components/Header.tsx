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
            <img src="/assets/T.png" width="100" />

            <div>
              <h1 className="text-2xl font-semibold">
                <Link href="/" className="text-gray-700 hover:text-primary">
                  <span className="text-primary">Travelero</span>
                </Link>
              </h1>
              <p className="text-sm text-gray-500">Tralelero Tralalah</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
