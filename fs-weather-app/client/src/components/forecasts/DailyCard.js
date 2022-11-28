import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useState } from 'react';
import { WiHumidity, WiStrongWind } from 'react-icons/wi';
import { BsThermometerHigh, BsThermometerLow } from 'react-icons/bs';
import { GiSunset, GiSunrise } from 'react-icons/gi';
import { IoWaterOutline } from 'react-icons/io5';
const innerIcon = '	#00BFFF';

const DailyDropdown = ({
  percipitation,
  wind,
  humidity,
  high,
  low,
  sunrise,
  sunset,
}) => {
  const sunRise = `${sunrise.hour}:${sunrise.minutes} ${sunrise.ampm}`;
  const sunSet = `${sunset.hour}:${sunset.minutes} ${sunset.ampm}`;
  const dropItem =
    'd-flex col-6 hr-icon-name justify-content-center flex-fill align-items-center';
  return (
    <>
      <div className="container d-grid gap-sm-4 p-3 border-2 border-dark border-bottom">
        <div className="row">
          <h6 className={`col-sm-3 col-6 ${dropItem}`}>
            <BsThermometerHigh color={innerIcon} size={25} />
            {`High: ${high}°`}
          </h6>
          <h6 className={`col-sm-3  ${dropItem}`}>
            <BsThermometerLow color={innerIcon} size={25} />
            {`Low: ${low}°`}
          </h6>
          <h6 className={`col-sm-3 ${dropItem}`}>
            <GiSunrise color={innerIcon} size={25}></GiSunrise>Sunrise:{' '}
            {sunRise}
          </h6>
          <h6 className={`col-sm-3 ${dropItem}`}>
            <GiSunset color={innerIcon} size={25}></GiSunset>Sunset: {sunSet}
          </h6>
        </div>
        <div className="row">
          <h6 className={`col-sm-4  ${dropItem}`}>
            <WiStrongWind color={innerIcon} size={35} />
            wind: {wind} mph
          </h6>
          <h6 className={`col-sm-4  ${dropItem}`}>
            <WiHumidity color={innerIcon} size={25}></WiHumidity>humidity:{' '}
            {humidity}%
          </h6>
          <h6 className={`col-sm-4  ${dropItem}`}>
            <IoWaterOutline color={innerIcon} size={25}></IoWaterOutline>
            precipitation: {percipitation}%
          </h6>
        </div>
      </div>
      {/* <div className="row p-3 border-2 border-dark border-bottom">
        <div className="col-12 col-sm-6 col-lg d-flex align-items-center justify-content-center hr-icon-name">
          <WiHumidity color={innerIcon} size={40}></WiHumidity>humidity:{' '}
          {humidity}%
        </div>
        <div className="col-12 col-sm-6 col-lg  d-flex align-items-center justify-content-center hr-icon-name">
          <IoWaterOutline color={innerIcon} size={25}></IoWaterOutline>
          precipitation: {percipitation}%
        </div>
        <div className="col-12 col-sm-6 col-lg  d-flex align-items-center justify-content-center  hr-icon-name">
          <WiStrongWind color={innerIcon} size={40} />
          wind: {wind} mph
        </div>
        <div className="col-12 col-sm-6 col-lg  d-flex align-items-center justify-content-center  hr-icon-name">
          <GiSunrise color={innerIcon} size={30} /> {sunrise.hour}:
          {sunrise.minutes} {sunrise.ampm}
        </div>
        <div className="col-12 col-sm-6 col-lg  d-flex align-items-center justify-content-center  hr-icon-name">
          <GiSunset color={innerIcon} size={30} /> {sunset.hour}:
          {sunset.minutes} {sunset.ampm}
        </div>
      </div> */}
    </>
  );
};
const DailyItemMain = ({ day, month, temp, icon, clickIcon, description }) => {
  const image = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let time = `${day.abbrv}`;
  let date = `${month.abbrv} ${day.dayOfMonth}`;
  let temperature = `${temp}°`;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row-col-1 justify-content-center">
              <div className="col align-items-center">
                <div className="m-2">
                  <h4 className="m-0">{time}</h4>
                  <p className="m-0">{date} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex align-items-center">
          <h5 className="display-6">{temperature}</h5>
        </div>
        <div className="col">
          <div className="d-sm-flex align-items-center">
            <img className="hr-icon" src={image} alt={description} />
            <p className="d-none d-sm-flex">{description}</p>
          </div>
        </div>
        <div className="col-1 d-flex justify-content-end">
          <h3 className="">{clickIcon}</h3>
        </div>
      </div>
    </div>
  );
};

const DailyCard = (props) => {
  const [clicked, setClicked] = useState('');
  const toggleItem = (index) => {
    if (index === clicked) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };
  const dataList = Object.entries(props.weatherData).map((item, i) => {
    let it = item[1];
    let clickedIcon = clicked === i ? <FaToggleOff /> : <FaToggleOn />;
    let dropContent =
      clicked === i ? (
        <DailyDropdown
          high={it.tempMax}
          low={it.tempMin}
          wind={it.wind}
          humidity={it.humidity}
          percipitation={it.percipitation}
          sunrise={it.sunrise}
          sunset={it.sunset}
        />
      ) : null;
    return (
      <div key={`day${i}`}>
        <div
          onClick={() => toggleItem(i)}
          className="d-flex border-bottom justify-content-between align-items-center ps-2"
        >
          <DailyItemMain
            month={it.month}
            temp={it.temperature}
            icon={it.icon}
            day={it.day}
            description={it.longDescription}
            clickIcon={clickedIcon}
          ></DailyItemMain>
        </div>
        {dropContent}
      </div>
    );
  });

  return (
    <div className="container d-flex flex-fill card mb-5 p-4 shadow">
      <>{dataList}</>
    </div>
  );
};

export default DailyCard;
