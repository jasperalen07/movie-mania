import { useNavigate, Link } from "react-router-dom";
import { formatReleaseDate } from "../utilities/toolbelt";

import ImageComponent from "./ImageFunction";
function MovieCard({movie}){
    const navigate = useNavigate();
    return(

        

        <main>
            <div key={movie.id} className="movie-card" onClick={() => {
                navigate(`/movie/${movie.id}`);
              }} >
                <Link>{movie.original_title}</Link>
                </div>
                <p>{formatReleaseDate(movie.release_date)}</p>
                <p>Rating: {movie.vote_average}</p>
                
                <ImageComponent movie = {movie}></ImageComponent>
                {/* Moved into ImageFunctions to make code cleaner.
                
                <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`Backdrop for ${movie.original_title}`}
                            style={{ maxWidth: "80%" }}
                            />  */}
        
                            
                            </main>
    );
}

export default MovieCard