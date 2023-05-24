import React from 'react'
import { useContextProvider } from '../Context/Context';


export default function Humidity() {
  const { state: { current, city } } = useContextProvider();
  console.log(current);

  return (
    <>
      {current ?
        <div className="humidity">
          <div className="humidityData">
            <div className="title">Time</div>
            <div className="value">{current.dt_txt.slice(11, 20)}</div>
          </div>
          <div className="humidityData">
            <div className="title">Humidiy</div>
            <div className="value">{current.main.humidity}%</div>
          </div>
          <div className="humidityData">
            <div className="title">Wind</div>
            <div className="value">{Math.round(current.wind.speed)}km/h</div>
          </div>
          <div className="humidityData">
            <div className="title">{city.city}-{city.admin_name} - Population</div>
            <div className="value">{city.population}</div>
          </div>
          <div className="humidityData">
            <div className="title">Country</div>
            <div className="value">{city.country}</div>
          </div>
        </div>
        : ''
      }
    </>
  )
}


