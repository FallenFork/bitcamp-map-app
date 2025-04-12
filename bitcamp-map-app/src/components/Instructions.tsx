"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Instructions() {
  return (
    <Card className="mt-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-blue-400">Instructions</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">To use the elevation finder tool:</p>
        <ol className="list-decimal pl-6 space-y-1 mb-4">
          <li>Search Desired Location Using Search Bar</li>
          <li>Place Two Markers For Start and End Locations</li>
          <li>Adjust the Slider to Prioritize Shorter Distances or Travel-Friendly Elevations.</li>
          <li>Click the “Generate Path” Button to Find the Most Optimized Path Based on Your Preferences</li>
        </ol>

        <h3 className="text-lg font-semibold text-blue-400">Other Notes:</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>You can find the elevation of any marker by clicking on it to see the information window</li>
          <li>Click clear map to remove all markers from the map</li>
          <li>Elevations below zero are returned as actual values so be warry of marker location</li>
        </ul>
      </CardContent>
    </Card>
  );
}
