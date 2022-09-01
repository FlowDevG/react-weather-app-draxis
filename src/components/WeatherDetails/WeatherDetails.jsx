import React from 'react'
import './WeatherDetails.css';
import {BsFillArrowUpCircleFill, BsFillArrowDownCircleFill, BsFillSunsetFill} from 'react-icons/bs'
import {FaTemperatureLow} from 'react-icons/fa'
import {GiWaterDrop} from 'react-icons/gi'
import {FiWind, FiRotateCcw} from 'react-icons/fi'
import {IoMdSunny} from 'react-icons/io'
import {BsFileArrowDown} from 'react-icons/bs';
import { formatToLocalTime, generateIConUrl } from '../../services/apiServices';


function WeatherDetails({weather: {details, icon, temp, temp_min, temp_max, deg, sunrise, sunset, speed, humidity, feels_like, pressure, timezone}})  {
  return (
    <>
    
      <div className="weather_status">
        <p>{details}</p>
      </div>
      
      <div className="weather_current_info">

        <div className='weather_current_details'>
          <div className="weather_current_details_items">
            <FaTemperatureLow size={20} className='weather_current_details_icons'/>
            Feels Like:
            <span className='weather_current_details_text'>{Math.round(feels_like)}°C</span>
          </div>
          <div className="weather_current_details_items">
            <GiWaterDrop size={20} className='weather_current_details_icons'/>
            Humidity:
            <span className='weather_current_details_text'>{humidity}%</span>
          </div>
          <div className="weather_current_details_items">
            <FiWind size={20} className='weather_current_details_icons'/>
            Wind:
            <span className='weather_current_details_text'>{speed}km/h</span>
          </div>
          <div className="weather_current_details_items">
            <BsFileArrowDown size={20} className='weather_current_details_icons'/>
            Pressure:
            <span className='weather_current_details_text'>{pressure} hPa</span>
          </div>
          <div className="weather_current_details_items">
            <FiRotateCcw size={20} className='weather_current_details_icons'/>
            Wind Deg:
            <span className='weather_current_details_text'>{deg}°</span>
          </div>
          
        </div>
        
        <p>{Math.round(temp)}°C</p>
        <img src={generateIConUrl(icon)} alt="current-weather-img" className='weather_current_img'/>
        
      </div>


      <div className='weather_current_day_overview'>
        <IoMdSunny size={20}/>
        <p>
          Rise:
          <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className='weather_current_day_overview_seperator'> | </p>
        <BsFillSunsetFill size={20}/>
        <p>
          Set:
          <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className='weather_current_day_overview_seperator'> | </p>
        <BsFillArrowUpCircleFill size={20}/>
        <p>
          High:
          <span>{Math.round(temp_max)}°</span>
        </p>
        <p className='weather_current_day_overview_seperator'> | </p>
        <BsFillArrowDownCircleFill size={20}/>
        <p>
          Low:
          <span>{Math.round(temp_min)}°</span>
        </p>
      </div>
    </>
  )
}

export default WeatherDetails