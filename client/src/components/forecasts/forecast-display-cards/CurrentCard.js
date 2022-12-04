import { useState } from 'react';
import {
  WiHumidity,
  WiStrongWind,
  WiThermometerExterior,
} from 'react-icons/wi';
import { BsThermometerHigh, BsThermometerLow } from 'react-icons/bs';
import { GiSunset, GiSunrise } from 'react-icons/gi';
import { IoIosCloudOutline } from 'react-icons/io';
const innerIcon = '	#00BFFF';

const TemperatureDisplay = ({ iconCode, temperature }) => {
  // If the iconCode has been successfully returned from the weather API, display the temperature
  if (iconCode !== undefined) {
    // Change color based on time of day ("tod")
    const tod = iconCode;
    const tempColor = tod.includes('n') ? 'text-white' : 'text-dark opacity-75';

    return (
      <div className="temperature row">
        <div className="col">
          <h1 className={tempColor}>{temperature}°</h1>
        </div>
      </div>
    )
  }
  
}

const WeatherImage = ({iconCode, shortDescription, onLoad }) => {
  // If the iconCode is not empty return the animation
  if (iconCode !== undefined) {
    return (
      <img
        className="video"
        src={`${process.env.PUBLIC_URL}animations/${iconCode}.gif`}
        alt={shortDescription}
        onLoad={onLoad}
      ></img>
    )
  }
};

const TemperatureAndGraphicCard = ({ weatherData }) => {
  const [temperatureDiv, setTemperatureDiv] = useState();

  // Only shows the temperature once the image has finished loading so layout doesn't break
  const showTemperature = () => {
    const newDiv = <TemperatureDisplay 
      iconCode={weatherData.iconCode}
      temperature={weatherData.temperature}
    />
    setTemperatureDiv(newDiv)
  }

  // If the iconCode has loaded return the loaded 
  if (weatherData.iconCode) {
    return(
      <div className="temperature-and-graphic-card">
        <div className="weather-icon row">
          <div className="col p-0">
            {temperatureDiv}
            <WeatherImage
              iconCode={weatherData.iconCode}
              shortDescription={weatherData.shortDescription}
              alt='Animation of current weather' 
              onLoad={() => showTemperature()}
            />
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    )
  }
  
}


const CurrentCard = (props) => {
  const weatherData = props.weatherData;
  const titleDisplay =
    props.location.length < 35
      ? 'display-5 font-weight-bold'
      : 'long-title-current';
  const sunrise = `${weatherData.sunrise.hour}:${weatherData.sunrise.minutes} ${weatherData.sunrise.ampm}`;
  const sunset = `${weatherData.sunset.hour}:${weatherData.sunset.minutes} ${weatherData.sunset.ampm}`;
  return (
    <div className="container mb-5 d-grid gap-3 card px-md-5 py-3 ">
      <div className="row">
        <div className="col">
          <div>
            <div>
              <h3 className={`${titleDisplay}   m-0 px-2 current-city`}>
                {props.location}
              </h3>
            </div>
            <div className="mb-4 px-2">
              <h3 className="display-6 text-capitalize">
                {weatherData.longDescription}
              </h3>
            </div>
            <div className="row px-1">
              <h6 className="col-6 mt-sm-2 mn-icon-name d-flex align-items-lg-stretch ps-3 ps-sm-3">
                <BsThermometerHigh color={innerIcon} size={25} />
                {`High: ${weatherData.maxTemp}°`}
              </h6>
              <h6 className="col-6 mt-sm-2 mn-icon-name d-flex align-items-stretch">
                <GiSunrise color={innerIcon} size={25}></GiSunrise>
                {`Sunrise: ${sunrise}`}
              </h6>
              <h6 className="col-6 mt-sm-2 mn-icon-name d-flex align-items-stretch ps-3 ps-md-3 ps-sm-3">
                <BsThermometerLow color={innerIcon} size={25} />
                {`Low: ${weatherData.minTemp}°`}
              </h6>
              <h6 className="col-6 mt-sm-2 mn-icon-name d-flex align-items-stretch">
                <GiSunset color={innerIcon} size={25}></GiSunset>
                {`Sunset: ${sunset}`}
              </h6>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center justify-content-md-end">
          <TemperatureAndGraphicCard
            weatherData={weatherData}
          />
        </div>
      </div>
      <div className="row border-top pt-3">
        <div className=" col-6 col-sm hr-icon-name d-flex align-items-stretch">
          <WiStrongWind color={innerIcon} size={30} />
          {`wind: ${weatherData.wind}mph`}
        </div>
        <div className="col-6 col-sm hr-icon-name d-flex align-items-stretch ">
          <WiHumidity color={innerIcon} size={30}></WiHumidity>
          {`humidity: ${weatherData.humidity}%`}
        </div>
        <div className=" col-6 col-sm hr-icon-name d-flex align-items-stretch">
          <IoIosCloudOutline color={innerIcon} size={30} />
          {`cloud cover: ${weatherData.cloudCover}%`}
        </div>
        <div className="col-6 col-sm d-flex hr-icon-name align-items-strectch">
          <WiThermometerExterior
            color={innerIcon}
            size={30}
          ></WiThermometerExterior>
          {`feels like: ${weatherData.feelsLike}°`}
        </div>
      </div>
    </div>
  );
};

export default CurrentCard;
