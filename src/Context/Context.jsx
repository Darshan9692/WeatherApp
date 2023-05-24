import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './Reducer';

const weatherApp = createContext();

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        city:  {
            "city": "Delhi", 
            "lat": "28.6100", 
            "lng": "77.2300", 
            "country": "India", 
            "iso2": "IN", 
            "admin_name": "Delhi", 
            "capital": "admin", 
            "population": "32226000", 
            "population_proper": "16753235"
          },
        current: '',
        daily: ''
    });
    return (
        <weatherApp.Provider value={{ state, dispatch }}>
            {children}
        </weatherApp.Provider>
    )
}

export default Provider;

export const useContextProvider = () =>{
    return useContext(weatherApp);
}