// Current Weather
/*
  This component's main two jobs are to:
    - Pull data from the API
    - Call top-level forecast components and send them data as needed

    The ForecastCard will be responsible for formatting the data based on cardType

    References:
    https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency
*/

import PropTypes from 'prop-types'
import React, { useEffect, useState, useCallback } from 'react'
import ForecastCard from './ForecastCard';
// import React, { useState } from 'react'


const CurrentWeather = ({ lat, lon , cardType }) => {


  // Have to set the data up with defaults in the same structure they will be in
  // when returned or the software will freak out
  const initialWeatherState = {
    'locationName': 'Loading...',
    'temperature': 'Loading...',
    'shortDescription': 'Loading...',
    'longDescription': 'Loading...',
    'icon': 'Loading...'
  }


  const url = `/api-current-weather/?lat=${lat}&lon=${lon}`;
  // Get data from backend API
  const [weatherData, setWeatherData] = useState(initialWeatherState)

  // Declare the async data fetching function
  const fetchData = useCallback(async () => {
    const response = await fetch(url)
    // Convert the data to json
    const json = await response.json();
    console.log(`SETTING WEATHER DATA: ${JSON.stringify(json)}`);
    setWeatherData(json);
  }, [url])

  // the useEffect is only there to call `fetchData` at the right time
  // This allow us to use the callback to send the data back out of the useEffect
  // https://devtrium.com/posts/async-functions-useeffect
  useEffect(() => {
    fetchData()
      // Error handling
      .catch(console.error)
  }, [fetchData])


  return (
    <div className='current-weather-detailed'>
      {/* Forecast Title will stay on this component*/}
      <div className='title-block'>
        <h5>Showing the weather from {weatherData.locationName}:</h5>
      </div>

      <div className='forecast-container'>
        <ForecastCard
          cardType={cardType}
          icon={weatherData.icon} 
          shortDescription={weatherData.shortDescription} 
          longDescription={weatherData.longDescription} 
          temperature={weatherData.temperature}
        />
        <ForecastCard
          cardType={cardType}
          icon={weatherData.icon} 
          shortDescription={weatherData.shortDescription} 
          longDescription={weatherData.longDescription} 
          temperature={weatherData.temperature}
        />
      </div>
      
      
    </div>
  )
}


CurrentWeather.propTypes = {
  lat: PropTypes.string.isRequired,
  lon: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
}

export default CurrentWeather 