# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
# Import the specific function from utils
from backend import determine_route
from backend import get_distance 

load_dotenv()
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}}) # Adjust for production

# --- Existing endpoints can remain ---

# --- NEW Endpoint for determine_route ---
@app.route('/api/determine-route', methods=['POST'])
def handle_determine_route():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json()
    start_point = data.get('start') # Expecting { "lat": ..., "lng": ... }
    end_point = data.get('end')     # Expecting { "lat": ..., "lng": ... }
    slider_value = data.get('sliderValue') # Expecting number (0-10)

    # --- Validate Input ---
    if start_point is None or end_point is None or slider_value is None:
         return jsonify({"error": "Missing 'start', 'end', or 'sliderValue'"}), 400

    try:
        # Ensure slider value is an integer for the backend function
        slider_value_int = int(slider_value)
        if not (0 <= slider_value_int <= 10):
            raise ValueError("Slider value out of range")
    except (ValueError, TypeError):
        return jsonify({"error": "Invalid 'sliderValue' (expected integer 0-10)"}), 400

    # --- Format coordinates into strings for determine_route ---
    start_str = start_point
    end_str = end_point

    print(f"--- Received request at /api/determine-route ---")
    print(f"Start: {start_str}, End: {end_str}, Slider: {slider_value_int}")

    # --- Call the backend logic function ---
    route_result = determine_route(start_str, end_str, slider_value_int)

    if route_result:
        # Success! Send the result data back
        return jsonify(route_result), 200
    else:
        # Should not happen if error handling in determine_route is correct
        return jsonify({"error": "Unknown error determining route"}), 500

@app.route('/api/get_distance', methods=['POST'])
def handle_get_distance():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json()
    start_point = data.get('start') # Expecting { "lat": ..., "lng": ... }
    end_point = data.get('end')     # Expecting { "lat": ..., "lng": ... }

    # --- Validate Input ---
    if start_point is None or end_point is None:
         return jsonify({"error": "Missing 'start' or 'end'"}), 400

    # --- Format coordinates into strings for determine_route ---
    start_str = start_point
    end_str = end_point

    print(f"--- Received request at /api/determine-route ---")
    print(f"Start: {start_str}, End: {end_str}")

    # --- Call the backend logic function ---
    distance_result = get_distance(start_str, end_str)

    if distance_result:
        # Success! Send the result data back
        return jsonify(distance_result), 200
    else:
        # Should not happen if error handling in determine_route is correct
        return jsonify({"error": "Unknown error getting distance"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 3002)), debug=True)