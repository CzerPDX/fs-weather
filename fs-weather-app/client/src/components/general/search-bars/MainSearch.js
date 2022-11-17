import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Button from "../Btn";
import SearchAutoComplete from "./SearchAutoComplete";

const MainSearch = ({ onSearch }) => {
  // AddTask component-level state
  //const [searchTerm, setSearchTerm] = useState("");

  // coordinate State is passed as a prop to child
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lgn: null,
  });
  const searchIcon = <FaSearch />;
  // const searchIcon = 'hello'

  // We do not want to call onSearch directly so we do the following
  const onSubmit = (error) => {
    error.preventDefault(); // Do not automatically go to a new page once submission happens.

    // Validate that coordinate state was updated from child-SearchAutoComplete
    console.log("from parent", coordinates);

    // Coordinates should now have correct values to call OpenWeather api
  };

  // const searchIcon = <FaSearch />
  // const searchIcon = 'hello'

  return (
    <div className="large-search-bar container">
      <form className="form-control" onSubmit={onSubmit}>
        <label>Search City and State to view Weather</label>
        {/** SearchAutoComplete acts as input */}
        <SearchAutoComplete setCoordinates={setCoordinates} />
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
