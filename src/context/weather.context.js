import { createContext, useContext, useState } from "react";

let WeatherContext = createContext({});

export let WeatherContextProvider = (props) => {
  let [inputText, setInputText] = useState("");
  let [weatherDetails, setWeatherDetails] = useState(null);

  let changeInput = (event) => {
    if (event.target.value === "") {
      setWeatherDetails(null);
    }
    setInputText(event.target.value);
  };

  let getData = async (event) => {
    if (event.keyCode === 13 && inputText !== "") {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=7edb9ca2caa828fa80588c511118e020&units=metric`;

      let response = await fetch(url, { method: "GET" });
      console.log(response);
      let data = await response.json();

      if (Number(data.cod) === 200) {
        setWeatherDetails(data);
      } else {
        alert("Result not found");
        setWeatherDetails(null);
      }
    }
  };

  let values = {
    inputText,
    changeInput,
    getData,
    weatherDetails,
  };
  return (
    <WeatherContext.Provider value={values}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};
