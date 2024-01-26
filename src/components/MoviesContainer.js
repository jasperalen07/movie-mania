import MovieCard from "./MovieCard";


function MoviesContainer ({title, moviesData}) {



console.log(moviesData);


    return (
        <section className="movies-container">
            <h2>{title}</h2>
            <div className="movie-cards">

        {moviesData.map(movie =>(
            <MovieCard key={movie.id} movie={movie} />
        ))}
            </div>
            </section>
    )
}

export default MoviesContainer;