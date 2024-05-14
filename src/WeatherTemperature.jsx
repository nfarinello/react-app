import React from "react";


export default function WeatherTemperature(props) {
  return (
    <div>
    <span>
      <span className="temperature">
        {Math.round(props.celsius)}
      </span>
      <span className="unit">°C</span>
    </span>
    </div>
  )
}
