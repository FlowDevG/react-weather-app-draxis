import './App.css';
import TimeLocation from './components/TimeLocation/TimeLocation';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import ForecastComponent from './components/ForecastComponent/ForecastComponent';
import getFormattedWeatherData from './services/apiServices';
import { useEffect, useState } from 'react';
import LineChartComponent from './components/LineChartComponent/LineChartComponent';
import apiServices from './services/apiServices';

function App() {

  const [query, setQuery] = useState({q: 'thessaloniki'});
  const units = ('metric');
  const [weather, setWeather] = useState(null);


  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units}).then((data) => {
        setWeather(data);
      });
    }
  
    fetchWeather();
  }, [query, units]);

  
  const formatBackground = () => {
    if (!weather) return "cold_container";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "cold_container";

    return "hot_container";
  };

  apiServices();


  return (
    <div className={`container ${formatBackground()}`}>
    {weather && (
      <div>
        <TimeLocation weather={weather}/>
        <WeatherDetails weather={weather}/>
        <LineChartComponent items={weather.daily}/>
        <ForecastComponent title='Daily Forecast' items={weather.daily}/>
      </div>
    )}  
    
    </div>
  );
}

export default App;
