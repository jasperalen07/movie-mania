import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  


<form action='/search'
 method='get' 
 className='search_form'
 id='search-input'
 value='search'
 onSubmit={handleSubmit}
 > 
<label className='search'  > Search a movie</label>
<input type='text' id='search-input' name='search'  />


 
</form>
  

}