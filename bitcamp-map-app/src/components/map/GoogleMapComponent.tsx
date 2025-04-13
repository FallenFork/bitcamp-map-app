"use client";

import type React from "react";
import { useState, useCallback, useRef } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow, Polyline } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as RadixSlider from "@radix-ui/react-slider"

import dotenv from 'dotenv'
import axios, { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
dotenv.config();

// Use environment variable for API key (will be replaced with a placeholder for demo purposes)
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const BACKEND_URL = "http://172.23.30.84:5000"

if (!GOOGLE_MAPS_API_KEY) {
  // you can throw error here and 
  // let [Error Boundary](https://reactjs.org/docs/error-boundaries.html)
  // handle it
  // or return an component that says "Google Token is not set"
  throw new Error('Google token is not set');
}

// Define container style for the map
const containerStyle = {
  width: '100%',
  height: '500px'
};

// Initial center of the map (world view)
const initialCenter = {
  lat: 20,
  lng: 0
};

interface MarkerData {
  id: number;
  position: google.maps.LatLngLiteral;
  elevation: number | null;
  loading: boolean;
}

/** Structure for geographic bounds (used for map fitting) */
interface Bounds {
    southwest: google.maps.LatLngLiteral;
    northeast: google.maps.LatLngLiteral;
}

/**
 * Expected structure of the successful response from the `/api/determine-route`
 * backend endpoint. **Adjust this based on the exact fields your `determine_route` returns.**
 */
interface RouteResult {
    // Fields returned by your backend's determine_route function
    index?: number; // Optional, from your backend example
    summary?: string; // Optional, from your backend example
    duration_text?: string; // Optional
    duration_numerical?: number; // Optional (renamed from backend example for consistency)
    distance_text?: string; // Optional
    distance_numerical?: number; // Optional (renamed from backend example for consistency)
    encoded_polyline: string; // The crucial field for drawing the route
    bounds?: Bounds | null; // Optional: Important for map fitting (Make sure backend returns this structure if needed)
    // Add any other relevant fields your backend returns
    message?: string; // Example: Add a message field if your backend sends one
    slider_input?: number; // Example: Include the slider value used
}

interface DistanceElevationSliderProps {
    onValueChange?: (value: number) => void
}

function DistanceElevationSlider({ onValueChange }: DistanceElevationSliderProps) {
  const [value, setValue] = useState(50)

  const handleValueChange = (newValue: number[]) => {
    setValue(newValue[0])
    onValueChange?.(newValue[0])
    console.log(newValue[0])
  }

  return (
    <div className="w-full max-w-md">
      <div className="relative pt-6 pb-2">
        <div className="absolute inset-0 flex justify-between items-start pointer-events-none z-10">
          <span className="text-gray-600 mb-4">Distance</span>
          <span className="text-gray-600 mb-4">Elevation</span>
        </div>

        {/* Track background */}
        <div className="absolute inset-x-0 top-8 bottom-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />

        {/* Slider with bubble inside Thumb */}
        <RadixSlider.Root
          value={[value]}
          onValueChange={handleValueChange}
          max={100}
          step={1}
          className="relative z-20 flex items-center h-10 w-full touch-none select-none"
        >
          <RadixSlider.Track className="bg-transparent relative h-2 w-full rounded-full">
            <RadixSlider.Range className="absolute h-full bg-transparent" />
          </RadixSlider.Track>

          <RadixSlider.Thumb
            className="group relative block w-6 h-6 bg-white border border-gray-300 shadow-md rounded-full focus:outline-none"
            aria-label="Slider thumb"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-sm font-medium rounded-md shadow-md z-30 whitespace-nowrap">
              {value}%
            </div>
          </RadixSlider.Thumb>
        </RadixSlider.Root>
      </div>

      {/* Bottom labels */}
      <div className="flex justify-between text-sm text-muted-foreground mt-1">
      </div>
    </div>
  )
}


const GoogleMapComponent: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [routeResult, setRouteResult] = useState<RouteResult | null>(null); // **NEW: State for route data**
  const [isLoading, setIsLoading] = useState<boolean>(false); // **NEW: Loading state**
  const [error, setError] = useState<string | null>(null); // **NEW: Error state**
  const geocoderRef = useRef<google.maps.Geocoder | null>(null);
  const elevationServiceRef = useRef<google.maps.ElevationService | null>(null);

  // Initialize map
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
    geocoderRef.current = new google.maps.Geocoder();
    elevationServiceRef.current = new google.maps.ElevationService();
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Function to handle map clicks
  const handleMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (isLoading) return;
    if (event.latLng) {
      const newMarker: MarkerData = {
        id: Date.now(),
        position: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        },
        elevation: null,
        loading: true
      };

      setMarkers(prev => {
        const updatedMarkers = [...prev, newMarker];
        return updatedMarkers.length > 2 ? updatedMarkers.slice(-2) : updatedMarkers;
      });

      // Get elevation data
      if (elevationServiceRef.current) {
        elevationServiceRef.current.getElevationForLocations({
          locations: [{ lat: event.latLng.lat(), lng: event.latLng.lng() }]
        }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            setMarkers(prev =>
              prev.map(marker =>
                marker.id === newMarker.id
                  ? { ...marker, elevation: results[0].elevation, loading: false }
                  : marker
              )
            );
          } else {
            setMarkers(prev =>
              prev.map(marker =>
                marker.id === newMarker.id
                  ? { ...marker, elevation: null, loading: false }
                  : marker
              )
            );
          }
        });
      }
    }
  }, []);

  // Function to handle search
  const handleSearch = () => {
    if (isLoading) return;
    if (geocoderRef.current && searchQuery.trim() !== '') {
      geocoderRef.current.geocode({ address: searchQuery }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const location = results[0].geometry.location;

          // Center the map on the search result
          if (map) {
            map.setCenter(location);
            map.setZoom(14);
          }

          // Create a new marker at the search location
          const newMarker: MarkerData = {
            id: Date.now(),
            position: {
              lat: location.lat(),
              lng: location.lng()
            },
            elevation: null,
            loading: true
          };

          setMarkers(prev => [...prev, newMarker]);

          // Get elevation data
          if (elevationServiceRef.current) {
            elevationServiceRef.current.getElevationForLocations({
              locations: [{ lat: location.lat(), lng: location.lng() }]
            }, (elevResults, elevStatus) => {
              if (elevStatus === 'OK' && elevResults && elevResults[0]) {
                setMarkers(prev =>
                  prev.map(marker =>
                    marker.id === newMarker.id
                      ? { ...marker, elevation: elevResults[0].elevation, loading: false }
                      : marker
                  )
                );
              } else {
                setMarkers(prev =>
                  prev.map(marker =>
                    marker.id === newMarker.id
                      ? { ...marker, elevation: null, loading: false }
                      : marker
                  )
                );
              }
            });
          }
        }
      });
    }
  };

  const callDetermineRouteAPI = useCallback(async (start: google.maps.LatLngLiteral, end: google.maps.LatLngLiteral, sliderVal: number) => {
    console.log("getting route")
    setIsLoading(true);
    setError(null);
    setRouteResult(null); // Clear previous route during loading

    try {
        const targetUrl = `${BACKEND_URL}/api/determine-route`;
        console.log(`Calling ${targetUrl} with:`, { start, end, sliderVal });

        const response = await axios.post<RouteResult>(targetUrl, {
            start:start,        // Send {lat, lng} object
            end: end,          // Send {lat, lng} object
            sliderValue: sliderVal // Send the number
        });

        console.log('Backend response:', response.data);
        setRouteResult(response.data); // Store the successful result

        // Fit map to bounds if available and valid
        if (response.data.bounds?.southwest && response.data.bounds?.northeast && map) {
             try {
                const bounds = new window.google.maps.LatLngBounds(
                    response.data.bounds.southwest,
                    response.data.bounds.northeast
                );
                map.fitBounds(bounds);
                map.panBy(0, 0); // Nudge map
             } catch (boundsError) {
                 console.error("Error processing bounds:", boundsError);
                 // Don't set global error, just log problem with bounds
             }
        } else if (response.data.encoded_polyline) {
            // Fallback: Fit bounds based on polyline if bounds not provided/valid
            const decodedPath = decodePolyline(response.data.encoded_polyline);
             if (decodedPath.length > 0 && map && window.google?.maps?.LatLngBounds) {
                 const bounds = new window.google.maps.LatLngBounds();
                 decodedPath.forEach(point => bounds.extend(point));
                 map.fitBounds(bounds);
                 map.panBy(0, 0);
             }
        }


    } catch (err) {
        console.error('Error determining route:', err);
        let errorMsg = 'Failed to determine route.';
        if (axios.isAxiosError(err)) {
            const axiosError = err as AxiosError<ApiError>; // Type the error
            errorMsg = axiosError.message || errorMsg;
        } else if (err instanceof Error) {
            errorMsg = err.message;
        }
        setError(errorMsg);
    } finally {
        setIsLoading(false);
    }
}, [map]); // Depend on map instance

