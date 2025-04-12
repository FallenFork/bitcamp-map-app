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
                  <span
                    className="text-3xl bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    TRAVELERO
                  </span>
              </h1>
              <p className="text-sm text-gray-500">Travelero Tralalah! Half of my heart is in Travelero Tralalah!</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
