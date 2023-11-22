import { fahrenheitToCelsius } from "../../../../utils/convertFahrenheitToCelsius";
import { dateFormatter } from "../../../../utils/dateFormatter";

export const DailyWeatherCard = ({ index, dailyForecast }) => {
    return (
        <div className="d-flex mb-3">
            <small className="border-end me-3 pe-3">
                <i className="fas fa-calendar-day text-primary me-2" />
                {dateFormatter(dailyForecast?.Date)}
            </small>
            <small className="border-end me-3 pe-3">
                <i className="fas fa-temperature-low text-primary me-2" />
                {fahrenheitToCelsius(dailyForecast?.Temperature?.Minimum?.Value)} &deg;
            </small>
            <small className="border-end me-3 pe-3">
                <i className="fas fa-temperature-high text-primary me-2" />
                {fahrenheitToCelsius(dailyForecast?.Temperature?.Maximum?.Value)} &deg;
            </small>
            <small className="border-end me-3 pe-3">
                <i className="fas fa-info text-primary me-2" />
                {dailyForecast?.Day?.IconPhrase}
            </small>
            {dailyForecast?.Day?.HasPrecipitation &&
                <small className="border-end me-3 pe-3">
                    <i className="fas fa-cloud-rain text-primary me-2" />
                    {`${dailyForecast?.Day?.PrecipitationIntensity} ${dailyForecast?.Day?.PrecipitationType}`}
                </small>
            }
        </div>
    );
}