const decodePolyline = (encodedPolyline: string): google.maps.LatLng[] => {
    if (!encodedPolyline || typeof window.google?.maps?.geometry?.encoding?.decodePath !== 'function') {
        console.warn("Geometry library not available for polyline decoding.");
        return [];
    }
    try {
        return window.google.maps.geometry.encoding.decodePath(encodedPolyline);
    } catch(e) {
        console.error("Failed to decode polyline:", encodedPolyline, e);
        return [];
    }
  };

  // Function handles generate
const handleGenerate = () => {
  if (markers.length !== 2) {
    alert("Please place exactly two markers to generate a path.");
    return;
  }

  const [start, end] = markers;

  callDetermineRouteAPI(start.position, end.position, Math.floor(sliderValue / 10))

  // call the generate route function to generate a route 

  // Example: Log the path start and end
  console.log("Generating path from:", start.position, "to", end.position);

  // PLACEHOLDER: Call your path-generating logic here
  // generatePath(start.position, end.position);
} 

  // Function to clear all markers
  const clearMarkers = () => {
    setMarkers([]);
    setSelectedMarker(null);
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
  }


  return (
    <div className="relative w-full">
        <DistanceElevationSlider onValueChange={handleSliderChange} />
      <div className="mb-4 flex gap-2">
        <Input
          type="text"
          placeholder="Search for a location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="flex-grow"
        />
        <Button onClick={handleSearch}>Search</Button>
        <Button variant="outline" onClick={clearMarkers}>Clear Map</Button>
      </div>

      <Card className="border border-border shadow-sm">
        <CardContent className="p-0 overflow-hidden rounded-md">
          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={initialCenter}
              zoom={2}
              onClick={handleMapClick}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{
                fullscreenControl: true,
                mapTypeControl: true,
                streetViewControl: false,
                zoomControl: true,
              }}
            >
              {markers.map((marker) => (
                <Marker
                  key={marker.id}
                  position={marker.position}
                  onClick={() => setSelectedMarker(marker)}
                />
              ))}

              {selectedMarker && (
                <InfoWindow
                  position={selectedMarker.position}
                  onCloseClick={() => setSelectedMarker(null)}
                >
                  <div className="p-2">
                    <h3 className="font-semibold">Location Information</h3>
                    <p>Latitude: {selectedMarker.position.lat.toFixed(6)}</p>
                    <p>Longitude: {selectedMarker.position.lng.toFixed(6)}</p>
                    <p>
                      Elevation: {selectedMarker.loading
                        ? 'Loading...'
                        : selectedMarker.elevation !== null
                          ? `${selectedMarker.elevation.toFixed(2)} meters`
                          : 'Not available'}
                    </p>
                  </div>
                </InfoWindow>
              )}
              {routeResult?.encoded_polyline && (
                <Polyline
                    path={decodePolyline(routeResult.encoded_polyline)}
                    options={{ strokeColor: '#1a73e8', strokeWeight: 5, strokeOpacity: 0.8 }} // Google Maps blue
                />
              )}
            </GoogleMap>
          </LoadScript>
        </CardContent>
      </Card>

      <div className="mt-4">
        
        <Button onClick={handleGenerate} disabled={isLoading || markers.length !== 2}>Generate Path</Button>
        {routeResult && (
            <div className="route-details section mt-4 p-4 border rounded-md bg-secondary/50">
                <h2 className="text-lg font-semibold mb-2">Determined Route Details</h2>
                {routeResult.summary && <p><strong>Summary:</strong> {routeResult.summary}</p>}
                {routeResult.duration_text && <p><strong>Duration:</strong> {routeResult.duration_text}</p>}
                {routeResult.distance_text && <p><strong>Distance:</strong> {routeResult.distance_text}</p>}
                {routeResult.slider_input !== undefined && <p><strong>Slider Value Used:</strong> {routeResult.slider_input}</p>}
                {/* Display other fields from your RouteResult if needed */}
            </div>
        )}
        <br />
        <br />
        <h2 className="text-2xl font-semibold text-blue-400">Markers</h2>
        {markers.length > 0 ? (
          <div className="space-y-2">
            {markers.map((marker) => (
              <Card key={marker.id} className="p-3">
                <div className="flex justify-between">
                  <div>
                    <p>Lat: {marker.position.lat.toFixed(6)}, Lng: {marker.position.lng.toFixed(6)}</p>
                    <p className="font-medium">
                      Elevation: {marker.loading
                        ? 'Loading...'
                        : marker.elevation !== null
                          ? `${marker.elevation.toFixed(2)} meters`
                          : 'Not available'}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setMarkers(prev => prev.filter(m => m.id !== marker.id));
                      if (selectedMarker?.id === marker.id) {
                        setSelectedMarker(null);
                      }
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Click on the map to place markers.</p>
        )}
      </div>
    </div>
  );
};

export default GoogleMapComponent;