"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type VersionEntry = {
  date: string;
  description: string;
};

export default function VersionHistory() {
  const versions: VersionEntry[] = [
    {
      date: "12th April 2025",
      description: "Initial version"
    }
  ];

  return (
    <Card className="mt-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-primary">Version History</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          {versions.map((version) => (
            <li key={`${version.date}-${version.description}`} className="flex text-sm">
              <span className="font-medium min-w-32">{version.date}</span>
              <span className="text-gray-600">- {version.description}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
