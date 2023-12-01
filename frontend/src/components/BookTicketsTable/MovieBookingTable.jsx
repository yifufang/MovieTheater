import React, { useState, useEffect } from "react";
import ScheduleBox from "./ScheduleBox";

export default function MovieBookingTable() {
  const [activeTab, setActiveTab] = useState("a");
  const [theaters, setTheaters] = useState([]);
  const [movies, setMovies] = useState({
    a: [],
    b: [],
    c: [],
    d: [],
  });

  const SwitchTab = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    fetch("http://localhost:5000/book/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theater_id: 'a' }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          console.log("ssssssssssss");
          console.log(data);
          console.log("data.theaters: ", data.theaters);
          setTheaters(data.theaters);
          setMovies({
            a: data.moviesInfoTheaterA,
            b: data.moviesInfoTheaterB,
            c: data.moviesInfoTheaterC,
            d: data.moviesInfoTheaterD,
          });
        } else {
          alert(data.message);
        }
      });
  }, []);

  return (
    <div className="w-3/4 mx-auto mt-4">
      <h1 className="text-2xl font-bold text-left">Book your ticket here</h1>
      <div className="grid grid-cols-5 gap-5">
        <button
          className="focus:text-white p-4 rounded focus:bg-indigo-500 shadow-md flex items-center justify-center"
          onClick={() => SwitchTab("a")}
        >
          Theater A
        </button>
        <button
          className="p-4 rounded bg-white text-indigo-500 shadow-md flex items-center justify-center focus:bg-indigo-500 focus:text-white"
          onClick={() => SwitchTab("b")}
        >
          Theater B
        </button>
        <button
          className="p-4 rounded bg-white text-indigo-500 shadow-md flex items-center justify-center focus:bg-indigo-500 focus:text-white"
          onClick={() => SwitchTab("c")}
        >
          Theater C
        </button>
        <button
          className="p-4 rounded bg-white text-indigo-500 shadow-md flex items-center justify-center focus:bg-indigo-500 focus:text-white"
          onClick={() => SwitchTab("d")}
        >
          Theater D
        </button>
      </div>

      <div className="flex flex-col flex-grow overflow-auto">
        {activeTab === "a" &&
          movies["a"].map((movie, i) => (
            <ScheduleBox
              key={i}
              title={movie[0]}
              filmId={movie[1]}
              imageLink={movie[2]}
              theaterSelected={activeTab}
            ></ScheduleBox>
          ))}
        {activeTab === "b" &&
          movies["b"].map((movie, i) => (
            <ScheduleBox
              key={i}
              title={movie[0]}
              filmId={movie[1]}
              imageLink={movie[2]}
              theaterSelected={activeTab}
            ></ScheduleBox>
          ))}
        {activeTab === "c" &&
          movies["c"].map((movie, i) => (
            <ScheduleBox
              key={i}
              title={movie[0]}
              filmId={movie[1]}
              imageLink={movie[2]}
              theaterSelected={activeTab}
            ></ScheduleBox>
          ))}
        {activeTab === "d" &&
          movies["d"].map((movie, i) => (
            <ScheduleBox
              key={i}
              title={movie[0]}
              filmId={movie[1]}
              imageLink={movie[2]}
              theaterSelected={activeTab}
            ></ScheduleBox>
          ))}
      </div>
    </div>
  );
}
