// Forecast Card Simple
/*
  This component's main two jobs are to:
    - Pull data from the API
    - Call top-level forecast components and send them data as needed

    The ParseWeather component will handle updating data
*/

import React, { useEffect, useState, useCallback } from 'react'
import ParseWeather from './ParseWeather'


const ForecastCardSimple = () => {

  // Have to set the data up with defaults in the same structure they will be in
  // when returned or the software will freak out
  const initialWeatherState = {
    'name': '',
    'main': {
      'temp': ''
    },
    'weather': [
      {
        'main': 'ffff',
        'description': 'sssss',
        'icon': 'dddd'
      }
    ]
  }

  // Get data from backend API
  const [weatherData, setWeatherData] = useState(initialWeatherState)

  // Declare the async data fetching function
  const fetchData = useCallback(async () => {
    const response = await fetch('/api-current-weather')
    // Convert the data to json
    const json = await response.json()
    setWeatherData(json);
  }, [])

  // the useEffect is only there to call `fetchData` at the right time
  // This allow us to use the callback to send the data back out of the useEffect
  // https://devtrium.com/posts/async-functions-useeffect
  useEffect(() => {
    fetchData()
      // Error handling
      .catch(console.error)
  }, [fetchData])

  return (
    <div className='forecast-card-simple'>
      <ParseWeather weatherData={weatherData} />
    </div>
  )
}

export default ForecastCardSimple 