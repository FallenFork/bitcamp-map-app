"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Instructions from "@/components/Instructions";
import VersionHistory from "@/components/VersionHistory";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues with the Google Maps API
const GoogleMapComponent = dynamic(
  () => import("@/components/map/GoogleMapComponent"),
  { ssr: false }
);

export default function Home() {

  const handleSliderChange = (value: number) => {
    console.log("Slider value:", value)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 order-2 md:order-1">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="md:col-span-3 order-1 md:order-2">
            <div>
              <h1 className="text-2xl font-bold text-blue-400">Foot Finder</h1>
              <p className="text-gray-600 mb-4">
                Search a location, click two points on the map, and generate your path based on preference for Distance vs. Elevation.
              </p>
              <h1 className="text-2xl font-bold text-blue-400">Select Distance vs Elevation</h1>

              <GoogleMapComponent />

              <Instructions />

              <VersionHistory />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
