import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";
import SlidingWindow from "./SlidingWindow";
import AvailableSeats from "../Statistics/SliderTheaterConfig";

export default function MovieScheduleTable() {
  const [activeTab, setActiveTab] = useState("a");

  const [scheduleList, setscheduleList] = useState({
    a: [],
    b: [],
    c: [],
    d: [],
  });

  const SwitchTab = (tab) => {
    setActiveTab(tab);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:5000/employee/ALL_MOVIE_SCHEDULE", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setscheduleList({
            a: data.a,
            b: data.b,
            c: data.c,
            d: data.d,
          });
        })
        .catch((err) => console.log(err));
    }, 1000); // Fetch every 2 seconds
  
    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-3/4 mx-auto mt-4">
      <h1 className="text-2xl font-bold text-left p-3 mb-3">Schedule Control Panel</h1>
      <div className="grid grid-cols-6 gap-5">
        <AvailableSeats />
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
        <SlidingWindow />
      </div>

      <div className="flex flex-col flex-grow overflow-auto">
        {activeTab === "a" && (
          <div>
            {scheduleList.a.map((info) => (
              <MovieBox info={info} />
            ))}
          </div>
        )}
        {activeTab === "b" && (
          <div>
            {scheduleList.b.map((info) => (
              <MovieBox info={info} />
            ))}
          </div>
        )}
        {activeTab === "c" && (
          <div>
            {scheduleList.c.map((info) => (
              <MovieBox info={info} />
            ))}
          </div>
        )}
        {activeTab === "d" && (
          <div>
            {scheduleList.d.map((info) => (
              <MovieBox info={info} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
