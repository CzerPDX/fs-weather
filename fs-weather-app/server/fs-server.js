/*

  References:
  https://bobbyhadz.com/blog/javascript-typeerror-response-json-is-not-a-function
  https://maximorlov.com/send-a-file-with-axios-in-nodejs/
  https://maximorlov.com/send-a-file-with-axios-in-nodejs/
*/

const express = require('express')
const app = express()
const port = 5001




const axios = require('axios');
const FormData = require('form-data');
















// Creates a json object with response data for the weather
const currentWeather_handler = async (latitude, longitude) => {
  // Later we can call this for a file for security!
  const apiKey = 'a71b03145dabd9b781e709b6786f5ccd'

  // API call to openweather to get current weather results
  const url = `https://pro.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
  // console.log(`API REQUEST URL: ${url}`);
  const weatherData = await fetch(url)
  .then((response) => {
    try {
      return (response.json());
    }
    catch {
      throw (`Error! Response from API: ${response.status}`);
    }
  })
  .then((jsonData) => {
    try {
      // console.log(`Data from server: ${JSON.stringify(jsonData)}`);
      const responseObject = {
        locationName: jsonData.name,
        temperature: `${Math.round(jsonData.main.temp)}${'\u00b0'}F`,
        shortDescription: jsonData.weather['0'].main,
        longDescription: jsonData.weather['0'].description,
        icon: `http://openweathermap.org/img/wn/${jsonData.weather['0'].icon}@2x.png`,
      }
      return(responseObject)
    }
    catch (error) {
      return(error)
    }
  })
  .catch ((error) => {
    return (error);
  })

  return (weatherData);
}



// Set up a route for the API. The frontend will make calls to this route
// In the frontend we will fetch this user array and display all the users.
app.get("/api*", async (req, res) => {
  console.log(`/api received a request on path ${req.path}`)
  
  // Current weather requests
  if (req.path === '/api-current-weather/') {
    // First check the request is correct. Must contain: a latitude and longitude
    if ((req.query?.latitude) && (req.query?.longitude)) {
      try{
        const weatherData = await currentWeather_handler(req.query.latitude, req.query.longitude);
        res.status(200).send(weatherData);
      }
      catch (error) {
        res.status(404).send(error);
      }
    }
    else {
      res.status(400).send(`Bad request!. Current weather request must include latitude and longitude as queries`);
    }
  }

  // Handle invalid requests
  else {
    res.status(400).send('Error! Invalid request!');
  }
})

// Get media requests for mp4 weather videos
app.get("/media", async (req, res) => {
  console.log(`/api received a request on path ${req.path}`)
  
  var formData = new FormData();
  var imagefile = document.querySelector('#file');
  formData.append("/animations/Night_Thunderstorm.mp4", imagefile.files[0]);
  axios.post('', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  })
})



app.listen(port, () => {
  console.log(`Server started on port ${port}...`)
})


