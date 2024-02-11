import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from "react-router-dom";
import { getPopularMovies } from '../utilities/api.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const truncateOverview = (overview, maxLength) => {
  if (overview.length <= maxLength) {
    return overview;
  }
  return overview.substring(0, maxLength) + '...';
};

const FeaturedCarousel = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const navigate = useNavigate();
  const CustomPrevArrow = (props) => (
    <div {...props} className="slick-arrow slick-prev slick-button-customize">
      <span>&lt;</span>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div {...props} className="slick-arrow slick-next">
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

  };

  // const navigate = useNavigate();
  console.log(featuredMovies);

  return (
    <Slider {...settings}>
      {featuredMovies.map(movie => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{truncateOverview(movie.overview, 100)}</p>
          {/* Add additional movie information or styling as needed */}
        </div>
      ))}
    </Slider>
  );
};

export default FeaturedCarousel;