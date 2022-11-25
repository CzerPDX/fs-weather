// MainSearch manages the search function on the main page

import { useState } from 'react';
import React from 'react';
import CurrentWeather from './CurrentWeather';
import TestCurrentWeather from './TestCurrentWeather';
import MainSearch from '../general/search-bars/MainSearch';

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
      <TestCurrentWeather
        lat={coordinates.lat}
        lon={coordinates.lon}
        cardType="hourly-forecast"
      />
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
