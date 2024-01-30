import ImageComponent from "./ImageFunction";

function MovieCard({movie}){
    
    
    
    
    return(
        




        
            <div key={movie.id} className="movie-card">
                <p>Title: {movie.original_title}</p>
                <p>Backdrop: {movie.backdrop_path}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>rating : {movie.vote_average}</p>
                
                <ImageComponent movie = {movie}></ImageComponent>

            </div>
        
    )
}


export default MovieCard