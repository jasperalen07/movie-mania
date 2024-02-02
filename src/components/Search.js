import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Search() {
  // const [query, setQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements['search'].value;
    console.log(event);
    console.log(searchValue);
   

    navigate(`/searchResults?query=${searchValue}`);
  };

  return (
    <form
      method='get'
      className='search_form'
      id='search-input'
      value='search'
      onSubmit={handleSubmit}
    >
      <label className='search'> Search </label>
      <input type='text' id='search-input' name='search' />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
