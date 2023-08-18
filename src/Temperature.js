import React from "react";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="d-flex weather-temperature">
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt="Clear"
            id="icon"
          />
          <strong id="temperature">80</strong>
          <span className="units">°F</span>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity">75</span>%
          </li>
          <li>
            Wind: <span id="wind">7</span> mph
          </li>
        </ul>
      </div>
    </div>
  );
}
