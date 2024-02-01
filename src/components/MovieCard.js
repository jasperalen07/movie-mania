
function MovieCard({movie}){
    return(
        
            <div key={movie.id} className="movie-card">
                <p>Title: {movie.original_title}</p>
                <p>Release Date: {movie.release_date}</p>
                
                <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`Backdrop for ${movie.original_title}`}
                            style={{ maxWidth: "80%" }}
                        />

            </div>
        
    )
}

export default MovieCard