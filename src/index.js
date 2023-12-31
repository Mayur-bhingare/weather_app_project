import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WeatherContextProvider } from "./context/weather.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </>
);
