import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { generateIConUrl } from '../../services/apiServices';
import './ForecastComponent.css';

const ForecastComponent = ({title, items}) => {

  return (
    <>
      <div className='forecast_wrapper_title'>
        <p>{title}</p>
      </div>
      <hr className='forecast_wrapper_seperator'/>
      <div className='forecast_wrapper_details'>

        {items.map(item => (
          
              <div className='forecast_wrapper_details_item'>
                <p>
                  {item.title}
                </p>
                <p>
                  Feels Like: {Math.round(item.feels_like)}°C
                </p>
                <p>
                  Wind: {item.wind_speed} km/h
                </p>
                <p>
                  Pressure: {item.pressure} hPa
                </p>
                <p>
                  Humidity: {item.humidity}%
                </p>
                <div className='forecast_container_grid_bottom_current'>
                  <img src={generateIConUrl(item.icon)} alt="forecast-weather-icon" />
                  <span>{Math.round(item.temp)}°C</span>
                </div>

                <div className='forecast_container_grid_bottom_min_max'>
                <span>
                    <BsFillArrowUpCircleFill size={20} className='forecast_grid_bottom_icons'/>
                    {Math.round(item.temp_max)}°C
                </span>
                <span>
                    <BsFillArrowDownCircleFill size={20} className='forecast_grid_bottom_icons'/>
                    {Math.round(item.temp_min)}°C
                </span>
                </div>

              </div>
        
        ))}
        
      </div>
    </>
  )
}

export default ForecastComponent