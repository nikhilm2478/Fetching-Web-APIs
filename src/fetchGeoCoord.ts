import { fetchJSON } from "../include/fetchJSON.js";
import { URL } from "url";

export interface GeoCoord {
  lat: number;
  lon: number;
}

/**
 * @author Karthik Shankar
 * @param query string to search for in API
 * @returns Promise that fufills with the first geo-coordinate result, or reject
 */
export function fetchGeoCoord(query: string): Promise<GeoCoord> {
  // TODO

  // TODO: remove linter warnings

  // build the URL string
  const searchURL = new URL("https://geocode.maps.co/search");
  searchURL.searchParams.append("q", query);

  return fetchJSON(searchURL.toString()).then((v: Array<any>) => {
    // if the API gives no results, reject with the error message
    if (v.length === 0) {
      return Promise.reject("No result found for query");
    }
    // get the locations that have both a lattitude and longitude field
    const locations = v.filter((obj: object) => "lat" in obj && "lon" in obj);
    // get the lattitude and longitude values from the first object in the filtered array
    const lattitude = Number.parseFloat(locations[0].lat);
    const longitude = Number.parseFloat(locations[0].lon);

    // return a promise that resolves with the lattitude and longitude values
    return Promise.resolve({ lat: lattitude, lon: longitude });
  });
}
