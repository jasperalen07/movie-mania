// const API_TOKEN = process.env.REACT_APP_TMBD_TOKEN;
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWIxNzAwMzhmNWVhY2UxYjMzMDU3NWNiNjU1N2FiMCIsInN1YiI6IjY1YWViNDI0MTU4Yzg1MDBhYzFjYTFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OONdT5plaHA6Xa_krewPQc7Qm6Z8XAl5WYuNdoQwiRo"
const API_ENDPOINT = "https://api.themoviedb.org/3";

console.log(API_TOKEN);

export default function getPopularMovies() {
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

export { getPopularMovies};


