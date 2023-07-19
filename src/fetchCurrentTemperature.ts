import { fetchJSON } from "../include/fetchJSON.js";
import { GeoCoord } from "./fetchGeoCoord.js";

interface TemperatureReading {
  time: string[];
  temperature_2m: number[];
}

/**
 * @author Nikhil Mukherjee
 * @param query string to search for in API
 * @returns Promise that fufills with the first geo-coordinate result, or reject
 */
export function fetchCurrentTemperature(coords: GeoCoord): Promise<TemperatureReading> {
  // TODO
  const searchURL: URL = new URL(
    "https://api.open-meteo.com/v1/forecast?latitude=40&longitude=40&hourly=temperature_2m&temperature_unit=fahrenheit"
  );
  const searchParams = searchURL.searchParams;

  searchParams.set("latitude", coords.lat.toString());
  searchParams.set("longitude", coords.lon.toString());
  searchParams.set("hourly", "temperature_2m");
  searchParams.set("temperature_unit", "fahrenheit");

  return fetchJSON(searchURL.toString()).then((v: any) => {
    const time1 = v.hourly.time;

    const temp_2m = v.hourly.temperature_2m;

    const ret: TemperatureReading = { time: time1, temperature_2m: temp_2m };

    return Promise.resolve(ret);
  });

  //return new Promise(res => res({ time: [], temperature_2m: [] }));
}
