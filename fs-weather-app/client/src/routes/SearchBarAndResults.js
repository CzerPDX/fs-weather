// MainSearch manages the search function on the main page

import React from 'react'
import MainSearch from '../components/general/MainSearch'
import ForecastCardSimple from '../components/forecast-cards/ForecastCardSimple'

const SearchBarAndResults = () => {
  return (
    <div className='main-search container'>
      <MainSearch 
        defaultText='Search by city and state...'
      />
      <ForecastCardSimple />
    </div>
  )
}

export default SearchBarAndResults