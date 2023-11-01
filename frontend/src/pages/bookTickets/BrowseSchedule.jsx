import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// for now we import sample data, later we will make api call
import ShowtimeCard from "../../components/Card/ShowtimeCard";
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
import sampleMovies from "../../Statics/movieSample.json";
const images = new Map([
  ["five_nights_at_freddys", img1],
  ["killers_of_the_flower_moon", img2],
  ["after_death", img3],
  ["freelance", img4],
  ["the_exorcist_believer", img5],
  ["priscilla", img6],
  ["miracle_in_east_texas", img7],
  ["paw_patrol_the_mighty_movie", img8],
  ["saw_x", img9],
  ["the_nun_2", img10],
]);

const theaterLocations = [
  "Alpha Metreon 10",
  "Alpha BayStreet 16",
  "Alpha NewPark 12",
  "Alpha Center 20",
];

const movieDate = ["Mon, Oct 1", "Tue, Oct 2", "Wed, Oct 3", "Thu, Oct 4"];

const movies = [
  "Five Nights at Freddys",
  "Killers of The Flower Moon",
  "After Death",
  "Freelance",
  "The Exorcist Believer",
  "Priscilla",
  "Miracle in East Texas",
  "Paw Patrol The Mighty Movie",
  "Saw X",
  "The Nun 2",
];

export default function BrowseSchedule() {
  let { title } = useParams();
  console.log(title)
  let duration = null;
  let image = findCurrentMovieImage(title);
  let sTitle = convertToSpace(title);
  console.log(sTitle);
  findCurrentMovieInfo(title);
  const [selectLocation, SetSelectLocation] = useState();
  const [selectDate, SetSelectDate] = useState();
  const [selectMovie, SetSelectMovie] = useState(sTitle);

  //convert title to text separated with underscore
  function convertToUnderscore(title) {
    return (title = title
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .toLowerCase()
      .replace(/ /g, "_"));
  }

  //convert title to text separated with space
  function convertToSpace(title) {
    let preps = ["of", "on", "and", "or", "in", "a", "at"];
    title = title.split("_");
    for (let i = 0; i < title.length; i++) {
      if (preps.indexOf(title[i]) === -1) {
        title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
      }
    }
    title = title.join(" ");
    return title;
  }

  function findCurrentMovieImage() {
    let image;
    [...images.keys()].forEach((key) => {
      console.log("key:", key)
      console.log("title:", title)
      if (title === key) {
        image = images.get(key);
      }
    });
    return image;
  }

  function findCurrentMovieInfo(title) {
    for (let i = 0; i < sampleMovies.length; i++) {
      let uTitle = convertToUnderscore(sampleMovies[i].title);
      if (title === uTitle) {
        duration = sampleMovies[i].duration;
        break;
      }
    }
  }

  //We will later implement api call to retrive movie info from backend

  return (
    <div className="">
      <div className="w-full h-10 flex text-xl bg-black">
        <h1 className="m-auto justify-center font-bold text-white">Showtimes</h1>
      </div>
      <div className="flex text-2xl justify-center items-center space-x-5 m-1">
        <select
          className="border-solid border-2 border-black"
          value={selectLocation}
          onChange={(e) => SetSelectLocation(e.target.value)}
        >
          {theaterLocations.map((location) => (
            <option>{location}</option>
          ))}
        </select>
        <select
          className="border-solid border-2 border-black"
          value={selectDate}
          onChange={(e) => SetSelectDate(e.target.value)}
        >
          {movieDate.map((date) => (
            <option>{date}</option>
          ))}
        </select>
        <select
          className="border-solid border-2 border-black"
          value={selectMovie}
          onChange={(e) => SetSelectMovie(e.target.value)}
        >
          {movies.map((movie) => (
            <option>{movie}</option>
          ))}
        </select>
      </div>
      {/* <div className="w-full m-5 justify-center flex">
        <img src={image} className="h-20 w-20 rounded-full" alt="movie"></img>
        <h1 className="text-4xl font-bold p-5">{sTitle}</h1>
      </div> */}
      <div>
      {/* {sampleMovies.map((movie, i) => (
        <ShowtimeCard
          title={movie.title}
          source={images[i]}
          duration={movie.duration}
          rating={movie.rating}
          release_year={movie.release_year}
          key={i}
        ></ShowtimeCard>
      ))} */}
      </div>
    </div>
  );
}
