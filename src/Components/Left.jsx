import React from 'react'
import dayjs from 'dayjs'
import { useContextProvider } from '../Context/Context'


export default function Left() {
    const { state: { city, current } } = useContextProvider();
    const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (!current) return <div>Loading...</div>
    const weekdayindex = dayjs.unix(current.dt).day();
    const celsious = current.main.temp_max - 273.15;
    return (
        <>
            <div className="left">
                <div className="date">
                    <h2>{WEEKDAYS[weekdayindex]}</h2>
                    <span className='dateDay'>
                        {dayjs.unix(current.dt).format("DD MMM YYYY")}
                    </span>
                    <span className="locationName">
                        {city.city}-{city.admin_name}-{city.country}
                    </span>
                </div>
                <div className="weatherContainer">
                    <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}  alt="not" />
                    <h1 className="weatherTemp">{Math.round(celsious)}<sup>o</sup></h1>
                    <h2 className='weatherDesc'>{current.weather[0].main}</h2>
                </div>
            </div>
        </>
    )
}


