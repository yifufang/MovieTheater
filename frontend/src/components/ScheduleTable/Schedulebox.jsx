import React, { useEffect, useState } from "react";
import SlidingScheduleButton from "./SlidingScheduleButton";

export default function Schedulebox({movie}) {
  return (
    <div className="shadow-md border border-gray-100 p-2 rounded bg-white mt-6 flex justify-between items-end">
      <div className="flex flex-col p-2">
        <p className="font-extrabold text-xl">{movie[1]}</p>
        <p className="font-light text-gray-700 text-sm">Movie ID: {movie[0]}</p>
      </div>
        <SlidingScheduleButton movie={movie}/>
    </div>
  );
}
