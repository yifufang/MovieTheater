import React, { useEffect, useState } from "react";
import SearchbarSlidingMovieDetail from "./SearchbarSlidingMovieDetail";

export default function Schedulebox({title, id}) {
  return (
    <div className="shadow-md border border-gray-100 p-2 rounded bg-white mt-6 flex justify-between items-end">
      <div className="flex flex-col p-2">
        <p className="font-extrabold text-xl">{title}</p>
        <p className="font-light text-gray-700 text-sm">Movie ID: {id}</p>
      </div>
        <SearchbarSlidingMovieDetail />
    </div>
  );
}
