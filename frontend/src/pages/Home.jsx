import React, { useEffect, useState} from "react";
import CarouselDefault from "../components/Carousel/CarouselDefault";
import Statistics from "../components/Statistics/Statistics";
import CarouselMovies from "../components/Carousel/CarouselMovies";

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/other/GetAllMovieSchedule", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMoviesList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mb-10">
      <CarouselDefault />
      <CarouselMovies title={'NOW PLAYING'} movieList={moviesList}/>
      <CarouselMovies title={'POPULAR'} movieList={moviesList}/>
      <Statistics />
    </div>

  );
}