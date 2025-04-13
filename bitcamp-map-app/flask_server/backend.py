import googlemaps
import os
import json
from datetime import datetime
import math 
import polyline 
from haversine import haversine, Unit 
from dotenv import load_dotenv # Optional: for loading API key from .env file

# --- Configuration ---
# Load API key from environment variable for security
# Create a .env file in the same directory with: GOOGLE_MAPS_API_KEY=YOUR_ACTUAL_API_KEY
load_dotenv()
API_KEY = os.getenv("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY")

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
        # Request directions with alternatives enabled from the googlemaps api 
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

        # array of all of the routes after being processed which we will return 
        processed_routes = []
        for i, route in enumerate(directions_result):
            # Basic route info (summary might be less detailed for walking)
            summary = route.get('summary', f'Walking Route {i+1}')

            # Leg information (includes info about distance, duration, and polyline)
            if route.get('legs') and len(route['legs']) > 0:
                leg = route['legs'][0]
                
                # extracting the information about the duration and distance of the route from 
                duration_info = leg.get('duration', {})
                distance_info = leg.get('distance', {})
                
                # extracting the numerical and textual representations of the duration and distance from duration_info and distance_info 
                duration_text = duration_info.get('text', 'N/A')
                distance_text = distance_info.get('text', 'N/A')
                duration_numerical = duration_info.get('value', 0) # extracting the duration of the route in seconds 
                distance_numerical = distance_info.get('value', 0) # extracting the distance of the route in meters 

                # Extract the encoded polyline string
                encoded_polyline = route.get('overview_polyline', {}).get('points')

                if encoded_polyline:
                    # adding a new dictionary containing various information about the route to the processed_routes array 
                    processed_routes.append({
                        'index': i,
                        'summary': summary,
                        'duration_text': duration_text,
                        'duration_numerical': duration_numerical,
                        'distance_text': distance_text,
                        'distance_numerical': distance_numerical,
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

def get_elevation_data(encoded_polyline, route_distance, distance_between_points):
    """
    Fetches a list of elevation data responses along a route using the Google Maps Elevation API

    Args:
        encoded_polyline: The encoded polyline of the route whose elevation we are extracting
        route_distance: The distance of the route (used to calculate the number of samples of elevation data to extract)
        distance_between_points: The distance between each sample of elevation data to extract (used to calculate the number of samples of elevation data to extract)

    Returns:
        list: a list of elevation data responses along the path 
    """

    if not encoded_polyline:
        print("Error: Encoded polyline string is required.")
        return []

    print(f"Requesting elevation data for polyline {encoded_polyline} with {route_distance/distance_between_points} samples...")
    try:
        # Use elevation_along_path for sampling along the line
        num_samples = 512 

        if(int(route_distance/distance_between_points) < 512):
            num_samples = int(route_distance/distance_between_points)

        elevation_result = gmaps.elevation_along_path(path=polyline.decode(encoded_polyline), # Prefix with enc:
                                                      samples=num_samples) # max is 512 

        if not elevation_result:
            print("No elevation data found for the polyline.")
            return []
        # request list of points from the polyline, linbe 
        # Process the results
        elevation_points = []
        for point_data in elevation_result:
            elevation_points.append({
                'location': point_data.get('location'), # Contains {'lat': ..., 'lng': ...}
                'elevation': point_data.get('elevation'), # Elevation in meters
                'resolution': point_data.get('resolution') # Optional: resolution in meters
            })

        print(f"Retrieved {len(elevation_points)} elevation points.")
        return elevation_points

    except googlemaps.exceptions.ApiError as e:
        print(f"Google Maps API Error (Elevation): {e}")
        # Specific handling might be needed (e.g., if num_samples is too high)
        return None # Indicate a more critical API failure
    except googlemaps.exceptions.HTTPError as e:
        print(f"HTTP Error calling Google Maps API (Elevation): {e}")
        return None
    except googlemaps.exceptions.Timeout:
        print("Google Maps API request (Elevation) timed out.")
        return None
    except Exception as e:
        # Catch potential issues like invalid polyline format, though the API might handle some
        print(f"An unexpected error occurred (Elevation): {e}")
        return None

def assign_line_weights(elevation1, elevation2, slider_value):
    segment_weight = 0
    elevation_priority = int(slider_value)  # values should range from 0-10 and affect sensitivity to elevation changes
    delta_elevation = elevation2 - elevation1
    dist1_2 = 5 # 5 (meters) spacing between points. This may need changing later on to better reflect distances between points in edge cases.
    # make dist1_2 an argument 
    angle = math.atan(delta_elevation / dist1_2)

    # uphill case, apply normal weighting function.
    if delta_elevation > 0:
        segment_weight = math.pow(((dist1_2 + delta_elevation) / dist1_2), elevation_priority)
    # //Extreme downhill case (downward slope > 45 degrees), apply normal weighting function.
    else:
        # downhill but too steep
        if angle < -(math.pi / 4):
            segment_weight = math.pow(((dist1_2 + abs(delta_elevation)) / dist1_2), elevation_priority)
    # If neither uphill nor extreme downhill, weight of segment is 0.
    return segment_weight 


# get_elevation_data provides us with a list of data points that contain coordinates and elevation 

def sum_line_weights(elevation_data, slider_value):
    sum = 0
    # for every point except for the first one 
    for x in range(1, len(elevation_data)):
        sum += assign_line_weights(elevation_data[x - 1]['elevation'], elevation_data[x]['elevation'], slider_value) #finding the line weight between two elevations

    return sum 

def determine_route(origin, destination, slider_value):

    all_routes_data = get_multiple_routes(origin, destination, mode="walking")

    if all_routes_data is None:
        print("Failed to retrieve walking routes due to an API or network error.")
    elif not all_routes_data:
        print("No walking routes were found between the specified locations.")
    else:
        chosen_route_index = -1
        min_weight = 0
        first_route = True 

        for route_info in all_routes_data:
            route_polyline = route_info.get('encoded_polyline')

            if route_polyline:
                elevation_data = get_elevation_data(route_info.get('encoded_polyline'), route_info.get('distance_numerical'), 5)

                if elevation_data:
                    sum = sum_line_weights(elevation_data, slider_value)

                    if first_route:
                        first_route = False
                        min_weight = sum
                        chosen_route_index = route_info.get('index')
                    elif sum < min_weight:
                        min_weight = sum
                        chosen_route_index = route_info.get('index')
                else: 
                    print("\nCould not retrieve elevation data for the selected route.")
            else:
                print("\nSelected route does not have an encoded polyline.")

        if chosen_route_index != -1:
            return all_routes_data[chosen_route_index]

# returns the distance between an origin and destination passed as arguments, accepting either location names or coordinates 
def get_distance(origin, destination):
    origin_coords = gmaps.geocode(origin)
    destination_coords = gmaps.geocode(destination)

    origin_lat = origin_coords[0]['geometry']['location']['lat']
    origin_lng = origin_coords[0]['geometry']['location']['lng']
    destination_lat = destination_coords[0]['geometry']['location']['lat']
    destination_lng = destination_coords[0]['geometry']['location']['lng']

    return haversine((origin_lat, origin_lng), (destination_lat, destination_lng))



