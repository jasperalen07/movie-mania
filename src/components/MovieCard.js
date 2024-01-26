
function MovieCard({movie}){
    return(
        
            <div key={movie.id} className="movie-card">
                <p>Title: {movie.original_title}</p>
                <p>Backdrop: {movie.backdrop_path}</p>
                <p>Release Date: {movie.release_date}</p>
                
                <img
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt={`Backdrop for ${movie.original_title}`}
                            style={{ maxWidth: "80%" }}
                        />

            </div>
        
    )
}

export default MovieCard