// MainSearch manages the search function on the main page

import React from 'react'
import CurrentWeather from './CurrentWeather'
import MainSearch from '../general/search-bars/MainSearch'

const SearchBarAndResults = () => {
  let lat = '45.5152'
  let lon = '-122.6784'

  // const latAndlon = (latFromSearch, lonFromSearch) => {
  //   lat = latFromSearch
  //   lon = lonFromSearch
  // }

  return (
    <div className='main-page container'>
      <MainSearch />

      <CurrentWeather 
        lat={lat}
        lon={lon}
        cardType='main-large'
      />

    </div>
  )
}

export default SearchBarAndResults