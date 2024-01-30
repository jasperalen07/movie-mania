import MoviesContainer from "../components/MoviesContainer.js";
import getPopularMovies from "../utilities/api.js";
import getUpcomingMovies from "../utilities/upcomingApi.js";
import {useEffect, useState} from "react";
import Header from "../components/Header.js";




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

    const [upcomingMovies, setUpcomingMovies] = useState([]);
    console.log(upcomingMovies);
    useEffect(() => {
       getUpcomingMovies()
    .then( getUpcomingMovies => {
         setUpcomingMovies(getUpcomingMovies.results)
        console.log(getUpcomingMovies);//shows objects of movies
    })
    },[])

    return(

       
       
       <main>
          <Header />
         
        <MoviesContainer title="Popular Movies" moviesData={popularMovies}/>
        <h1>upcoming movies</h1>
        <MoviesContainer title="upcoming Movies" moviesData={upcomingMovies}/>
       </main>
    )

}

export default HomePage;