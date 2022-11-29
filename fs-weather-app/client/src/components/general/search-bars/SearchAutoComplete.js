import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const SearchAutoComplete = ({ setTempCoords }) => {
  const [city, setCity] = useState('');
  const renderFunc = ({
    getInputProps,
    suggestions,
    getSuggestionItemProps,
    loading,
  }) => (
    <div>
      <input
        className="form-control form-control-lg"
        {...getInputProps({ placeholder: 'City' })}
      />

      <div>
        {loading ? <div>...</div> : ''}
        {suggestions.map((suggestion) => {
          console.log(suggestion);
          const style = {
            backgroundColor: suggestion.active && 'green',
            color: suggestion.active && 'white',
          };
          return (
            <div
              key={suggestion.placeId}
              {...getSuggestionItemProps(suggestion, { style })}
            >
              {suggestion.description}
            </div>
          );
        })}
      </div>
    </div>
  );

  // Called once a user selects from the list of suggested cities. Populates
  // useState variable coordinates with the selected cities lat and lng
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const { lat, lng } = await getLatLng(results[0]);
    setCity(value);
    setTempCoords(lat, lng, value);
    console.log('results', results);

    console.log('from child', lat, lng, value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={city}
        onChange={setCity}
        onSelect={handleSelect}
      >
        {renderFunc}
      </PlacesAutocomplete>
    </div>
  );
};

export default SearchAutoComplete;
