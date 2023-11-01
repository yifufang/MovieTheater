import React from "react";
import { useNavigate } from "react-router-dom";

export default function ShowtimeCard({
  title,
  source,
  duration,
  rating,
  release_year,
  showtime,
  i,
}) {
  console.log(showtime);
  return (
    <div className="w-2/3 m-auto justify-center rounded overflow-hidden shadow-lg p-5" key={i}>
      <div className="flex w-full m-5 justify-center">
        <img src={source} className="h-20 w-20 rounded-full" alt="movie"></img>
        <div>
          <h1 className="text-4xl font-bold px-5">{title}</h1>
          <p className="text-gray-600 font-bold text-sm px-5">
            {duration} | {rating}
          </p>
        </div>
      </div>
      <div className="flex w-full m-5 justify-center space-x-5">
        {showtime.map((time, i) => (
          <button
            className="text-black font-bold py-2 px-4 rounded-3xl border border-black hover:text-red-500 hover:border-red-500"
            key={i}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
