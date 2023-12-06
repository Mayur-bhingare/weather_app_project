import { useWeatherContext } from "../context/weather.context";

let BasicWeatherDetails = () => {
  let { weatherDetails } = useWeatherContext();
  return (
    <>
      {weatherDetails === null ? null : (
        <>
          <div className="col-12  d-flex justify-content-center mt-1">
            <h1>
              {weatherDetails.name}({weatherDetails.sys.country})
            </h1>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div>
              <img
                src={`http://openweathermap.org/img/w/${weatherDetails.weather[0].icon}.png`}
              ></img>
            </div>
            <div className="mt-3 ">
              <h1>{weatherDetails.weather[0].main}</h1>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <h1 className="Temp">
              {weatherDetails.main.feels_like}
              <sup> o</sup>c
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default BasicWeatherDetails;
