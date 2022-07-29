import React from 'react';
import { createContext, useState, useEffect} from 'react';

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [currentCity, setCurrentCity] = useState('');

    const getApiData = async (cityProp) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityProp}&appid=1bb7ba42770051d1333e1ffe82d9d9f9`
        ).then((response) => response.json());
        
        return response ? setCurrentCity(response) : "";
    };

    useEffect(() => {
        getApiData('Cordoba');
    }, []);

    return(
        <Context.Provider value={{setCurrentCity, currentCity, getApiData}}>
        {children}
        </Context.Provider>
    )
}