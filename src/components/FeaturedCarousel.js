import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import getPopularMovies from "../utilities/api.js";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedCarousel = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const CustomPrevArrow = (props) => (
        <div {...props} className="slick-arrow slick-prev">
          {/* Customize the previous arrow (e.g., use an icon) */}
          <span>&lt;</span>
        </div>
      );
    
      const CustomNextArrow = (props) => (
        <div {...props} className="slick-arrow slick-next">
          {/* Customize the next arrow (e.g., use an icon) */}
          <span>&gt;</span>
        </div>
      );
  
    useEffect(() => {
        // Fetch popular movies using your utility function (getPopularMovies)
        getPopularMovies()
          .then((data) => {
            setFeaturedMovies(data.results);
          })
          .catch((error) => {
            console.error('Error fetching popular movies:', error);
          });
      }, []);
  
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: <CustomPrevArrow />, // Customize the previous arrow component
      nextArrow: <CustomNextArrow />,
    };


    console.log(featuredMovies);
  
    return (
      <Slider {...settings}>
        {featuredMovies.map(movie => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            {/* Add additional movie information or styling as needed */}
          </div>
        ))}
      </Slider>
    );
  };
  
  export default FeaturedCarousel;