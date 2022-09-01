import React from 'react'
import { formatToLocalTime } from '../../services/apiServices';
import './TimeLocation.css';

const TimeLocation = ({weather: {dt, timezone, name, country}}) => {
  return (
    <>
    <div className='time_container'>
        <div className='time_wrapper'>
          <p>
            {formatToLocalTime(dt, timezone)}
          </p>
        </div>

        <div className="location_wrapper">
          <p>{`${name}, ${country}`}</p>        
        </div>
    </div>

    </>
  )
}

export default TimeLocation