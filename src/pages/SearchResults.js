

import React, { useEffect, useState } from 'react'
import { searchMovie } from '../utilities/api'
import { useLocation, useParams } from 'react-router'
import MoviesContainer from '../components/MoviesContainer';
// import { URLSearchParams } from 'url';

export default function SearchResults() {
const [searchMovieResults, setSearchMovieResults] = useState([]);
// const {query} = useParams()
const location = useLocation()
const searchQuery = new URLSearchParams(location.search).get('query')

useEffect(() => {
    if(searchQuery) {
        searchMovie(searchQuery).then((data =>{
            console.log(data)
            setSearchMovieResults(data.results)
    
        }))

    }
}, [searchQuery])
// console.log(query)


  return (
    <div>
      <MoviesContainer title="" moviesData={searchMovieResults}/>
    </div>
  )
}
