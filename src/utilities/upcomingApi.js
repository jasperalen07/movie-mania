const API_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
const API_ENDPOINT = "https://api.themoviedb.org/3";





export default function getUpcomingMovies() {
    return fetch(`${API_ENDPOINT}/movie/upcoming`, {
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

export { getUpcomingMovies};