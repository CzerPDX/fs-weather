import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const SearchAutoComplete = ({ setCoordinates }) => {
  const [city, setCity] = useState("");

  // Called once a user selects from the list of suggested cities. Populates
  // useState variable coordinates with the selected cities lat and lng
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const { lat, lng } = await getLatLng(results[0]);
    setCoordinates({ lat, lng });
    console.log("from child", lat, lng);
    setCity(value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={city}
        onChange={setCity}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              className="form-control form-control-lg"
              {...getInputProps({ placeholder: "City" })}
            />

            <div>
              {loading ? <div>...</div> : ""}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active && "green",
                  color: suggestion.active && "white",
                };
                console.log(suggestion);
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default SearchAutoComplete;
