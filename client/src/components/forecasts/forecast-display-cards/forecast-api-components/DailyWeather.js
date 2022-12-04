import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';
import ForecastCardBase from '../../ForecastCardBase';
// import React, { useState } from 'react'

const DailyWeather = (props) => {
  const initialWeatherState = { list: {}, locationName: '' };

  const url = `/api/daily-weather?lat=${props.lat}&lon=${props.lon}`;
  const [dailyData, setDailyData] = useState(initialWeatherState);

  // Declare the async data fetching function
  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    // Convert the data to json
    const json = await response.json();
    setDailyData(json);
  }, [url]);

  // the useEffect is only there to call `fetchData` at the right time
  // This allow us to use the callback to send the data back out of the useEffect
  // https://devtrium.com/posts/async-functions-useeffect
  useEffect(() => {
    fetchData()
      // Error handling
      .catch(console.error);
  }, [fetchData]);

  return (
    <div className="current-weather-detailed">
      <div className="">
        <ForecastCardBase
          cardType={props.cardType}
          weatherData={dailyData}
          location={props.location}
        />
      </div>
    </div>
  );
};

DailyWeather.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default DailyWeather;
