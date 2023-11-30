import React, { useEffect } from "react";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

export default function MovieBox({ info }) {
    const Date = dayjs(info[3]).format("DD MMM YYYY");
    const startTime = dayjs(info[3]).add(8, "hour").format("HH:mm");
    const endTime = dayjs(info[3]).add(10, "hour").format("HH:mm");

    const movie_info = {
        id: info[4],
        title: info[5],
        thumbnail: info[10],
        schedule_id: info[0],
        date: Date.toString(),
        start_time: startTime.toString(),
        end_time: endTime.toString(),
    };
    const HandleRemove = () => {
        if (window.confirm('Are you sure you want to remove this schedule?')) {
            fetch("http://localhost:5000/employee/Remove", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    schedule_id: movie_info.schedule_id,
                }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("Schedule Removed!");
            })
            .catch((err) => console.log(err));
        }
    };
  return (
    <div className="flex justify-between mt-6">
        <img src = {movie_info.thumbnail} alt = "movie poster" className = "w-32 h-65 shadow-md p-1"></img>
      <div className="shadow-md border border-gray-100 p-2 rounded bg-white flex justify-between items-center w-full ml-5">
        <div className="flex flex-col p-2 w-1/5 border-r-2">
          <p className="font-extrabold text-xl">{movie_info.title}</p>
          <p className="font-light text-gray-700 text-sm">Movie ID: {movie_info.id}</p>
        </div>
        <div className="flex flex-col p-2 w-1/5 border-r-2">
          <p className="font-extrabold text-xl">Date</p>
          <p className="font-light text-gray-700 text-sm">{movie_info.date}</p>
        </div>
        <div className="flex flex-col p-2 w-1/5 border-r-2">
          <p className="font-extrabold text-xl">Start Time </p>
          <p className="font-light text-gray-700 text-lg">{movie_info.start_time}</p>
        </div>
        <div className="flex flex-col p-2 w-1/5 border-r-2">
          <p className="font-extrabold text-xl">End Time </p>
          <p className="font-light text-gray-700 text-lg">{movie_info.end_time}</p>
        </div>
        <div className="flex flex-col p-2 w-1/5 border-r-2">
          <button className="bg-indigo-500 text-white rounded px-4 py-2 hover:bg-indigo-900 transform active:scale-75 transition-transform" onClick={HandleRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
