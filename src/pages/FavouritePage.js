import React, { useContext } from 'react'
import { useEffect,useState  } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import ImageComponent from '../components/ImageFunction';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FavoriteList from '../components/FavoriteFunction';

function FavoritePage() {

    const {favorites} = useContext(GlobalContext);
    // const {favorite,setFavorite} = useState([]);
    
        
        // useEffect(() => {
        //     if(favorites === null ) {
        //         setFavorite([]);
        //     }else{
        //         setFavorite(favorites);
        //     }
        // },[favorites]);
        
        console.log(favorites);
    

    return (
        <section>
            <Header/>
        <div className='movie-card-flex-wrapper'>
            <div className='movie-wrapper'>
                <div className='favorite-page-flex'>
            {favorites.length === 0  || favorites[0] === null ?  <p>Please add your favorite Movies</p> :
            favorites.map((movie) => 
            <ImageComponent key = {movie.id} movie ={movie}/>)
            }
            
            
            </div>
            </div>
        </div>
            <Footer/>
        </section>
    )

    
    



};
export default FavoritePage;
//   const { favorites } = useContext(GlobalContext);

//   return (
//     <div>
//       <h2>Favorite Movies</h2>
//       <ul>
//         {favorites.map((movie) => (
//           <li key={movie.id}></li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// function FavouritePage() {
//     const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     const [favoriteMovies, setFavoriteMovies] = useState([]);

//     useEffect(() => {
//         // Retrieve list of favorite movie IDs from browser storage
//         const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//         // Fetch movie details for each favorite movie ID
//         Promise.all(storedFavorites.map(id => getMovieById(id)))
//             .then(movies => setFavoriteMovies(movies))
//             .catch(error => console.error('Error fetching favorite movies:', error));
//     }, []);

//     return (
//         <main>
//             <Header />
//             <FavoriteList />
//             <h1>Favorite Movies</h1>
//             <div className="movie-cards">
//                 {favoriteMovies.length > 0 && favoriteMovies.map((favorite) => (
//                     favorite && <MovieCard key={favorite.id} movie={favorite} />
//                 ))}
//             </div>
//             <Footer />
//         </main>
//     );
// }


