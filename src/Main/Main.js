import React, { useState, useEffect } from 'react';
import './Main.css';

const Main = () => {
    const[currentCity, setCurrentCity] = useState();
    
    const getApiData = async () => {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Salta&appid=1bb7ba42770051d1333e1ffe82d9d9f9"
        ).then((response) => response.json());
        setCurrentCity(response);
    };

    useEffect(() => {
        getApiData();
      }, []);

    console.log(currentCity)
    return (
    <div>
        <div className='temperatureContainer'>
            <p className='temperatureContainerText'>La temperatura actual en la ciudad de {currentCity.name} es de {parseFloat(currentCity.main.temp - 273.15).toFixed(2)}°</p>
        </div>
    </div>
  )
}

export default Main