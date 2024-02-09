import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getPopularMovies } from '../utilities/api.js';
import { useNavigate } from 'react-router-dom';
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


  console.log(featuredMovies);

  return (
    <Slider {...settings}>
      {featuredMovies.map(movie => (
        <div className='carousel-flex-container' key={movie.id} onClick={() => {
          navigate(`/movie/${movie.id}`);
        }}>
          <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
          <div className="black-border"></div>
          <h3 className='banner-movie-title'>{movie.title}</h3>
          <p className='banner-movie-description'>{truncateOverview(movie.overview, 100)}</p>
        </div>
      ))}
    </Slider>
  );
};

export default FeaturedCarousel;