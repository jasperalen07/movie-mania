import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { formatReleaseDate, filterVideos, formatRunTime } from "../utilities/toolbelt";
import { getMovieById } from "../utilities/api"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import FavoriteList from "../components/FavoriteFunction";







function PageSingleMovie() {
  const params = useParams();
  const id = params.id;
  const [movieData, setmovieData] = useState('');
  const [movieVideos, setMovieVideos] = useState([]);
  const navigate = useNavigate();
  

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

      <div className="backdrop-container">
      <img
           className="backdrop-image"
           src={`https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`}
           alt={`Backdrop for ${movieData}`}
           ></img>

      </div>

      
        <div className="poster-container">
          <div className="movie-wrapper">
       
          <img
          className="poster-image"
           src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
           alt={`Backdrop for ${movieData.original_title}`}
          ></img>
              <FavoriteList movie = {movieData}></FavoriteList>
</div>
        </div>
      
      
     
           
           

            {movieData && (
              <>
              
            <h1 className="movie-title">{movieData.title}</h1>
                  <p className="movie-duration">{formatRunTime(movieData.runtime)}</p>

               

            <div className="movie-release-container">
                <p className="movie-date">{formatReleaseDate(movieData.release_date)}</p>

              <div className="genre-container">
                <ul className="movie-genre">
                  {movieData.genres.map((genre, index) =>(
                    <li key={index}>
                      {index > 0 ? ' ' : ''}
                      <span>{genre.name}</span>
                    </li>
                  ))}
                </ul>

              </div>
                
                <p className="movie-overview">{movieData.overview}</p>


                <div className="movie-videos">
                 {movieVideos.length > 0 ? (



                <iframe
                className="movie-trailer"
                  src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                  width="450"
                  height="450"
                  title={movieData.title}
                >
                </iframe>
              ) : (
                <p className="movie-warning">There is no trailer available.</p>
              )}
            </div>
          </div>
            <h2>Main Casts</h2>
          <div className="cast-container">
            {movieData.credits.cast.slice(0, 5).map((actor) => (
              <div className="actor-container" key={actor.id}>
                {actor.profile_path === null ? (
                  <img className="placeholder" src='placeholder.jpg' alt='Placeholder' />
                ) : (
                  <img className="actor-image" src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={`${actor.name} profile`} />
                )}

                <div className="cast-name-container">
                <p className="cast-name">{actor.name}</p>
                 <p className="char-name">{actor.character}</p>

                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
    <Footer/>
  </main>
  
  

    );
}

export default PageSingleMovie;