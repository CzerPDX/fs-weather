import PropTypes from 'prop-types';
import HourlyCard from './forecast-display-cards/HourlyCard';
import DailyCard from './forecast-display-cards/DailyCard';
import CurrentCard from './forecast-display-cards/CurrentCard';

const ForecastCardBase = (props) => {
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

ForecastCardBase.propTypes = {
  cardType: PropTypes.string.isRequired,
  weatherData: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
};

export default ForecastCardBase;
