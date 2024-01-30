import MovieCard from "./MovieCard";
import {useState} from "react";

// function for movies
const ImageComponent = ({ movie }) => {
    // set showParagraph and darkerImage to false
    const [showParagraph , setShowParagraph] = useState(false);
    const [darkerImage, setDarkerImage] = useState(false);

    
    // handleImageClick function, inverse the boolean when click on the image.
    const handleImageClick = () => {
        setShowParagraph(!showParagraph);
        setDarkerImage(!darkerImage);
    };

    return (
        <div className="movie-container">
        <img
        // give className when clicked on image
        className= {`${darkerImage ? "darkImage" : "BrightImage"}`}
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={`Backdrop for ${movie.original_title}`}
        onClick={handleImageClick}
        
        />
        {/*  give className when clicked on image */}
        <div className={`details ${showParagraph ? "show" : "hide"}`} >
        <p className="rating">{movie.vote_average}/10</p>
        <p>Overview: {movie.overview}</p>
        <button className="button">Details</button>
        </div>
        </div>
    );



};

export default ImageComponent;