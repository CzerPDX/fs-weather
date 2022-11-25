import './index.css';
import MainPage from './routes/MainPage';
import { useState } from 'react';
import TestCurrentWeather from './components/forecasts/TestCurrentWeather';
import Header from './components/general/Header';
import SearchBarAndResults from './components/forecasts/SearchBarAndResults';

const App = () => {
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lgn: null,
  });
  let show;
  if (coordinates.lat === null && coordinates.lgn === null) {
    show = '';
  } else {
    show = (
      <div>
        <TestCurrentWeather
          lat={coordinates.lat}
          lon={coordinates.lon}
          cardType="main-large"
        />
        <TestCurrentWeather
          lat={coordinates.lat}
          lon={coordinates.lon}
          cardType="hourly-forecast"
        />
      </div>
    );
  }
  return (
    <div className="mainPage">
      <Header headerTitle="FS Weather" headerClasses="p-3 bg-dark text-white" />
      <SearchBarAndResults
        setCoordinates={setCoordinates}
        coordinates={coordinates}
      />
    </div>
  );
};

export default App;
