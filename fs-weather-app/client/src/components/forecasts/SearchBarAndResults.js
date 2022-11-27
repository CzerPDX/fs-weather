// MainSearch manages the search function on the main page

import { useState } from 'react';
import React from 'react';
import CurrentWeather from './CurrentWeather';
import TestCurrentWeather from './TestCurrentWeather';
import MainSearch from '../general/search-bars/MainSearch';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';

const SearchBarAndResults = () => {
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lgn: null,
  });
  let show;
  if (coordinates.lat === null && coordinates.lgn === null) {
    show = '';
  } else {
    show = (
      <div>
        <CurrentWeather
          lat={coordinates.lat}
          lon={coordinates.lon}
          cardType="main-large"
        />
        <HourlyWeather
          lat={coordinates.lat}
          lon={coordinates.lon}
          cardType="hourly-forecast"
        />
        <DailyWeather
          lat={coordinates.lat}
          lon={coordinates.lon}
          cardType="daily-forecast"
        />
      </div>
    );
  }
  // const latAndlon = (latFromSearch, lonFromSearch) => {
  //   lat = latFromSearch
  //   lon = lonFromSearch
  // }

  return (
    <div className="main-page container">
      <MainSearch setCoordinates={setCoordinates} coordinates={coordinates} />
      {show}
    </div>
  );
};

export default SearchBarAndResults;
