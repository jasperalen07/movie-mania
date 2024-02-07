import Header from "../components/Header";
import FavoriteList from "../components/FavoriteFunction";
import MovieCard from "../components/MovieCard";


function FavouritePage({movie}) {
    return (
        
        <main>
            <Header />
            <FavoriteList movie ={movie} />





        </main>




    )
}

export default FavouritePage;