import { useWeatherContext } from "../context/weather.context";

let MainWeatherDetails = () => {
  let { weatherDetails } = useWeatherContext();
  return (
    <>
      {weatherDetails === null ? null : (
        <div className="weather-details">
          <div className="Box">
            <p>Humidity</p>
            <h1>{weatherDetails.main.humidity} %</h1>
          </div>

          <div className="Box">
            <p>Wind</p>
            <h1>{weatherDetails.wind.speed} KM/H</h1>
          </div>

          <div className="Box">
            <p>feels Like</p>
            <h1>
              {weatherDetails.main.feels_like} <sup> o</sup>c
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default MainWeatherDetails;
