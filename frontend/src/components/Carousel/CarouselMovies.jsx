import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCards from "../MovieCards/MovieCards";
import movieData from "../../Statics/movies.json";

export default function CarouselMovies({title}) {
  const movies = movieData.slice(0,20).map((movie) => {
    return <MovieCards movie={movie} />;
  });
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 7,
    slidesToScroll: 2,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-4 pt-4">
      <h2 className="font-extrabold text-3xl w-1/2 mx-auto">{title}</h2>
      <Slider {...settings} className="px-10 mx-auto">
        {movies}
      </Slider>
    </div>
  );
}
