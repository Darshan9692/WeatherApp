import React from 'react';
import dayjs from 'dayjs';


export default function Card({item,className,onClick}) {

    const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const weekdayindex = dayjs.unix(item.dt).day();
    // console.log(weekdayindex);
    const celsious = item.main.temp_max - 273.15;


  return (
    <>
      <li key={item.visibility} className={className} onClick={onClick}>
        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className='day-icon' alt="darshan" />
        <span className='day-name'>{WEEKDAYS[weekdayindex].slice(0,3)}</span>
        <span className='day-temp'>{Math.round(celsious)}<sup>o</sup>C</span>
      </li>
    </>
  )
}

