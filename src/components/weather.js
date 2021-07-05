import React from 'react'

const Weather = props => (
  <div>
    {props.cod === 200 &&
      <div id="weather">
        <div><p>City</p><p>{props.city}, {props.country}</p></div>
        <div><p>Temperature</p><p>{props.temp}°C</p></div>
        <div><p>Pressure</p><p>{props.pressure} hPa</p></div>
      </div>
    }
    <p id="error">{props.error}</p>
  </div>
)

export default Weather