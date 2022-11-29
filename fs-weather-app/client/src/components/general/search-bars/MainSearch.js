import { FaSearch } from 'react-icons/fa';
// import { useState } from 'react';
import Button from '../Button';
import SearchAutoComplete from './SearchAutoComplete';

const MainSearch = ({ setCoordinates, coordinates }) => {
  // AddTask component-level state
  //const [searchTerm, setSearchTerm] = useState("");

  let tempLat = coordinates.lat;
  let tempLon = coordinates.lon;

  const setTempCoords = (lat, lon) => {
    tempLat = lat;
    tempLon = lon;
  };

  const searchIcon = <FaSearch />;
  // const searchIcon = 'hello'

  // We do not want to call onSearch directly so we do the following
  const onSubmit = (error) => {
    error.preventDefault(); // Do not automatically go to a new page once submission happens.

    // Validate that coordinate state was updated from child-SearchAutoComplete
    console.log('from parent', coordinates);
    if (tempLat !== coordinates.lat && tempLon !== coordinates.lon) {
      setCoordinates({ lat: tempLat, lon: tempLon });
    }

    // Coordinates should now have correct values to call OpenWeather api
  };

  // const searchIcon = <FaSearch />
  // const searchIcon = 'hello'

  return (
    <div className="main-search shadow">
      <form className="form-control" onSubmit={onSubmit}>
        <label>Search City and State to view Weather</label>
        {/** SearchAutoComplete acts as input */}
        <SearchAutoComplete setTempCoords={setTempCoords} />
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
