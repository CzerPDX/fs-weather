import './index.css';
import MainPage from './routes/MainPage';
import { useState } from 'react';
import TestCurrentWeather from './components/forecasts/TestCurrentWeather';
import Header from './components/general/Header';
import SearchBarAndResults from './components/forecasts/SearchBarAndResults';

const App = () => {
  return (
    <div className="mainPage">
      <Header headerTitle="FS Weather" headerClasses="p-3 bg-dark text-white" />
      <MainPage></MainPage>
    </div>
  );
};

export default App;
