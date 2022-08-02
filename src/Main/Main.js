import React from 'react';
import './Main.css';
import { useContext } from 'react';

import { Context } from '../Context/Context';

const Main = () => {
  const { currentCity } = useContext(Context);
  console.log(currentCity);

  // const getDifference = () => {
  //   let hours = [1, 2, 3, 3.5, 4, 4.5, 5, 5.5, 5.75, 6, 6.5, 7, 8, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.75, 13, 14, -1, -2, -3, -3.5, -4, -4.5, -5, -6, -7, -8, -9, -9.5, -10, -11, -12]
  //   let timestamp = currentCity.timezone;

  //   for(let hour of hours){
  //     if (timestamp / hour === 3600){
  //       return hour
  //     } 
  //   }
  // }

  // console.log(getDifference())
  
  // if (currentCity && currentCity.cod === 200){
  //   let unix_timestamp = currentCity.sys.sunset
  //   let date = new Date(unix_timestamp * 1000).toISOString();
  //   let hour = date.split("T");
  //   let onlyHour = hour[1].split(":")
  //   if(onlyHour[0] < 1){
  //     onlyHour[0] = 24;
  //   }

  //   const getSunsetTime = () => {
  //     let sunsetTime;
  //     if(onlyHour[0] < 1){
  //       sunsetTime = parseInt(onlyHour[0])+getDifference()+ 23 +":"+parseInt(onlyHour[1])
  //     } else {
  //       sunsetTime = parseInt(onlyHour[0])+getDifference()+":"+parseInt(onlyHour[1])
  //     }
  //     return sunsetTime;
  //   }

  //   console.log(getSunsetTime())
  // }

    return (
    <div className='main'>
        <div className='temperatureContainer'>
            {currentCity && currentCity.cod === 200 ? <div className='degreesContainer'>
              <img className='img' src={`/weatherIcons/${currentCity.weather[0].icon}.png`} alt={currentCity.weather[0].description}></img>
              <p className='weatherDescription'>{currentCity.weather[0].description}</p>
              <p className='bigNumbers'>{parseFloat(currentCity.main.temp - 273.15).toFixed(1)}°</p>
              <p className='cityName'>{currentCity.name}, {currentCity.sys.country}</p>
              <p className='clouds'>Clouds: {currentCity.clouds.all}%</p>
              <p className='feelsLike'>Feels like: {parseFloat(currentCity.main.feels_like - 273.15).toFixed(1)}°</p>
              <p className='humidity'><img className='icon' alt='humidity icon' src='/weatherIcons/humidity.svg'></img>Humidity: {currentCity.main.humidity}%</p>
              <p className='wind'><img className='icon' alt='wind icon' src='/weatherIcons/wind.svg'></img>Wind: {currentCity.wind.speed} m/s</p>
              <p className='pressure'><img className='icon' alt='pressure icon' src='/weatherIcons/pressure.svg'></img>Pressure: {currentCity.main.pressure} hPa</p>
            </div> : 
            <div className='errorPageNotFound'> 
              <p className='errorMessage'>City not found</p>
            </div>}
        </div>
    </div>
  )
}

export default Main