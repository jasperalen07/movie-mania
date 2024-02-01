import { useNavigate } from "react-router-dom";
function MovieCard({movie}){
    const navigate = useNavigate();
    return(

        

        
            <div key={movie.id} className="movie-card" onClick={() => {
                navigate(`/movie/${movie.id}`);
              }} >
                <p> {movie.original_title}</p>
                <p> {movie.release_date}</p>
                
                <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`Backdrop for ${movie.original_title}`}
                            style={{ maxWidth: "80%" }}
                        />

            </div>
        
    );
}

export default MovieCard