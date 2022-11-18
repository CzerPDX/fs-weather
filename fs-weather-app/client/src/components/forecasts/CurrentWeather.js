// Forecast Card Simple
/*
  This component's main two jobs are to:
    - Pull data from the API
    - Call top-level forecast components and send them data as needed

    The ParseWeather component will handle updating data

    References:
    https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency
*/

import React, { useEffect, useState, useCallback } from 'react'
// import React, { useState } from 'react'


const CurrentWeather = ({ latitude, longitude, }) => {

  // Have to set the data up with defaults in the same structure they will be in
  // when returned or the software will freak out
  const initialWeatherState = {
    'locationName': 'Loading...',
    'temp': 'Loading...',
    'shortDescription': 'Loading...',
    'longDescription': 'Loading...',
    'icon': 'Loading...'
  }


  const url = `/api-current-weather/?latitude=${latitude}&longitude=${longitude}`;
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
    <div className='forecast-card'>
      <div className='title-block'>
        Showing the weather from {weatherData.locationName}:
      </div>
      <div className='short-description'>
        Description: {weatherData.shortDescription}
      </div>
      <div className='long-description'>
        Long description: {weatherData.longDescription}
      </div>
      <div className='weather-icon'>
        Icon: {weatherData.icon}
      </div>
      <div className='temperature'>
        Temp: {weatherData.temp}
      </div>
    </div>
  )
}

export default CurrentWeather 