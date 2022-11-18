const express = require("express");
const axios = require("axios");
const app = express();
const port = 5001;
const KEY = "1e859cb9e9c8898c11b003c46405b5d2";
const CURRENT_WEATHER =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial";
const HOURLY_FORECAST =
  "https://pro.openweathermap.org/data/2.5/forecast/hourly?units=imperial&cnt=12";
const DAILY_FORECAST =
  "https://api.openweathermap.org/data/2.5/forecast/daily?units=imperial&cnt=10";
const AIR_QUALITY = "http://api.openweathermap.org/data/2.5/air_pollution?";

// Set up a route for the API. The frontend will make calls to this route
// In the frontend we will fetch this user array and display all the users.

// convert, parse and format time from the date (dt) value in the openWeather api response
const convertTime = (time, timezone) => {
  let date = new Date((time + timezone) * 1000);
  let hours = date.getUTCHours();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  return { hour: hours, ampm: ampm };
};

//parses and returns day of the week from the date (dt) value in the openWeather api response
const getDayOfWeek = (time, timezone) => {
  const dayName = [
    { name: "Sunday", abbrv: "Sun" },
    { name: "Monday", abbrv: "Mon" },
    { name: "Tuesday", abbrv: "Tue" },
    { name: "Wednesday", abbrv: "Wed" },
    { name: "Thurday", abbrv: "Thu" },
    { name: "Friday", abbrv: "Fri" },
    { name: "Saturday", abbrv: "Sat" },
  ];
  let date = new Date((time + timezone) * 1000);
  console.log(date.getDay());
  return dayName[date.getDay()];
};

app.get("/api*", (req, res) => {
  let responseObject = null;
  let lat = req.query.lat;
  let lon = req.query.lon;

  // parameter check. lat and lng paramaters are required
  if (req.query.lat === undefined || req.query.lon === undefined) {
    res
      .status(400)
      .send({ message: "Error! Paramaters lat and lng are required " });
    res.end();
  }

  // Handle requests for /api-current-weather
  else if (req.url.split("?")[0] === "/api-current-weather") {
    axios
      .get(`${CURRENT_WEATHER}&lat=${lat}&lon=${lon}&appid=${KEY}`)
      .then((response) => {
        responseObject = {
          locationName: response.data.name,
          temp: Math.round(response.data.main.temp),
          shortDescription: response.data.weather[0].main,
          longDescription: response.data.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          // maxTemp: Math.round(response.data.main.temp_max),
          // minTemp: Math.round(response.data.main.temp_min),
          // feelsLike: response.data.main.feels_like,
        };
        console.log(responseObject);
        res.status(200).send(responseObject);
      })
      .catch((error) => {
        res.status(502).send({ message: error.message });
        console.log({ message: error.message });
      });
  } else if (req.url.split("?")[0] === "/api-hourly-weather") {
    axios
      .get(`${HOURLY_FORECAST}&lat=${lat}&lon=${lon}&appid=${KEY}`)
      .then((response) => {
        const list = response.data.list;
        const timeZone = response.data.city.timezone;

        responseObject = list.map((item) => {
          const time = convertTime(item.dt, timeZone);

          // {description : item.weather[0].main, descriptionLng : item.weather[0].description}
          // Can be added if we want those values for hourly forcast
          let obj = {
            time: time,
            temp: Math.round(item.main.temp),
            icon: item.weather[0].icon,
          };
          return obj;
        });

        console.log(responseObject);
        res.status(200).send(responseObject);
      })
      .catch((error) => {
        res.status(502).send({ message: error.message });
        console.log(error);
      });
  } else if (req.url.split("?")[0] === "/api-daily-weather") {
    axios
      .get(`${DAILY_FORECAST}&lat=${lat}&lon=${lon}&appid=${KEY}`)
      .then((response) => {
        const list = response.data.list;
        const timeZone = response.data.city.timezone;

        responseObject = list.map((item) => {
          const dayOfWeek = getDayOfWeek(item.dt, timeZone);
          let obj = {
            day: dayOfWeek,
            temp: Math.round(item.temp.day),
            tempMax: Math.round(item.temp.max),
            tempMin: Math.round(item.temp.min),
            icon: item.weather[0].icon,
            shortDescription: item.weather[0].main,
            longDescription: item.weather[0].description,
          };
          return obj;
        });

        console.log(responseObject);
        res.status(200).send(responseObject);
      })
      .catch((error) => {
        res.status(502).send({ message: error.message });
        console.log(error);
      });
  } else if (req.url.split("?")[0] === "/api-air-quality") {
    console.log("***air quality");
    axios
      .get(`${AIR_QUALITY}&lat=${lat}&lon=${lon}&appid=${KEY}`)
      .then((response) => {
        const list = response.data.list;
        let aqiValues = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];

        responseObject = {
          aqiIndex: list[0].main.aqi,
          aqiDescription: aqiValues[list[0].main.aqi - 1],
        };
        console.log(responseObject);
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(502).send({ message: "Failed request to openweather API" });
        console.log(error);
      });
    // We will let the front-end parse the json data since it seems like that's how the openweather api is
  }

  // Handle invalid requests
  else {
    console.error("Error! Response was empty");
    res.send("[]");
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
