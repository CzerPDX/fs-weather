const express = require('express')
const app = express()
const port = 5001

// Set up a route for the API. The frontend will make calls to this route
// In the frontend we will fetch this user array and display all the users.
app.get("/api*", (req, res) => {
  
  // Handle requests for /api-current-weather
  if (req.url === '/api-current-weather') {
    // Manually saving a response obj. We will replace this with a call to the API later.
    // let responseObject = '[{"coord":{"lon":-122.6784,"lat":45.5152},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":39.99,"feels_like":35.74,"temp_min":35.35,"temp_max":44.17,"pressure":1027,"humidity":86},"visibility":10000,"wind":{"speed":5.99,"deg":53,"gust":14},"clouds":{"all":0},"dt":1668393336,"sys":{"type":2,"id":2034915,"country":"US","sunrise":1668352038,"sunset":1668386576},"timezone":-28800,"id":5746545,"name":"Portland","cod":200}]'
    let responseObject = '{"coord":{"lon":-122.6784,"lat":45.5152},"weather":[{"id":622,"main":"Snow","description":"Heavy shower snow","icon":"13d"}],"base":"stations","main":{"temp":39.99,"feels_like":35.74,"temp_min":35.35,"temp_max":44.17,"pressure":1027,"humidity":86},"visibility":10000,"wind":{"speed":5.99,"deg":53,"gust":14},"clouds":{"all":0},"dt":1668393336,"sys":{"type":2,"id":2034915,"country":"US","sunrise":1668352038,"sunset":1668386576},"timezone":-28800,"id":5746545,"name":"Portland","cod":200}'
    
    // We will let the front-end parse the json data since it seems like that's how the openweather api is
    res.send(responseObject)
  }

  // Handle invalid requests
  else {
    console.error('Error! Response was empty')
    res.send('[]')
  }
})

app.listen(port, () => {
  console.log(`Server started on port ${port}...`)
})


