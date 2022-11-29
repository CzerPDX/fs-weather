import React from 'react';
import PropTypes from 'prop-types';
import backgroundVideo from './animations/Night_Thunderstorm.mp4';
import {
  WiHumidity,
  WiStrongWind,
  // WiRaindrop,
  WiThermometerExterior,
} from 'react-icons/wi';
import { IoWaterOutline } from 'react-icons/io5';
import { BsThermometerHigh, BsThermometerLow } from 'react-icons/bs';
import { GiSunset, GiSunrise } from 'react-icons/gi';

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
const CurrentCard = ({
  temperature,
  iconCode,
  shortDescription,
  longDescription,
}) => {
  return (
    <div className="container mb-5 d-grid gap-3 card px-md-5 py-3">
      <div className="row">
        <div className="col">
          <div>
            <div>
              <h1 className="display-3 m-0">Portland OR</h1>
            </div>
            <div>
              <h3 className="display-6">{shortDescription}</h3>
            </div>
            <div className="row ">
              <h6 className="col-6 mt-2 mn-icon-name d-flex align-items-baseline">
                <BsThermometerHigh color={innerIcon} size={25} />
                High: 78°
              </h6>
              <h6 className="col-6 mt-2 mn-icon-name d-flex align-items-baseline">
                <GiSunrise color={innerIcon} size={25}></GiSunrise>Sunrise: 6 am
              </h6>
              <h6 className="col-6 mt-2 mn-icon-name d-flex align-items-baseline">
                <BsThermometerLow color={innerIcon} size={25} />
                Low: 68°
              </h6>
              <h6 className="col-6 mt-2 mn-icon-name d-flex align-items-baseline">
                <GiSunset color={innerIcon} size={25}></GiSunset>Sunset: 7 pm
              </h6>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center justify-content-md-end">
          <div className="temperature-and-graphic-card">
            <div className="temperature row">
              <div className="col">
                <h1 className="display-6">{temperature}</h1>
              </div>
            </div>
            {/* This image will also be a component eventually so it doesn't start as a broken link before load */}
            {/* It will also eventually change depending on the icon code because it tracks weather conditions and time of day */}
            <div className="weather-icon row">
              <div className="col p-0">
                <WeatherImage
                  iconCode={iconCode}
                  shortDescription={shortDescription}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top pt-3">
        <div className=" col-6 col-sm hr-icon-name d-flex align-items-baseline">
          <IoWaterOutline color={innerIcon} size={30}></IoWaterOutline>
          precipitation: 50%
        </div>
        <div className="col-6 col-sm hr-icon-name d-flex align-items-baseline ">
          <WiHumidity color={innerIcon} size={30}></WiHumidity>
          humidity: 80%
        </div>
        <div className=" col-6 col-sm hr-icon-name d-flex align-items-baseline">
          <WiStrongWind color={innerIcon} size={30} />
          wind: 2 mph
        </div>
        <div className="col-6 col-sm d-flex hr-icon-name align-items-baseline">
          <WiThermometerExterior
            color={innerIcon}
            size={30}
          ></WiThermometerExterior>
          feels like: 65 F°
        </div>
      </div>
    </div>
  );
};

export default CurrentCard;
