import React from 'react'
import LargeSearchBar from '../components/general/search-bars/LargeSearchBar'
import Header from '../components/general/Header'

const MainPage = () => {
  return (
    <div className='mainPage'>
      <Header 
        headerTitle='FS Weather'
        headerClasses='p-3 bg-dark text-white'
      />
      <LargeSearchBar 
        defaultText='Search by city and state...'
      />
    </div>
  )
}

export default MainPage