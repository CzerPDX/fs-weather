


const ParseWeather = ({ weatherData }) => {
  // Set up some default information
  const cityName = weatherData.name
  let temperature = weatherData.main.temp
  if (temperature) {
    temperature = Math.round(temperature)
  }
  else {
    temperature = ''
  }
  let mainDescription
  let description
  let icon
  try {
    mainDescription = weatherData.weather['0'].main
    description = weatherData.weather['0'].description
    icon = `http://openweathermap.org/img/wn/${weatherData.weather['0'].icon}@2x.png`
  }
  catch (error) {
    console.log(error)
  }

  
  return(
    <div className='current-conditions'>
      <div>Showing the weather from {cityName}:</div>
      <div className='main'>
        Description: {mainDescription}
      </div>
      <div className='description'>
        Long description: {description}
      </div>
      <div className='description'>
        Icon: <img src={icon} alt='currentConditionIcon'></img>
      </div>
    </div>
  )
}


export default ParseWeather