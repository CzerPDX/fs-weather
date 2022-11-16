// MainSearch manages the search function on the main page

import React from 'react'
import ForecastCardSimple from '../components/forecast-cards/ForecastCardSimple'
import MainSearch from '../components/general/search-bars/MainSearch'

const SearchBarAndResults = () => {
  return (
    <div className='main-search container'>
      {/* <MainSearch 
        defaultText='Search by city and state...'
      /> */}

      <MainSearch />

      <ForecastCardSimple />
    </div>
  )
}

export default SearchBarAndResults