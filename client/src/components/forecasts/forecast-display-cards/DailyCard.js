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
  const dataList = Object.entries(props.weatherData.list).map((item, i) => {
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
    <div className="container d-flex flex-fill card mb-5 py-4 px-sm-4 shadow">
      <div className="container  pb-5 align-items-baseline ">
        <h1 className="display-6">Daily Weather </h1>
        <h4 className=""> {`- ${props.location}`}</h4>
      </div>
      <>{dataList}</>
    </div>
  );
};

export default DailyCard;
