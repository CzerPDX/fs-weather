import PropTypes from 'prop-types';
import backgroundVideo from './animations/Night_Thunderstorm.mp4';
import HourlyCard from './HourlyCard';
import DailyCard from './DailyCard';
import CurrentCard from './CurrentCard';

const WeatherImage = ({ icon, shortDescription }) => {
  return (
    <video autoPlay loop muted className="video">
      <source src={backgroundVideo} type="video/mp4" />
    </video>
    // <div className='weather-image'>
    //   <source src="/animations/Night_Thunderstorm.mp4" type="video/mp4"/>
    // </div>
  );

  // return (
  //   <div className='weather-image'>
  //     <img src={icon} alt={shortDescription} />
  //   </div>
  // )
};

// Different cardTypes of ForecastCards can have different layouts
// Add new layouts as new components below like MainLarge is

const MainLarge = ({
  temperature,
  iconCode,
  shortDescription,
  longDescription,
}) => {
  return (
    <div>
      <div className="temperature-and-graphic-card">
        <div className="temperature row">
          <div className="col">
            <h1>{temperature}</h1>
          </div>
        </div>
        {/* This image will also be a component eventually so it doesn't start as a broken link before load */}
        {/* It will also eventually change depending on the icon code because it tracks weather conditions and time of day */}
        <div className="weather-icon row">
          <div className="col">
            <WeatherImage
              iconCode={iconCode}
              shortDescription={shortDescription}
            />
          </div>
        </div>
      </div>

      <div className="detailed-weather-info">
        <div className="short-description">Description: {shortDescription}</div>
        <div className="long-description">
          Long description: {longDescription}
        </div>
      </div>
    </div>
  );
};

const ForecastCard = (props) => {
  // Pick layout of forecast card based on the card type
  const renderByType = (props) => {
    if (props.cardType === 'main-large') {
      return (
        <CurrentCard
          weatherData={props.weatherData}
          location={props.location}
        />
      );
    } else if (props.cardType === 'hourly-forecast') {
      return (
        <HourlyCard weatherData={props.weatherData} location={props.location} />
      );
    } else if (props.cardType === 'daily-forecast') {
      return (
        <DailyCard weatherData={props.weatherData} location={props.location} />
      );
    }
  };

  // If a cardType was provided add it to the className with lowercase and dashes so it can be accessed through CSS
  let className = 'forecast-card-container ';

  return <div className={className}>{renderByType(props)}</div>;
};

ForecastCard.propTypes = {
  cardType: PropTypes.string.isRequired,
};

MainLarge.propTypes = {
  iconCode: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
};

export default ForecastCard;
