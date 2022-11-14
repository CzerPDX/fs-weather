// MainSearch manages the search function on the main page

import React from 'react'
import LargeSearchBar from '../components/general/search-bars/LargeSearchBar'
import ForecastCardSimple from '../components/forecast-cards/ForecastCardSimple'

const SearchBarAndResults = () => {
  return (
    <div className='main-search container'>
      <LargeSearchBar 
        defaultText='Search by city and state...'
      />
      <ForecastCardSimple />
    </div>
  )
}

export default SearchBarAndResults