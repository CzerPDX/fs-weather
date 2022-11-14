import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const SearchAutoComplete = () => {
  const [address, setAddress] = useState("");
  let lat;
  let lng;

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const { lat, lng } = await getLatLng(results[0]);
    console.log(lat, lng);
    setAddress(value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
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
