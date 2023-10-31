import React, { useEffect, useState } from "react";
import sampleMovies from "../../Statics/movieSample.json";
import MovieCard from "../../components/Card/MovieCard";
// we have to import sample images first since relative path will not work in create-react-app
import img1 from "../../Statics/movieImages/five_nights_at_freddys.jpg";
import img2 from "../../Statics/movieImages/killers_of_the_flower_moon.jpg";
import img3 from "../../Statics/movieImages/after_death.jpg";
import img4 from "../../Statics/movieImages/freelance.jpg";
import img5 from "../../Statics/movieImages/the_exorcist_believer.jpg";
import img6 from "../../Statics/movieImages/priscilla.jpg";
import img7 from "../../Statics/movieImages/miracle_in_east_texas.jpg";
import img8 from "../../Statics/movieImages/paw_patrol_the_mighty_movie.jpg";
import img9 from "../../Statics/movieImages/saw_x.jpg";
import img10 from "../../Statics/movieImages/the_nun_2.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function BrowseMovies() {
  return (
    <div className="grid gap-1 grid-cols-5 mx-64">
      {sampleMovies.map((movie, i) => (
        <MovieCard
          title={movie.title}
          source={images[i]}
          duration={movie.duration}
          rating={movie.rating}
          release_year={movie.release_year}
          key={i}
        ></MovieCard>
      ))}
    </div>
  );
}
