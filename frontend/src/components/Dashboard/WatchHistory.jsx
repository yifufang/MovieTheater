import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

function WatchBox({seat_id, title, thumbnail, date}) {
    const Date = dayjs(date).format("DD MMM YYYY");
    const startTime = dayjs(date).add(8, "hour").format("HH:mm");
    const endTime = dayjs(date).add(10, "hour").format("HH:mm");

    const movie_info = {
        seat_id: seat_id,
        title: title,
        thumbnail: thumbnail,
        date: Date.toString(),
        start_time: startTime.toString(),
        end_time: endTime.toString(),
    };

  return (
    <div className="flex justify-between mt-6">
        <img src = {movie_info.thumbnail} alt = "movie poster" className = "w-32 h-65 shadow-md p-1"></img>
      <div className="shadow-md border border-gray-100 p-2 rounded bg-white flex justify-between items-center w-full ml-5">
        <div className="flex flex-col p-2 w-1/5 border-r-2">
          <p className="font-extrabold text-xl">{movie_info.title}</p>
          <p className="font-light text-gray-700 text-sm">Seat ID: {movie_info.seat_id}</p>
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
      </div>
    </div>
  );
}

export default function WatchHistory() {
  const [watch_history, setWatchHistory] = useState([]);
  
    useEffect(() => {
        fetch("http://localhost:5000/member/WatchHistory", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setWatchHistory(data);
        })
        .catch((err) => console.log(err));
    }, []);

  return (
    <div className="flex flex-col w-1/2 mx-auto">
      <div className="w-full">
        <p className="text-2xl font-bold text-left">Watch History</p>
      </div>
      <div className="flex flex-col flex-grow overflow-auto">
        {watch_history.map((movie) => (
          <WatchBox
            seat_id={movie[3]}
            title={movie[9]}
            thumbnail={movie[10]}
            date={movie[7]}
          />
        ))}
      </div>
    </div>
  );
}
