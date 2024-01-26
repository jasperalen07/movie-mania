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
    },[popularMovies])

    return(
        <div>
<h1>Hello This will be a Movie Database</h1>
        </div>
    )

}

export default HomePage;