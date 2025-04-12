# Elevation Finder

A tool to find the elevation of any location on Earth using Google Maps API. This is a clone of the [FreeMapTools Elevation Finder](https://www.freemaptools.com/elevation-finder.htm).

## Features

- Interactive Google Maps integration
- Search for any location by name or address
- Click on the map to place markers and get elevation data
- View detailed elevation information for each marker
- Clear all markers with a single click
- Responsive design for all devices

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Google Maps API

## Getting Started

### Prerequisites

- Node.js 16.8+ or Bun
- A Google Maps API key with the following APIs enabled:
  - Maps JavaScript API
  - Geocoding API
  - Elevation API
  - Places API

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file in the root directory with your Google Maps API key:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Start the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

1. Build the application:
   ```bash
   bun run build
   ```

2. Deploy the application to your preferred hosting provider. Make sure to set the environment variable `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in your production environment.

## License

This project is for educational purposes only. The original [FreeMapTools Elevation Finder](https://www.freemaptools.com/elevation-finder.htm) is owned by Free Map Tools.
