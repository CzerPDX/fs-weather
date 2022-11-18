import React from 'react'
import PropTypes from 'prop-types'

const ForecastCard = ({ cardType, icon, shortDescription, longDescription, temperature }) => {
  console.log(`cardType = ${cardType}`);


  return (
    <div className='forecast-card-container'>
      <div className='forecast-card'>
        {/* Temperature and weather display on rounded edge card. Will move to its own component */}
        <div className='temperature-and-graphic-card'>
          <div className='temperature row'>
            <div className='col'>
              <h1>{temperature}</h1>
            </div>
          </div>
          {/* This image will also be a component eventually so it doesn't start as a broken link before load */}
          {/* It will also eventually change depending on the icon code because it tracks weather conditions and time of day */}
          <div className='weather-icon row'>
            <div className='col'>
              <img src={icon} alt={shortDescription} />
            </div>
          </div>
          
        </div>

        {/* Detailed weather information. Will move to its own component. */}
        <div className='detailed-weather-info'>
          <div className='short-description'>
            Description: {shortDescription}
          </div>
          <div className='long-description'>
            Long description: {longDescription}
          </div>
        </div>
        
      </div>
    </div>
    
  )
}


ForecastCard.propTypes = {
  icon: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
}

export default ForecastCard