import { DateTime } from "luxon";

const API_KEY = "11b0499bd13ab56063de7565a440eb97";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed, deg },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
    deg,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, current } = data;
  daily = daily.slice(1, 8).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      feels_like: d.feels_like.day,
      wind_speed: d.wind_speed,
      wind_deg: d.wind_deg,
      humidity: d.humidity,
      pressure: d.pressure,
      temp_min: d.temp.min,
      temp_max: d.temp.max,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, current };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon, temp, feels_like, humidity, pressure, wind_speed } =
    formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    current: { temp, feels_like, humidity, pressure, wind_speed },
    exclude: "minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const generateIConUrl = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, generateIConUrl };
