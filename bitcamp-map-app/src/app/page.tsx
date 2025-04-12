"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Instructions from "@/components/Instructions";
import VersionHistory from "@/components/VersionHistory";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues with the Google Maps API
const GoogleMapComponent = dynamic(
  () => import("@/components/map/GoogleMapComponent"),
  { ssr: false }
);

export default function Home() {
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
              <h1 className="text-2xl font-bold text-primary mb-1">Elevation Finder</h1>
              <p className="text-gray-600 mb-4">
                This tool can be used to find an estimate for the elevation of a point on the earth. Click/tap the map or type the address in the text box.
              </p>

              <h2 className="text-xl font-semibold text-primary mb-3">Find Elevation Map</h2>

              <GoogleMapComponent />

              <Instructions />

              <VersionHistory />
            </div>
          </div>
        </div>
      </main>

      <div className="container mx-auto px-4">
        <Footer />
      </div>
    </div>
  );
}
