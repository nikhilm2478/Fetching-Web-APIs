import { fetchJSON } from "../include/fetchJSON.js";
import { URL } from "url";

interface AverageTemperatureResults {
  totalAverage: number;
  [key: string]: number;
}

export function fetchUniversityWeather(
  universityQuery: string,
  transformName?: (s: string) => string
): Promise<AverageTemperatureResults> {
  // TODO

  return new Promise(res => res({ totalAverage: NaN }));
}

export function fetchUMassWeather(): Promise<AverageTemperatureResults> {
  // TODO
  const searchURL: URL = new URL(
    "http://universities.hipolabs.com/search?name=name+query+goes+here"
  );
  const searchParams = searchURL.searchParams;
  

  searchParams.set("name", "University Of Massachussetts");
  return new Promise(res => res({ totalAverage: NaN }));
}

export function fetchUCalWeather(): Promise<AverageTemperatureResults> {
  // TODO
  return new Promise(res => res({ totalAverage: NaN }));
}
