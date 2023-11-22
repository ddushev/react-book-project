import { useEffect, useState } from "react";
import { getLocationForecast, getLocationKey } from "../../../services/weatherRequests";

export const WeatherDetails = ({
    location
}) => {
    const [locationInfo, setLocationInfo] = useState({});
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const locationKey = await getLocationKey(location);
    //             const key = locationKey[0]?.Key;
    //             if (key) {
    //                 const forecastData = await getLocationForecast(key);
    //                 setLocationInfo(forecastData);
    //             }
    //         } catch (errors) {
    //             console.error(errors.message);
    //         }
    //     }
    //     fetchData();
    // }, [location]);

    return (
        <>
            <h5>5 Day Forecast</h5>
            <div className="d-flex mb-3">
                Expect rainy weather Saturday morning through Sunday morning
            </div>
            <div className="d-flex mb-3">
                <small className="border-end me-3 pe-3">
                    <i className="fas fa-dollar-sign text-primary me-2" />
                </small>
                <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-primary me-2" />
                </small>
                <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-primary me-2" />
                </small>
                <small className="border-end me-3 pe-3">
                    <i className="fa fa-male text-primary me-2" />
                </small>
                <small className="border-end me-3 pe-3">
                    <i className="fa fa-baby text-primary me-2" />
                </small>
            </div>
        </>

    );
}