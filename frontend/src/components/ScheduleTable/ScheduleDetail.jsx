import React, { useEffect, useState } from "react";
import MovieCards from "../MovieCards/MovieCards";
import Datetimepicker from "../Datetimepicker/Datetimepicker";
import Dropdownlist from "./Dropdownlist";

export default function ScheduleDetail({ movie }) {
  const [theater, setTheater] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const movie_info = {
    id: movie[0],
    title: movie[1],
    genres: JSON.parse(movie[3]),
    thumbnail: movie[6],
  };

  const list_name = (e) => {
    let a = JSON.parse(e);
    let list = "";
    a.forEach((genre) => {
      list += genre + ", ";
    });
    return list;
  };

  const HandleSubmit = () => {
    if (theater === "") {
      alert("Please select theater!");
      return;
    }
    if (selectedDate === "") {
      alert("Please select start time!");
      return;
    }
    console.log(selectedDate);
    fetch("http://localhost:5000/employee/schedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        theater_id: theater,
        movie_id: movie_info.id,
        start_time: selectedDate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          alert("Add schedule successfully!");
        }
        else {
          alert("Add schedule failed!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="w-1/2">
          <MovieCards title={movie_info.title} thumbnail={movie_info.thumbnail} />
        </div>
        <div className="w-1/2">
          <div className="flex flex-col p-2">
            <p className="font-extrabold text-xl">{movie[1]}</p>
            <p className="font-light text-gray-700 text-sm">
              Movie ID: {movie[0]}
            </p>
            <div>
              <p className="font-bold">Movie Casts: </p>
              {list_name(movie[3])}
            </div>
            <div>
              <p className="font-bold">Movie Genres: </p>
              {list_name(movie[4])}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center light">
        <div className="w-full bg-white rounded-lg shadow-md p-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Schedule for "{movie[1]}"
          </h2>
          <div className="flex flex-col">
            <Dropdownlist
              HandleSetTheater={(e) => {
                setTheater(e);
              }}
            />
            <p>
              <span className="font-bold">Start Time: </span>
            </p>
            <Datetimepicker onDateChange={(e)=>{
              setSelectedDate(e);
            }} />

            <button
              className="bg-indigo-500 text-white rounded px-4 py-2 mt-4 hover:bg-indigo-900 transform active:scale-75 transition-transform"
              onClick={HandleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
