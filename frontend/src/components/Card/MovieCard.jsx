import React, { useState, useEffect, useRef } from "react";

export default function MovieCard({
  title,
  source,
  duration,
  rating,
  release_year,
  i,
}) {
  return (
    <div className="rounded overflow-hidden shadow-lg p-5" key={i}>
      <a className="" href="">
        <img
          className="object-contain h-80 w-80 hover:scale-105"
          src={source}
          alt={title}
        ></img>
        <h1 className="text-lg">{title}</h1>
      </a>
      <p className="text-gray-800 text-sm">
        {duration} | {rating}
      </p>
      <p className="text-gray-800 text-sm">Released {release_year}</p>
      <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
        Get Tickets
      </button>
    </div>
  );
}
