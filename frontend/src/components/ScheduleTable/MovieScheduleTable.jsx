import React, { useState } from "react";
import MovieBox from "./MovieBox";
import SlidingWindow from "./SlidingWindow";

export default function MovieScheduleTable() {
  const [activeTab, setActiveTab] = useState("a");
  const SwitchTab = (tab) => {
    setActiveTab(tab);
  };
  const ScheduleMovie = () => {
    console.log("Schedule Movie");
  }
  return (
    <div className="w-3/4 mx-auto mt-4">
      <h1 className="text-2xl font-bold text-left">Schedule Control Panel</h1>
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
        <SlidingWindow />
      </div>
      

      <div className="flex flex-col flex-grow overflow-auto">
        {activeTab === "a" && (
          <div>
            <MovieBox />
            <MovieBox />
          </div>
        )}
      </div>
    </div>
  );
}
