import React from 'react'
import SearchBarAndResults from '../components/forecasts/SearchBarAndResults'
import Header from '../components/general/Header'

const MainPage = () => {
  return (
    <div className='mainPage'>
      <Header 
        headerTitle='FS Weather'
        headerClasses='p-3 bg-dark text-white'
      />
      <SearchBarAndResults />   
    </div>
  )
}

export default MainPage