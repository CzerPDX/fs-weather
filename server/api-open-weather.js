/*
  fs-server.js 
  Top-level routing for backend data

  References:
  https://github.com/typicode/json-server/issues/928
*/

const express = require('express');
const axios = require('axios');
const router = express.Router();
module.exports = router;
router.use(express.json());

require('dotenv').config()


// Open Weather API information
// Set up a route for the API. The frontend will make calls to this route
// In the frontend we will fetch this user array and display all the users.
const KEY = process.env.OPEN_WEATHER_API_KEY;
const CURRENT_WEATHER =
  'https://api.openweathermap.org/data/2.5/weather?units=imperial';
const HOURLY_FORECAST =
  'https://pro.openweathermap.org/data/2.5/forecast/hourly?units=imperial&cnt=36';
const DAILY_FORECAST =
  'https://api.openweathermap.org/data/2.5/forecast/daily?units=imperial&cnt=14';
const AIR_QUALITY = 'http://api.openweathermap.org/data/2.5/air_pollution?';

// convert, parse and format time from the date (dt) value in the openWeather api response
const convertTime = (time, timezone) => {
  let date = new Date((time + timezone) * 1000);
  let hours = date.getUTCHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  minutes = minutes < 10 ? `0${String(minutes)}` : String(minutes);
  hours = hours % 12;
  hours = hours ? hours : 12;
  return { hour: String(hours), ampm: ampm, minutes: minutes };
};

//parses and returns day of the week from the date (dt) value in the openWeather api response
const getDayOfWeek = (time, timezone) => {
  let date = new Date((time + timezone) * 1000);
  let day = date.getDate();

  const dayName = [
    { name: 'Sunday', abbrv: 'Sun', dayOfMonth: day },
    { name: 'Monday', abbrv: 'Mon', dayOfMonth: day },
    { name: 'Tuesday', abbrv: 'Tue', dayOfMonth: day },
    { name: 'Wednesday', abbrv: 'Wed', dayOfMonth: day },
    { name: 'Thurday', abbrv: 'Thu', dayOfMonth: day },
    { name: 'Friday', abbrv: 'Fri', dayOfMonth: day },
    { name: 'Saturday', abbrv: 'Sat', dayOfMonth: day },
  ];
  return dayName[date.getDay()];
};

const getDayOfMonth = (time, timezone) => {
  const monthName = [
    { name: 'January', abbrv: 'Jan' },
    { name: 'February', abbrv: 'Feb' },
    { name: 'March', abbrv: 'Mar' },
    { name: 'April', abbrv: 'Apr' },
    { name: 'May', abbrv: 'May' },
    { name: 'June', abbrv: 'Jun' },
    { name: 'July', abbrv: 'Jul' },
    { name: 'August', abbrv: 'Aug' },
    { name: 'September', abbrv: 'Sep' },
    { name: 'October', abbrv: 'Oct' },
    { name: 'November', abbrv: 'Nov' },
    { name: 'December', abbrv: 'Dec' },
  ];
  let date = new Date((time + timezone) * 1000);
  return monthName[date.getMonth()];
};

router.get('/*', (req, res) => {
  let responseObject = null;
  let lat = req.query.lat;
  let lon = req.query.lon;

  // parameter check. lat and lon paramaters are required
  if (req.query.lat === undefined || req.query.lon === undefined) {
    res
      .status(400)
      .send({ message: 'Error! Paramaters lat and lon are required ' });
    res.end();
  }

  // Handle requests for /current-weather
  else if (req.url.split('?')[0] === '/current-weather') {
    axios
      .get(`${CURRENT_WEATHER}&lat=${lat}&lon=${lon}&appid=${KEY}`)
      .then((response) => {
        const timeZone = response.data.timezone;
        responseObject = {
          locationName: response.data.name,
          temperature: `${Math.round(response.data.main.temp)}`,
          shortDescription: response.data.weather[0].main,
          longDescription: response.data.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          iconCode: response.data.weather[0].icon,
          maxTemp: Math.round(response.data.main.temp_max),
          minTemp: Math.round(response.data.main.temp_min),
          feelsLike: Math.round(response.data.main.feels_like),
          sunrise: convertTime(response.data.sys.sunrise, timeZone),
          sunset: convertTime(response.data.sys.sunset, timeZone),
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
          cloudCover: response.data.clouds.all,
        };
        res.status(200).send(responseObject);
      })
      .catch((error) => {
        res.status(502).send({ message: error.message });
      });
    // Handle requests for /hourly-weather
  } else if (req.url.split('?')[0] === '/hourly-weather') {
    axios
      .get(`${HOURLY_FORECAST}&lat=${lat}&lon=${lon}&appid=${KEY}`)
      .then((response) => {
        const list = response.data.list;
        const timeZone = response.data.city.timezone;
        const name = response.data.city.name;

        responseObject = list.map((item) => {
          const time = convertTime(item.dt, timeZone);
          const day = getDayOfWeek(item.dt, timeZone);

          // {description : item.weather[0].main, descriptionLng : item.weather[0].description}
          // Can be added if we want those values for hourly forcast
          let obj = {
            time: time,
            temp: Math.round(item.main.temp),
            icon: item.weather[0].icon,
            day: day,
            description: item.weather[0].description,
            wind: Math.round(item.wind.speed),
            humidity: item.main.humidity,
            percipitation: item.pop * 100,
            feelsLike: Math.round(item.main.feels_like),
          };
          return obj;
        });
        responseObject = { list: responseObject, locationName: name };
        res.status(200).send(responseObject);
      })
      .catch((error) => {
        res.status(502).send({ message: error.message });
      });
    // Handle requests for /daily-weather
  } else if (req.url.split('?')[0] === '/daily-weather') {
    axios
      .get(`${DAILY_FORECAST}&lat=${lat}&lon=${lon}&appid=${KEY}`)
      .then((response) => {
        const list = response.data.list;
        const timeZone = response.data.city.timezone;
        const name = response.data.city.name;

        responseObject = list.map((item) => {
          const dayOfWeek = getDayOfWeek(item.dt, timeZone);
          const dayOfMonth = getDayOfMonth(item.dt, timeZone);
          const sunrise = convertTime(item.sunrise, timeZone);
          const sunset = convertTime(item.sunset, timeZone);
          let obj = {
            day: dayOfWeek,
            month: dayOfMonth,
            temperature: Math.round(item.temp.day),
            tempMax: Math.round(item.temp.max),
            tempMin: Math.round(item.temp.min),
            icon: item.weather[0].icon,
            shortDescription: item.weather[0].main,
            longDescription: item.weather[0].description,
            wind: Math.round(item.speed),
            humidity: item.humidity,
            percipitation: item.pop * 100,
            sunrise: sunrise,
            sunset: sunset,
          };
          return obj;
        });
        responseObject = { list: responseObject, locationName: name };
        res.status(200).send(responseObject);
      })
      .catch((error) => {
        res.status(502).send({ message: error.message });
      });
    // Handle requests for /api-air-quality
  } else if (req.url.split('?')[0] === '/api-air-quality') {
    axios
      .get(`${AIR_QUALITY}&lat=${lat}&lon=${lon}&appid=${KEY}`)
      .then((response) => {
        const list = response.data.list;
        let aqiValues = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

        responseObject = {
          aqiIndex: list[0].main.aqi,
          aqiDescription: aqiValues[list[0].main.aqi - 1],
        };
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(502).send({ message: 'Failed request to openweather API' });
      });
  }

  // Handle invalid requests
  else {
    console.error('Error! Response was empty');
    res.send('[]');
  }
});

