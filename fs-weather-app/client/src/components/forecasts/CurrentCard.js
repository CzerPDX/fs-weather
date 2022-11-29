import React from 'react';
import backgroundVideo from './animations/Night_Thunderstorm.mp4';
import {
  WiHumidity,
  WiStrongWind,
  WiThermometerExterior,
} from 'react-icons/wi';
import { BsThermometerHigh, BsThermometerLow } from 'react-icons/bs';
import { GiSunset, GiSunrise } from 'react-icons/gi';
import { IoIosCloudOutline } from 'react-icons/io';

const innerIcon = '	#00BFFF';
const WeatherImage = ({ icon, shortDescription }) => {
  return (
    <video autoPlay loop muted className="video">
      <source src={backgroundVideo} type="video/mp4" />
    </video>
    // <div className='weather-image'>
    //   <source src="/animations/Night_Thunderstorm.mp4" type="video/mp4"/>
    // </div>
  );
};
const CurrentCard = ({ weatherData }) => {
  console.log(weatherData);
  const sunrise = `${weatherData.sunrise.hour}:${weatherData.sunrise.minutes} ${weatherData.sunrise.ampm}`;
  const sunset = `${weatherData.sunset.hour}:${weatherData.sunset.minutes} ${weatherData.sunset.ampm}`;
  return (
    <div className="container mb-5 d-grid gap-3 card px-md-5 py-3 ">
      <div className="row">
        <div className="col">
          <div>
            <div>
              <h1 className="display-4 m-0 px-2 current-city">
                {weatherData.locationName}
              </h1>
            </div>
            <div className="mb-4 px-3">
              <h3 className="display-6">{weatherData.shortDescription}</h3>
            </div>
            <div className="row px-1">
              <h6 className="col-6 mt-sm-2 mn-icon-name d-flex align-items-lg-stretch ps-3 ps-sm-5 ps-md-3">
                <BsThermometerHigh color={innerIcon} size={25} />
                {`High: ${weatherData.maxTemp}°`}
              </h6>
              <h6 className="col-6 mt-sm-2 mn-icon-name d-flex align-items-stretch">
                <GiSunrise color={innerIcon} size={25}></GiSunrise>
                {`Sunrise: ${sunrise}`}
              </h6>
              <h6 className="col-6 mt-sm-2 mn-icon-name d-flex align-items-stretch ps-3 ps-md-3 ps-sm-5 ps-md-3">
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
          <div className="temperature-and-graphic-card">
            <div className="temperature row">
              <div className="col">
                <h1 className="display-6">{weatherData.temperature}°</h1>
              </div>
            </div>
            {/* This image will also be a component eventually so it doesn't start as a broken link before load */}
            {/* It will also eventually change depending on the icon code because it tracks weather conditions and time of day */}
            <div className="weather-icon row">
              <div className="col p-0">
                <WeatherImage
                  iconCode={weatherData.iconCode}
                  shortDescription={weatherData.shortDescription}
                />
              </div>
            </div>
          </div>
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
