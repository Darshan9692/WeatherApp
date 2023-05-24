import React, { useEffect } from 'react'
import cities from '../Data/in.json';
import { useContextProvider } from '../Context/Context';
import axios from 'axios';

export default function City() {
  // console.log(useContextProvider());
  const { state: { city }, dispatch } = useContextProvider();
  // console.log(city);

  const handleChange = (e) => {
    const selectedCity = cities.filter((city) => {
      return (city.city).includes(e.target.value)
    })[0];
    // console.log(selectedCity);
    dispatch({ type: 'SET_CITY', selectedCity })
  }

  const API_KEY = '6cb89ac01a5223d70313c2cdecea25c7';
  // let currentCity = city ? city.city : '';
  let lat = city && city.lat ? city.lat : '';
  let long = city && city.lng ? city.lng : '';
  // let exclude = 'hourly,daily';
  let cnt = 40;
  // const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude=${exclude}&units=meric&lang=tr&APPID=${API_KEY}`;
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&cnt=${cnt}&appid=${API_KEY}`

  const fetchData = () => {
    axios(URL).then((data) => {
      let daily = data.data.list;
      dispatch({type:'SET_DAILY',daily});
      // console.log(data);
    })
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [city])

  return (
    <div className="city">
      <select className="city_list" defaultValue={city} onChange={handleChange}>
        {
          cities && cities.length > 0 && cities.map((city) => {
            return (
              <option key={`${city.population}${city.lat}`} value={city.city}>{city.city} - {city.admin_name}</option>
            );
          })
        }
      </select>
    </div>
  )
}


