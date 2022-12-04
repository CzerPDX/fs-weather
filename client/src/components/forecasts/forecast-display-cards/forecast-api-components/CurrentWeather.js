// Current Weather
/*
  This component's main two jobs are to:
    - Pull data from the API
    - Call top-level forecast components and send them data as needed

    The ForecastCardBase will be responsible for formatting the data based on cardType

    References:
    https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency
*/

import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from 'react';
import ForecastCardBase from '../../ForecastCardBase';



const CurrentWeather = (props) => {
  // Have to set the data up with defaults in the same structure they will be in
  // when returned or the software will freak out


  const initialWeatherState = {
    locationName: 'loading...',
    temperature: '',
    shortDescription: 'loading...',
    longDescription: 'loading...',
    icon: `http://openweathermap.org/img/wn/02d@2x.png`,
    iconCode: undefined,
    maxTemp: '...',
    minTemp: '...',
    feelsLike: '...',
    sunrise: { hour: '...', ampm: '...', minutes: '...' },
    sunset: { hour: '...', ampm: '...', minutes: '...' },
    wind: '...',
    humidity: '...',
    cloudCover: '...',
  };

  const url = `/api/current-weather?lat=${props.lat}&lon=${props.lon}`;
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
  }, [fetchData]);
  return (
    <div className="current-weather-detailed mb-5">
      <div className="">
        <ForecastCardBase
          cardType={props.cardType}
          weatherData={weatherData}
          location={props.location}
        />
      </div>
    </div>
  );
};

CurrentWeather.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default CurrentWeather;
