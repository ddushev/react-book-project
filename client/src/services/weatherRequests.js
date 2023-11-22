import * as api from './weatherApi';
import { WEATHER_URL, WEATHER_API_KEY } from "../utils/constants";

export async function getLocationKey(location) {
    return api.get(`${WEATHER_URL}/locations/v1/cities/search?apikey=${WEATHER_API_KEY}&q=${location}`);
}

export async function getLocationForecast(locationKey) {
    return api.get(`${WEATHER_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${WEATHER_API_KEY}`);
}