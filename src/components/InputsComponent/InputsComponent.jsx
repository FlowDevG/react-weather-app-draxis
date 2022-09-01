import React, { useState } from 'react'
import {MdLocationPin} from 'react-icons/md';
import {FaSearch} from 'react-icons/fa';
import './InputsComponent.css';

function InputsComponent ({setQuery, units, setUnits}) {

  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== '') setQuery({q: city})
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({lat,lon});
      })
    }
  }

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if (units !== selectedUnit) setUnits(selectedUnit);
  }

  return (
    <div className='inputs_wrapper'>
      <div className='inputs_wrapper_container'>
        <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder="search for a city..." className='inputs_wrapper_input'/>
        <MdLocationPin size={35} onClick={handleLocationClick} className="inputs_location_icons" />
        <FaSearch size={30} onClick={handleSearchClick} className="inputs_location_icons"/>
        <div className="inputs_transform_units">
          <button name='metric' onClick={handleUnitsChange}>°C</button>
          <p> | </p>
          <button name='imperial' onClick={handleUnitsChange}>°F</button>
        </div>
      </div>
    </div>
  )
}

export default InputsComponent