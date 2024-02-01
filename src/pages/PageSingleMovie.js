import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { formatReleaseDate, filterVideos } from "../utilities/toolbelt";
import { getMovieById } from "../utilities/api";  // Import only the specific function you need


function PageSingleMovie() {
  const params = useParams();
  const id = params.id;
  const [movieData, setmovieData] = useState([]);
  const [movieVideos, setMovieVideos] = useState([]);

  useEffect(() => {
    getMovieById(id)
      .then((result) => {
        const youtubeTrailerVideos = filterVideos(result.videos.results);  // Assuming filterVideos is defined
        setmovieData(result);
        setMovieVideos(youtubeTrailerVideos);
      })
      .catch((error) => {
        alert(error);
      });
  }, [id]);
    console.log("movieData", movieData);
    console.log("movieVideos", movieVideos);

    return (
        <div className="movie-page">
            {movieData && (
            <>
            <h1>{movieData.title}</h1>
            <div>
                <h2>{formatReleaseDate(movieData.release_date)}</h2>
                
                <p>{movieData.overview}</p>

                <div className="movie-videos">
                <iframe
                src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                width="600"
                height="600"
                title={movieData.name}
              ></iframe>
                </div>
            </div>
            </>

            )}
        </div>
    );
}

export default PageSingleMovie;