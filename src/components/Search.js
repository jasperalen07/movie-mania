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
    <div className='search-bar'>
    <form
      method='get'
      className='search_form'
      id='search-input'
      value='search'
      onSubmit={handleSubmit}
    >
      <label className='search'></label>
      <input type='text' id='search-input' name='search' placeholder = "Search"/>
      <button type="submit" className='search-button'>&#128269;</button>
    </form>
    </div>
  );
}

export default Search;
