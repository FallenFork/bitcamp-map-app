"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-primary">Popular Map Tools</h3>
        <ul className="space-y-1 text-sm">
          <li>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary hover:underline"
            >
              Find Population on Map
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary hover:underline"
            >
              Radius Around a Point on a Map
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary hover:underline"
            >
              How Far Is It Between
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary hover:underline"
            >
              Area Calculator
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary hover:underline"
            >
              Measure Distance on a Map
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary hover:underline font-semibold"
            >
              Elevation Finder
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary hover:underline"
            >
              UK Postcode Map
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-primary">Map Resources</h3>
        <ul className="space-y-1 text-sm">
          <li>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary hover:underline"
            >
              Download UK Postcodes
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Link
          href="#"
          className="text-gray-600 hover:text-primary hover:underline"
        >
          Full List of Map Tools
        </Link>
      </div>

      <ul className="space-y-1 text-sm">
        <li>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary hover:underline"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary hover:underline"
          >
            News
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary hover:underline"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary hover:underline"
          >
            FAQs
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary hover:underline"
          >
            About
          </Link>
        </li>
      </ul>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-primary">Site News</h3>
        <div className="bg-gray-50 p-3 rounded border text-sm">
          <Link
            href="#"
            className="font-medium text-primary hover:underline"
          >
            Find Place With Your Name
          </Link>
          <p className="mt-1 text-gray-600">
            The Find Place With Your Name page has been updated. Better results and improved feedback when there are no results found.
          </p>
        </div>
      </div>
    </div>
  );
}
