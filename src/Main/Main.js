import React from 'react';
import './Main.css';
import { useContext } from 'react';

import { Context } from '../Context/Context';

const Main = () => {
  const { currentCity } = useContext(Context);
  console.log(currentCity);
    return (
    <div className='main'>
        <div className='temperatureContainer'>
            {currentCity && currentCity.cod === 200 ? <div className='degreesContainer'>
              <p className='bigNumbers'>{parseFloat(currentCity.main.temp - 273.15).toFixed(1)}°</p>
              <p className='cityName'>{currentCity.name}, {currentCity.sys.country}</p>
              <p className='feelsLike'>Sensación térmica: {parseFloat(currentCity.main.feels_like - 273.15).toFixed(1)}°</p>
            </div> : 
            <div className='errorPageNotFound'> 
              <p className='errorMessage'>City not found</p>
            </div>}
        </div>
    </div>
  )
}

export default Main