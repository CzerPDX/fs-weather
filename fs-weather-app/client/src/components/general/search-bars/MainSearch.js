/*
  References:
  https://developers.google.com/maps/documentation/javascript/react-map
*/

import { FaSearch } from 'react-icons/fa';
// import { useState } from 'react';
import Button from '../Button';
import SearchAutoComplete from './SearchAutoComplete';
import { Wrapper } from '@googlemaps/react-wrapper'
const KEY = process.env.REACT_APP_GOOGLE_AUTOCOMPLETE_API_KEY;

const MainSearch = ({ setCoordinates, coordinates }) => {
  let tempLat = coordinates.lat;
  let tempLon = coordinates.lon;

  const setTempCoords = (lat, lon) => {
    tempLat = lat;
    tempLon = lon;
  };

  const searchIcon = <FaSearch />;

  // We do not want to call onSearch directly so we do the following
  const onSubmit = (error) => {
    error.preventDefault(); // Do not automatically go to a new page once submission happens.

    // Validate that coordinate state was updated from child-SearchAutoComplete
    console.log('from parent', coordinates);
    if (tempLat !== coordinates.lat && tempLon !== coordinates.lon) {
      setCoordinates({ lat: tempLat, lon: tempLon });
    }
  };

  return (
    <div className="main-search">
      <form className="form-control" onSubmit={onSubmit}>
        <label>Search City and State to view Weather</label>
        {/** SearchAutoComplete acts as input */}
        <Wrapper apiKey={`${KEY}&libraries=places`}>
          <SearchAutoComplete setTempCoords={setTempCoords} />
        </Wrapper>
        
        <Button
          btnClasses="btn btn-primary"
          type="submit"
          text="Search Weather"
          icon={searchIcon}
        />
      </form>
    </div>
  );
};

export default MainSearch;
