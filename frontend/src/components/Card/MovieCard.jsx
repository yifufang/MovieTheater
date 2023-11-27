import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({
  title,
  source,
  duration,
  rating,
  release_year,
  i,
}) {
  // convert title separated by space to separated by underscore
  let href_title = title.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().replace(/ /g,"_")
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/book-tickets/"+ href_title + "/showtime"; 
    navigate(path);
  }

  return (
    <div className="rounded overflow-hidden shadow-lg p-5" key={i}>
      <a className="" href={"/browse-movies/" + href_title}>
        <img
          className="object-contain h-80 w-80 hover:scale-105"
          src={source}
          alt={title}
        ></img>
        <h1 className="mt-3 text-lg font-bold">{title}</h1>
      </a>
      <p className="text-gray-600 font-bold text-sm">
        {duration} | {rating}
      </p>
      <p className="text-gray-600 font-bold text-sm">Released {release_year}</p>
      <button onClick={routeChange} className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-3xl">
        Get Tickets
      </button>
    </div>
  );
}
