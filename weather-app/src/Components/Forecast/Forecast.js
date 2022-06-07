import React, { useState } from "react";
import Conditions from "./Conditions";
import classes from "./Forecast.module.css";

function Forecast() {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");
  const [responseObj, setResponseObj] = useState({});

  const uriEncodedCity = encodeURIComponent(city);
  function getForecast(e) {
    e.preventDefault();
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "ce94f25e17msh91eb75dd0156266p1cee75jsn40349c30a2f4",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <h2>Find the Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter the name of your city"
          maxLength="50"
          className={classes.textInput}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="units"
            className={classes.Radio}
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label>
          <input
            type="radio"
            name="units"
            className={classes.Radio}
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>

        <button type="submit" className={classes.Button}>
          Get Forecast
        </button>
      </form>
      <div>
        <Conditions responseObj={responseObj} />
      </div>
    </div>
  );
}

export default Forecast;
