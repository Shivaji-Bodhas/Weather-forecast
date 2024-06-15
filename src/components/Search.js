import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location) {
      onSearch(location);
      setLocation('');
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city name or zip code"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
