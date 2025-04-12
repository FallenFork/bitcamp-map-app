import googlemaps
import os
import json
from datetime import datetime
from dotenv import load_dotenv # Optional: for loading API key from .env file

# --- Configuration ---
# Load API key from environment variable for security
# Create a .env file in the same directory with: GOOGLE_MAPS_API_KEY=YOUR_ACTUAL_API_KEY
load_dotenv()
API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")

if not API_KEY:
    raise ValueError("Google Maps API key not found. Set the GOOGLE_MAPS_API_KEY environment variable.")

# Initialize the Google Maps client
gmaps = googlemaps.Client(key=API_KEY)

# --- Function to Get Routes ---
def get_multiple_routes(origin, destination, mode="walking"): # Default mode set to walking
    """
    Fetches multiple routes between an origin and destination using the Google Maps Directions API.

    Args:
        origin (str): The starting point (address or lat/lng).
        destination (str): The ending point (address or lat/lng).
        mode (str): The travel mode. Defaults to "walking".
                    Other options: "driving", "bicycling", "transit".

    Returns:
        list: A list of dictionaries, where each dictionary contains details
              about a specific route (summary, duration, distance, encoded_polyline).
              Returns an empty list if no routes are found or an error occurs.
        None: Returns None if there was a critical API error.
    """
    # Validate mode - although we default to walking, the function could be called with others
    valid_modes = ["driving", "walking", "bicycling", "transit"]
    if mode not in valid_modes:
         print(f"Warning: Invalid mode '{mode}'. Using 'walking' instead.")
         mode = "walking"

    print(f"Requesting directions from '{origin}' to '{destination}' (mode: {mode})")
    try:
        # Request directions with alternatives enabled
        # departure_time is less relevant for walking but doesn't hurt
        now = datetime.now()
        directions_result = gmaps.directions(origin,
                                             destination,
                                             mode=mode, # Set the mode here
                                             alternatives=True, # Still want alternatives
                                             departure_time=now)

        if not directions_result:
            print("No routes found.")
            return []

        processed_routes = []
        for i, route in enumerate(directions_result):
            # Basic route info (summary might be less detailed for walking)
            summary = route.get('summary', f'Walking Route {i+1}')

            # Leg information
            if route.get('legs') and len(route['legs']) > 0:
                leg = route['legs'][0]
                duration_text = leg.get('duration', {}).get('text', 'N/A')
                distance_text = leg.get('distance', {}).get('text', 'N/A')

                # Extract the encoded polyline string
                encoded_polyline = route.get('overview_polyline', {}).get('points')

                if encoded_polyline:
                    processed_routes.append({
                        'index': i,
                        'summary': summary,
                        'duration': duration_text,
                        'distance': distance_text,
                        'encoded_polyline': encoded_polyline,
                        # You could add bounds here too if needed: route.get('bounds')
                        # For walking, you might also want step-by-step: leg.get('steps')
                    })
                else:
                     print(f"Warning: Route {i+1} missing overview_polyline.")

            else:
                print(f"Warning: Route {i+1} missing leg information.")


        print(f"Found {len(processed_routes)} walking routes.")
        return processed_routes

    except googlemaps.exceptions.ApiError as e:
        print(f"Google Maps API Error: {e}")
        if "ZERO_RESULTS" in str(e):
             return []
        return None
    except googlemaps.exceptions.HTTPError as e:
        print(f"HTTP Error calling Google Maps API: {e}")
        return None
    except googlemaps.exceptions.Timeout:
        print("Google Maps API request timed out.")
        return None
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None

# --- Example Usage ---
if __name__ == "__main__":
    # Example locations suitable for walking
    start_location = "Times Square, New York, NY"
    end_location = "Empire State Building, New York, NY"
    # start_location = "British Museum, London"
    # end_location = "Trafalgar Square, London"

    # Explicitly request walking routes
    all_routes_data = get_multiple_routes(start_location, end_location, mode="walking")

    if all_routes_data is None:
        print("Failed to retrieve walking routes due to an API or network error.")
    elif not all_routes_data:
        print("No walking routes were found between the specified locations.")
    else:
        print("\n--- Available Walking Routes ---")
        for route_info in all_routes_data:
            print(f"\nRoute Index: {route_info['index']}")
            print(f"  Summary: {route_info['summary']}") # Summary might be less descriptive for walking
            print(f"  Duration: {route_info['duration']}")
            print(f"  Distance: {route_info['distance']}")
            print(f"  Polyline (start): {route_info['encoded_polyline'][:60]}...")

        # --- Choosing a Route (Backend Logic Example) ---
        # Select the first walking route
        if all_routes_data:
            chosen_route_index = 0
            selected_route_data = all_routes_data[chosen_route_index]

            print(f"\n--- Selected Walking Route (Index {chosen_route_index}) ---")
            print(json.dumps(selected_route_data, indent=2))

            # You can now use this selected route's polyline
            selected_polyline = selected_route_data['encoded_polyline']
            print(f"\nSelected Polyline for further use: {selected_polyline}")

        # Example: Select based on shortest distance (more reliable for walking than duration string)
        # Note: Requires parsing distance string 'X.Y km' or 'Z m' - this is simplified.
        # A robust solution would parse the numeric value from leg['distance']['value'] (in meters)
        try:
            shortest_distance_route = min(all_routes_data, key=lambda r: r['distance']) # Simple string comparison
            print(f"\n--- Walking Route with Shortest Distance (approx) ---")
            print(json.dumps(shortest_distance_route, indent=2))
        except ValueError:
             print("\nCould not determine shortest distance route (maybe missing data).")