// MainSearch manages the search function on the main page

import { useState } from 'react';
import React from 'react';
import CurrentWeather from './CurrentWeather';
import TestCurrentWeather from './TestCurrentWeather';
import MainSearch from '../general/search-bars/MainSearch';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import WeatherNav from '../general/WeatherNav';

const SearchBarAndResults = () => {
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lgn: null,
    location: null,
  });
  const [card, setCard] = useState('main-large');
  let hasLocation = coordinates.lat && coordinates.lon;
  let navWeather = hasLocation ? <WeatherNav setCard={setCard} /> : null;
  const show = () => {
    console.log(coordinates);
    let element = null;
    if (card === 'main-large' && hasLocation) {
      console.log('fun', coordinates);
      element = (
        <CurrentWeather
          lat={coordinates.lat}
          lon={coordinates.lon}
          cardType="main-large"
          location={coordinates.location}
        />
      );
    } else if (card === 'hourly-forecast' && hasLocation) {
      element = (
        <HourlyWeather
          lat={coordinates.lat}
          lon={coordinates.lon}
          cardType="hourly-forecast"
          location={coordinates.location}
        />
      );
    } else if (card === 'daily-forecast' && hasLocation) {
      element = (
        <DailyWeather
          lat={coordinates.lat}
          lon={coordinates.lon}
          cardType="daily-forecast"
          location={coordinates.location}
        />
      );
    }
    return element;
  };

  // const latAndlon = (latFromSearch, lonFromSearch) => {
  //   lat = latFromSearch
  //   lon = lonFromSearch
  // }

  return (
    <div className="main-page container">
      <MainSearch setCoordinates={setCoordinates} coordinates={coordinates} />
      {navWeather}
      {show()}
    </div>
  );
};

export default SearchBarAndResults;
