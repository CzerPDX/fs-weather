import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useState } from 'react';
import {
  WiHumidity,
  WiStrongWind,
  WiRaindrop,
  WiThermometerExterior,
} from 'react-icons/wi';
import { IoWaterOutline } from 'react-icons/io5';
const innerIcon = '	#00BFFF';

const HourlyDropdown = ({ percipitation, wind, humidity, feelsLike }) => {
  return (
    <>
      <div className="row p-3 border-2 border-dark border-bottom">
        <div className="col-12 col-sm-6 col-lg d-flex align-items-center  justify-content-center hr-icon-name">
          <WiThermometerExterior
            color={innerIcon}
            size={35}
          ></WiThermometerExterior>
          feels like: {feelsLike} F°
        </div>
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
      </div>
    </>
  );
};
const HourlyItemMain = ({ hour, ampm, temp, icon, clickIcon, description }) => {
  const image = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let time = `${hour} ${ampm}`;
  let temperature = `${temp} F°`;
  return (
    <>
      <h5 className="display-6">{time}</h5>
      <h5 className="display-6">{temperature}</h5>
      <div className="d-sm-flex align-items-center">
        <img className="hr-icon" src={image} />
        <p className="d-none d-sm-flex">{description}</p>
      </div>
      <h3 className="">{clickIcon}</h3>
      {/* <div className="col d-flex justify-content-around">
        <h5>{time}</h5>
        <h5>{temperature}</h5>
      </div>
      <div className="col d-flex align-items-center justify-content-end ">
        <div className="row-col-2">
          <div className="col">
            <img src={image} />
          </div>
        </div>
        <p>descripton</p>
      </div>
      <div className="col-1 ms-5 d-flex justify-content-end">
        <h3>{clickIcon}</h3>
      </div> */}
    </>
  );
};

const HourlyCard = (props) => {
  console.log(props.weatherData);
  const [clicked, setClicked] = useState('');
  const toggleItem = (index) => {
    console.log('click', index, clicked);
    if (index === clicked) {
      console.log('isequal');
      setClicked(null);
    } else {
      console.log('isequal');
      setClicked(index);
    }
  };
  const dataList = Object.entries(props.weatherData).map((item, i) => {
    let it = item[1];
    let dayChange = null;
    let clickedIcon = clicked === i ? <FaToggleOff /> : <FaToggleOn />;
    let dropContent =
      clicked === i ? (
        <HourlyDropdown
          feelsLike={it.feelsLike}
          wind={it.wind}
          humidity={it.humidity}
          percipitation={it.percipitation}
        ></HourlyDropdown>
      ) : null;
    if (it.time.hour === 12 && it.time.ampm === 'am') {
      dayChange = (
        <div className="d-flex border-bottom">
          <h2 className=" my-2">{it.day.name}</h2>
        </div>
      );
    }
    return (
      <>
        {dayChange}
        <div
          onClick={() => toggleItem(i)}
          className="d-flex border-bottom justify-content-between align-items-center ps-2"
        >
          <HourlyItemMain
            id={`hr${i}`}
            key={i}
            hour={it.time.hour}
            ampm={it.time.ampm}
            temp={it.temp}
            icon={it.icon}
            day={it.day}
            description={it.description}
            clickIcon={clickedIcon}
          ></HourlyItemMain>
        </div>
        {dropContent}
      </>
    );
  });
  console.log('hourly', props);
  return (
    <div className="container card mb-5 p-4 shadow">
      <>{dataList}</>
    </div>
  );
};

export default HourlyCard;
