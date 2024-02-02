

 const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const API_ENDPOINT = "https://api.themoviedb.org/3";

console.log(API_TOKEN);

 function getPopularMovies() {
    return fetch(`${API_ENDPOINT}/movie/popular`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .catch((error) => {
        console.error("Error fetching popular movies:", error);
    });

    
    
}
   function getNowPlayingMovie  () {
    return fetch(`${API_ENDPOINT}/movie/now_playing`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .catch((error) => {
        console.error("Error fetching now playing movies", error)
    });

    
}

function getTopRatedMovie(){
    return fetch(`${API_ENDPOINT}/movie/top_rated`,{
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .catch((error) => {
        console.log("Error fetching top rated movies", error)
    });
}

function getUpcomingMovie(){
    return fetch(`${API_ENDPOINT}/movie/upcoming`,{
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .catch((error) => {
        console.log("Error fetching upcoming movies", error)
    });
}

function getMovieById(movieId){
    return fetch(`${API_ENDPOINT}/movie/${movieId}?append_to_response=videos`,{
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .catch((error) => {
        console.log("Error fetching movie id's", error)
    });
}

//fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)

function searchMovie(searchQuery){
    return fetch(`${API_ENDPOINT}/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,{
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .catch((error) => {
        console.log("Error fetching searched movies", error)
    });

    
   
}

export { getPopularMovies, getNowPlayingMovie, getTopRatedMovie, getUpcomingMovie, searchMovie, getMovieById};


