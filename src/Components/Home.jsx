import React from 'react'
import City from './City'
import WeekInfo from './WeekInfo'
import Humidity from './Humidity'
import Left from './Left'

export default function Home() {
  return (
    <div className="home">
        <div className="weather">
            <Left/>
            <div className="right">
                <City/>
                <WeekInfo/>
                <Humidity/>
            </div>
        </div>
    </div>
  )
}


