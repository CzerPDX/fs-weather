// Current Weather
/*
  This component's main two jobs are to:
    - Pull data from the API
    - Call top-level forecast components and send them data as needed

    The ForecastCard will be responsible for formatting the data based on cardType

    References:
    https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency
*/

import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';
import ForecastCard from './ForecastCard';
// import React, { useState } from 'react'

const CurrentWeather = (props) => {
  // Have to set the data up with defaults in the same structure they will be in
  // when returned or the software will freak out
  const initialWeatherState = {
    // Commenting this state out for now.  Hourly and Daily api calls will comeback with a long list
    // of objects so this state deffinition wont apply to those calls
    // locationName: 'Loading...',
    // temperature: 'Loading...',
    // shortDescription: 'Loading...',
    // longDescription: 'Loading...',
    // iconCode: 'Loading...',
  };

  //const url = `/api-current-weather?lat=${props.lat}&lon=${props.lon}`;
  const urlStubs = {
    'main-large': '/api-current-weather?',
    'hourly-forecast': '/api-hourly-weather?',
    'daily-forecast': '/api-daily-weather?',
  };
  const url = urlStubs[props.cardType] + `lat=${props.lat}&lon=${props.lon}`;
  // Get data from backend API
  const [weatherData, setWeatherData] = useState(initialWeatherState);

  // Declare the async data fetching function
  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    // Convert the data to json
    const json = await response.json();
    setWeatherData(json);
  }, [url]);

  // the useEffect is only there to call `fetchData` at the right time
  // This allow us to use the callback to send the data back out of the useEffect
  // https://devtrium.com/posts/async-functions-useeffect
  useEffect(() => {
    fetchData()
      // Error handling
      .catch(console.error);
  }, [props]);

  return (
    <div className="current-weather-detailed">
      {/* Forecast Title will stay on this component*/}
      <div className="title-block">
        <h5>Showing the weather from {weatherData.locationName}:</h5>
      </div>

      <div className="forecast-container">
        <ForecastCard
          cardType={props.cardType}
          weatherData={weatherData}

          // commenting out for now.  Hourly and daily need to pass the entire weatherData Object
          // cardType={props.cardType}
          // iconCode={weatherData.iconCode}
          // shortDescription={weatherData.shortDescription}
          // longDescription={weatherData.longDescription}
          // temperature={weatherData.temperature}
        />
        {/* <ForecastCard
          cardType={props.cardType}
          iconCode={weatherData.iconCode}
          shortDescription={weatherData.shortDescription}
          longDescription={weatherData.longDescription}
          temperature={weatherData.temperature}
        /> */}
      </div>
    </div>
  );
};

CurrentWeather.propTypes = {
  lat: PropTypes.string.isRequired,
  lon: PropTypes.string.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default CurrentWeather;
