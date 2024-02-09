import MovieCard from "./MovieCard";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { formatReleaseDate } from "../utilities/toolbelt";
import NoImage from "../images/No-Image.jpg"



// function for movies
const ImageComponent = ({ movie }) => {
    // set showParagraph and darkerImage to false
    const [showParagraph, setShowParagraph] = useState(false);
    const [darkerImage, setDarkerImage] = useState(false);






    // handleImageClick function, inverse the boolean when click on the image.
    const handleImageClick = () => {
        setShowParagraph(!showParagraph);
        setDarkerImage(!darkerImage);


    };



    const navigate = useNavigate();


    return (
        <div className="movie-container"
            onMouseEnter={() => {
                setShowParagraph(true)
                setDarkerImage(true)
            }}
            onMouseLeave={() => {
                setShowParagraph(false)
                setDarkerImage(false)
            }}>

            <img
                // give className when clicked on image
                className={`${darkerImage ? "darkImage" : "BrightImage"}`}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`Backdrop for ${movie.original_title}`}
                onError={(e) => {

                    e.target.src = NoImage;
                }}
                onClick={() => {
                    // if windowwidth = 631px, apply function. 
                    const windowWidth = window.innerWidth;
                    if (windowWidth <= 631) {
                        handleImageClick();
                    } else {



                        navigate(`/movie/${movie.id}`);
                    }

                }}


            />



            {/*  give className when clicked on image */}
            <div className={`details ${showParagraph ? "show" : "hide"}`} >
                <p className="rating">{movie.vote_average.toFixed(1)}/10</p>
                <p>Overview: {movie.overview}</p>

            </div>

            <div key={movie.id} className={`movie-card ${showParagraph ? "show" : "hide"}`} onClick={() => {
                navigate(`/movie/${movie.id}`);
            }} >

                <button className="details-button">More Info</button>

            </div>

        </div>
    );



};

export default ImageComponent;