"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Instructions() {
  return (
    <Card className="mt-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-primary">Instructions</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">To use the elevation finder tool:</p>
        <ol className="list-decimal pl-6 space-y-1 mb-4">
          <li>Zoom and pan the map to find the desired location</li>
          <li>Click on the map to place a marker</li>
          <li>You will then see the estimated elevation displayed below the map</li>
          <li>Click again to place further markers and find the elevation</li>
        </ol>

        <h3 className="font-semibold mb-2">Other Notes:</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>You can find the elevation of any marker by clicking on it to see the information window</li>
          <li>Click clear map to remove all markers from the map</li>
          <li>Elevations below zero are returned as actual values (unlike some other services)</li>
        </ul>
      </CardContent>
    </Card>
  );
}
