import { useState } from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import {GlobalContext} from  "../context/GlobalContext";
import ImageComponent from "./ImageFunction";

function FavoriteList({ movie }) {
  const { favorites, addToFavorites, removeFromFavorites} = 
    useContext(GlobalContext);

    const isFavorited = favorites.find((fav) => {
      return fav.id === movie.id;
    });

    function handleFavorite(event) {
      event.stopPropagation();
      if(isFavorited) {
        removeFromFavorites(movie);

      }else{
        addToFavorites(movie);
      }
    }

    return (
      <>
       <button onClick={handleFavorite} className={`${isFavorited ? "favorite-button-active":"favorite-button"  }`}>&#9733;</button>
      </>
    )
}

export default FavoriteList;

// const FavoriteList = ({ movie }) => {
//   const [favorites, setFavorites] = useState([]);
//   const [favoriteButton,setFavoriteButton] = useState(false);
//   const navigate = useNavigate();


//   const addFavorite = () => {
//     setFavoriteButton(!favoriteButton);
//     const hasFavorited = favorites.some((item) => item.id === movie.id);

//     if (!hasFavorited) {
//       const newFavorites = [...favorites, movie];
//       setFavorites(newFavorites);
//       localStorage.setItem('favorites', JSON.stringify(newFavorites));
//     } else {
//       const updatedFavorites = favorites.filter((item) => item.id !== movie.id);
//       setFavorites(updatedFavorites);
//       localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//     }
//   };


//     <div>
//       <button onClick={addFavorite} className={`${favoriteButton ? "favorite-button-active":"favorite-button"  }`}>&#9733;</button>
     
//       {/* <ul>
//         {favorites.map((favorite) => (
//           <li key={favorite.id}>{favorite.title}{favorite.moviePortrait}</li>
          
//         ))}
        
//       </ul> */}
//     </div>
//   );
// };


