import { useState } from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from 'react-router-dom';

const FavoriteList = ({ movie }) => {
  const [favorites, setFavorites] = useState([]);
  const [favoriteButton,setFavoriteButton] = useState(false);
  const navigate = useNavigate();


  const addFavorite = () => {
    setFavoriteButton(!favoriteButton);
    const hasFavorited = favorites.some((item) => item.id === movie.id);
    localStorage.setItem('favorites', JSON.stringify([...favorites, movie]));

    if (!hasFavorited) {
      setFavorites([...favorites, movie]);
    } else {
      const updatedFavorites = favorites.filter((item) => item.id !== movie.id);
      setFavorites(updatedFavorites);
    }
  };

  return (
    <div>
      <button onClick={addFavorite} className= {`${favoriteButton ? "favorite-button-active":"favorite-button"  }`}>&#9733;</button>
     
      {/* <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.title}{favorite.moviePortrait}</li>
          
        ))}
        
      </ul> */}
    </div>
  );
};

export default FavoriteList;
