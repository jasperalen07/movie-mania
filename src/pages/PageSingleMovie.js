import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { formatReleaseDate, filterVideos } from "../utilities/toolbelt";
import { getMovieById } from "../utilities/api"; 
import Header from "../components/Header";





function PageSingleMovie() {
  const params = useParams();
  const id = params.id;
  const [movieData, setmovieData] = useState('');
  const [movieVideos, setMovieVideos] = useState([]);
  

  useEffect(() => {
    getMovieById(id)
      .then((result) => {
        console.log("test", result.videos.results)
        const youtubeTrailerVideos = filterVideos(result.videos.results);
        setmovieData(result);
        setMovieVideos(youtubeTrailerVideos);
        console.log('cast', result.credits.cast);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
    console.log("movieData", movieData);
    console.log("movieVideos", movieVideos);

    

    return (
      <main>
        <Header></Header>
      <div className="movie-page">

      <img
           
           src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
           alt={`Backdrop for ${movieData}`}
           style={{ maxWidth: "100%" }}></img>

            {movieData && (
              <>
              
            <h1>{movieData.title}</h1>
            <div>
                <h2>{formatReleaseDate(movieData.release_date)}</h2>
                
                <p>{movieData.overview}</p>

                <div className="movie-videos">
                 {movieVideos.length > 0 ? (



                <iframe
                  src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                  width="450"
                  height="450"
                  title={movieData.title}
                >
                </iframe>
              ) : (
                <p>There is no trailer available.</p>
              )}
            </div>
          </div>
          <div className="cast-lists">
            {movieData.credits.cast.slice(0, 5).map((actor) => (
              <div key={actor.id}>
                {actor.profile_path === null ? (
                  <img src='placeholder.jpg' alt='Placeholder' />
                ) : (
                  <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={`${actor.name} profile`} />
                )}
                <p>{actor.name} as {actor.character}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  </main>

    );
}

export default PageSingleMovie;