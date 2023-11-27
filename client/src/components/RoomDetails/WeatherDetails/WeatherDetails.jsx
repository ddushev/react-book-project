import './WeatherDetails.css';

import { useEffect, useState } from "react";

import { getLocationForecast, getLocationKey } from "../../../services/weatherRequests";

import { DailyWeatherCard } from "./DailyWeatherCard/DailyWeatherCard";

export const WeatherDetails = ({
    location
}) => {
    const [locationInfo, setLocationInfo] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const locationKey = await getLocationKey(location);
                const key = locationKey[0]?.Key;
                if (key) {
                    const forecastData = await getLocationForecast(key);
                    setLocationInfo(forecastData);
                }
            } catch (errors) {
                console.error(errors.message);
            }
        }
        // fetchData();
        //If API calls are exhausted
        setLocationInfo({
            "Headline": {
                "EffectiveDate": "2023-11-25T07:00:00+02:00",
                "EffectiveEpochDate": 1700888400,
                "Severity": 2,
                "Text": "Expect rainy weather Saturday morning through Sunday morning",
                "Category": "rain",
                "EndDate": "2023-11-26T13:00:00+02:00",
                "EndEpochDate": 1700996400,
                "MobileLink": "http://www.accuweather.com/en/bg/burgas/47424/daily-weather-forecast/47424?lang=en-us",
                "Link": "http://www.accuweather.com/en/bg/burgas/47424/daily-weather-forecast/47424?lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2023-11-22T07:00:00+02:00",
                    "EpochDate": 1700629200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 45.0,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 61.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Heavy"
                    },
                    "Night": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/bg/burgas/47424/daily-weather-forecast/47424?day=1&lang=en-us",
                    "Link": "http://www.accuweather.com/en/bg/burgas/47424/daily-weather-forecast/47424?day=1&lang=en-us"
                },
                {
                    "Date": "2023-11-23T07:00:00+02:00",
                    "EpochDate": 1700715600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 43.0,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 49.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/bg/burgas/47424/daily-weather-forecast/47424?day=2&lang=en-us",
                    "Link": "http://www.accuweather.com/en/bg/burgas/47424/daily-weather-forecast/47424?day=2&lang=en-us"
                },
                {
                    "Date": "2023-11-24T07:00:00+02:00",
                    "EpochDate": 1700802000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 50.0,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 61.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 3,
                        "IconPhrase": "Partly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 38,
                        "IconPhrase": "Mostly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/bg/burgas/47424/daily-weather-forecast/47424?day=3&lang=en-us",
                    "Link": "http://www.accuweather.com/en/bg/burgas/47424/daily-weather-forecast/47424?day=3&lang=en-us"
                },
                {
                    "Date": "2023-11-25T07:00:00+02:00",
                    "EpochDate": 1700888400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 40.0,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 59.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Heavy"
                    },
                    "Night": {
                        "Icon": 18,
                        "IconPhrase": "Rain",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/bg/burgas/47424/daily-weather-forecast/47424?day=4&lang=en-us",
                    "Link": "http://www.accuweather.com/en/bg/burgas/47424/daily-weather-forecast/47424?day=4&lang=en-us"
                },
                {
                    "Date": "2023-11-26T07:00:00+02:00",
                    "EpochDate": 1700974800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 30.0,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 46.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 14,
                        "IconPhrase": "Partly sunny w/ showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 33,
                        "IconPhrase": "Clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/bg/burgas/47424/daily-weather-forecast/47424?day=5&lang=en-us",
                    "Link": "http://www.accuweather.com/en/bg/burgas/47424/daily-weather-forecast/47424?day=5&lang=en-us"
                }
            ]
        });
        // setLocationInfo({});
    }, [location]);

    return (
        locationInfo?.hasOwnProperty('Headline') ?
            <div className="weather-container">
                <h5>5 Day Forecast</h5>
                <div className="mb-3">
                    {locationInfo?.Headline?.Text}
                </div>
                {locationInfo?.DailyForecasts?.map(dailyForecast => <DailyWeatherCard
                    key={dailyForecast.Date}
                    dailyForecast={dailyForecast} />)}
            </div> :
            <div className="no-weather-container">
                <h5>Unfortunatelly there is no forecast for the selected location.</h5>
                <i className="far fa-frown"></i>
            </div>

    );
}