import React, { useState } from 'react';



function Search() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Query', query);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  
return (

<form 
 method='get' 
 className='search_form'
 id='search-input'
 value='search'
 onSubmit={handleSubmit}
 > 
<label className='search'  > Search </label>
<input type='text' id='search-input' name='search'  />
 <button type="submit">Search</button>

 
</form>
)

  

}

export default Search