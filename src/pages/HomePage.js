import MoviesContainer from "../components/MoviesContainer.js";
import getPopularMovies from "../utilities/api.js";
import {useEffect, useState} from "react";

function HomePage() {
    const [popularMovies, setPopularMovies] = useState([]);
    console.log(popularMovies);
    useEffect(() => {
       getPopularMovies()
    .then( getMovies => {
         setPopularMovies(getMovies.results)
        console.log(getMovies);//shows objects of movies
    })
    },[])

    return(
       <main>
        <MoviesContainer title="Popular Movies" moviesData={popularMovies}/>
       </main>
    )

}

export default HomePage;