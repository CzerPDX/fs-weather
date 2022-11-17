const express = require("express");
const axios = require("axios");
const app = express();
const port = 5001;
const KEY = "1e859cb9e9c8898c11b003c46405b5d2";

// Set up a route for the API. The frontend will make calls to this route
// In the frontend we will fetch this user array and display all the users.
app.get("/api*", (req, res) => {
  // Handle requests for /api-current-weather
  if (req.url.split("?")[0] === "/api-current-weather") {
    //
    let lat = req.query.lat;
    let lng = req.query.lng;
    let responseObject = null;
    console.log("***current", req.query);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${KEY}`
      )
      .then((response) => {
        console.log(response.data);
        res.status(200).send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // We will let the front-end parse the json data since it seems like that's how the openweather api is
  } else if (req.url.split("?")[0] === "/api-hourly-weather") {
    //
    let lat = req.query.lat;
    let lng = req.query.lng;
    let responseObject = null;
    console.log("***hourly");
    axios
      .get(
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lng}&appid=${KEY}&cnt=12`
      )
      .then((response) => {
        console.log(response.data);
        //res.status(200).send(response.data);
        res.end;
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (req.url.split("?")[0] === "/api-forecast-weather") {
    let lat = req.query.lat;
    let lng = req.query.lng;
    let responseObject = null;
    console.log("***forecast");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lng}&appid=${KEY}&cnt=7`
      )
      .then((response) => {
        console.log(response.data);
        //res.status(200).send(response.data);
        res.end;
      })
      .catch((error) => {
        console.log(error);
      });
    // We will let the front-end parse the json data since it seems like that's how the openweather api is
  } else if (req.url.split("?")[0] === "/api-air-quality") {
    let lat = req.query.lat;
    let lng = req.query.lng;
    let responseObject = null;
    console.log("***air quality");
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${KEY}`
      )
      .then((response) => {
        console.log(response.data);
        //res.status(200).send(response.data);
        res.end;
      })
      .catch((error) => {
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
