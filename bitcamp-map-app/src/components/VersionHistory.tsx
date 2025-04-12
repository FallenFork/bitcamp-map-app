"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type VersionEntry = {
  date: string;
  description: string;
};

export default function VersionHistory() {
  const versions: VersionEntry[] = [
    {
      date: "13th May 2024",
      description: "Performance and stability improvement"
    },
    {
      date: "22nd March 2024",
      description: "Performance improvement"
    },
    {
      date: "25th June 2023",
      description: "Bug fix. Some southern hemisphere locations did not return data"
    },
    {
      date: "21st December 2022",
      description: "New data source"
    },
    {
      date: "9th April 2019",
      description: "Click/tap on a marker to remove it"
    },
    {
      date: "10th September 2018",
      description: "Changed to Leaflet Maps"
    },
    {
      date: "11th March 2018",
      description: "Estimated elevation now changes as the Street View position changes"
    },
    {
      date: "3rd November 2016",
      description: "Changes to number of decimal places in elevation reading and latitude/longitude"
    },
    {
      date: "4th August 2015",
      description: "Latitude and longitude of location displayed below the map"
    },
    {
      date: "1st August 2015",
      description: "New option to estimate elevation by inputting latitude and longitude"
    },
    {
      date: "14th November 2013",
      description: "New search tool"
    },
    {
      date: "12th August 2010",
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
