// MainSearch manages the search function on the main page

import React from 'react'
import CurrentWeather from '../components/forecasts/CurrentWeather'
import MainSearch from '../components/general/search-bars/MainSearch'

const SearchBarAndResults = () => {
  let latitude = '45.5152'
  let longitude = '-122.6784'

  // const latitudeAndLongitude = (latFromSearch, lonFromSearch) => {
  //   latitude = latFromSearch
  //   longitude = lonFromSearch
  // }

  return (
    <div className='main-page container'>
      <MainSearch />

      <CurrentWeather 
        latitude={latitude}
        longitude={longitude}
        cardType='main-large'
      />

    </div>
  )
}

export default SearchBarAndResults