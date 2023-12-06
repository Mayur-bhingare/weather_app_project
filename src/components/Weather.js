import "../app.css";
import BasicWeatherDetails from "./BasicWeatherDetails";
import Input from "./Input";
import MainWeatherDetails from "./MainWeatherDetails";
const Weather = () => {
  return (
    <>
      <div className="bg_Img">
        <div className="inputBox row ">
          <Input />
          <BasicWeatherDetails />
          <MainWeatherDetails />
        </div>
      </div>
    </>
  );
};

export default Weather;
