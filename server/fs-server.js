const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));
require('dotenv').config()
const port = 5001;

// OpenWeather API routes
const openWeatherAPIRoutes = require('./api-open-weather');
app.use('/api', openWeatherAPIRoutes);



// Database routes
const dbRoutes = require('./database/fs-db-routes');
app.use('/data', dbRoutes);



// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});