import Header from "../components/Header";
import FavoriteList from "../components/FavoriteFunction";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import { useEffect, useState } from 'react';
import { getMovieById } from '../utilities/api';


function FavouritePage({movie}) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        // Retrieve list of favorite movie IDs from browser storage
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        // Fetch movie details for each favorite movie ID
        Promise.all(storedFavorites.map(id => getMovieById(id)))
            .then(movies => setFavoriteMovies(movies))
            .catch(error => console.error('Error fetching favorite movies:', error));
    }, []);
    return (
        
        <main>
            <Header />
            <FavoriteList movie ={movie} />
            <h1>Favorite Movies</h1>
      <div className="movie-cards">
        {favorites.map((favorite) => (
          <MovieCard key={favorite.id} movie={favorite} />
        ))}
      </div>



            <Footer />
        </main>




    );
}

export default FavouritePage;