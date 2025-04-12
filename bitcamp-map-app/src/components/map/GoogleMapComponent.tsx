"use client";

import type React from "react";
import { useState, useCallback, useRef } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import dotenv from 'dotenv'
dotenv.config();

// Use environment variable for API key (will be replaced with a placeholder for demo purposes)
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

if(!GOOGLE_MAPS_API_KEY){
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

const GoogleMapComponent: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
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

      setMarkers(prev => [...prev, newMarker]);

      // Get elevation data
      if (elevationServiceRef.current) {
        elevationServiceRef.current.getElevationForLocations({
          locations: [{ lat: event.latLng.lat(), lng: event.latLng.lng() }]
        }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            setMarkers(prev =>
              prev.map(marker =>
                marker.id === newMarker.id
                  ? {...marker, elevation: results[0].elevation, loading: false}
                  : marker
              )
            );
          } else {
            setMarkers(prev =>
              prev.map(marker =>
                marker.id === newMarker.id
                  ? {...marker, elevation: null, loading: false}
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
                      ? {...marker, elevation: elevResults[0].elevation, loading: false}
                      : marker
                  )
                );
              } else {
                setMarkers(prev =>
                  prev.map(marker =>
                    marker.id === newMarker.id
                      ? {...marker, elevation: null, loading: false}
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

  // Function to clear all markers
  const clearMarkers = () => {
    setMarkers([]);
    setSelectedMarker(null);
  };

  return (
    <div className="relative w-full">
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
            </GoogleMap>
          </LoadScript>
        </CardContent>
      </Card>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Markers</h2>
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
          <p className="text-muted-foreground">No elevation data. Click on the map to place markers.</p>
        )}
      </div>
    </div>
  );
};

export default GoogleMapComponent;
