import axios from "axios";

export const getPath = async (start: string, end: string) => {
  const apiKey = process.env.EXPO_PUBLIC_MAPS_KEY;

  const mode = "driving"; // Travel mode: driving, walking, transit, bicycling

  const cords = `https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&mode=${mode}&key=${apiKey}`;

  const { data: coords } = await axios.get(cords);

  try {
    const routes = coords.routes;
    if (routes && routes.length) {
      const route = routes[0];
      const polylinePoints = route.overview_polyline.points;

      // Decode the polyline to get an array of latitude and longitude coordinates
      const decodedCoordinates = decodePolyline(polylinePoints);
      // You can now use the distance and duration values for further processing.
      return {
        coordinates: decodedCoordinates,
      };
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getDistance = async (start: string, end: string) => {
  const apiKey = process.env.EXPO_PUBLIC_MAPS_KEY;

  const mode = "driving"; // Travel mode: driving, walking, transit, bicycling

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${start}&destinations=${end}&mode=${mode}&key=${apiKey}`;
  const cords = `https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&mode=${mode}&key=${apiKey}`;
  const { data } = await axios.get(url);
  const { data: coords } = await axios.get(cords);

  try {
    if (data.status === "OK") {
      const distanceText = data.rows[0].elements[0].distance.text; // Distance in human-readable text
      const durationText = data.rows[0].elements[0].duration.text; // Duration in human-readable text
      const distanceValue = data.rows[0].elements[0].distance.value; // Distance in meters
      const durationValue = data.rows[0].elements[0].duration.value; // Duration in seconds
      const base = 7;
      const dbc = (distanceValue / 1000) * 5;
      const tbc = (durationValue / (60 * 60)) * 1.5;
      const charges = 2;
      const cost = dbc + tbc + charges;

      const routes = coords.routes;
      if (routes && routes.length) {
        const route = routes[0];
        const polylinePoints = route.overview_polyline.points;

        // Decode the polyline to get an array of latitude and longitude coordinates
        const decodedCoordinates = decodePolyline(polylinePoints);
        // You can now use the distance and duration values for further processing.
        return {
          distance: distanceText,
          duration: durationText,
          start: start,
          end: end,
          coordinates: decodedCoordinates,
          cost: cost < base ? base : cost > 100 ? 70 : cost.toFixed(2),
        };
      }
    } else {
      console.error("Error:", data.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

//GET Polyline
const decodePolyline = (polyline: string) => {
  const points = [];
  let index = 0;
  const len = polyline.length;
  let lat = 0;
  let lng = 0;

  while (index < len) {
    let b;
    let shift = 0;
    let result = 0;
    do {
      b = polyline.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);

    const dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = polyline.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);

    const dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    points.push({
      latitude: lat / 1e5,
      longitude: lng / 1e5,
    });
  }
  return points;
};
