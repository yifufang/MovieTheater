import React, { useState, useEffect } from "react";
import ShowtimeBox from "./ShowtimeBox";
import Searchbar from "./Searchbar";

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
      body: JSON.stringify({ theater_id: "a" }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          console.log(data);
          console.log("data.moviesInfoTheater: ", data.moviesInfoTheater);
          setTheaters(data.theaters);
          setMovies({
            a: data.moviesInfoTheater['a'],
            b: data.moviesInfoTheater['b'],
            c: data.moviesInfoTheater['c'],
            d: data.moviesInfoTheater['d'],
          });
        } else {
          alert(data.message);
        }
      });
  }, []);

  return (
    <div className="w-3/4 mx-auto mt-4">
      <div className="grid grid-cols-4 gap-5">
        {theaters.map((theater, i) => (
          <button
          key={i}
          className="focus:text-white p-4 rounded focus:bg-indigo-500 shadow-md flex items-center justify-center"
          onClick={() => SwitchTab(theater[0])}
        >
          {theater[1]}
        </button>
        ))}
      </div>
      <div className="p-5">
        <Searchbar />
      </div>

      <div className="flex flex-col flex-grow">
        {activeTab === "a" &&
          movies["a"].map((movie, i) => (
            <ShowtimeBox
              key={i}
              title={movie[5]}
              filmId={movie[2]}
              imageLink={movie[10]}
              theaterSelected={activeTab}
            ></ShowtimeBox>
          ))}
        {activeTab === "b" &&
          movies["b"].map((movie, i) => (
            <ShowtimeBox
              key={i}
              title={movie[5]}
              filmId={movie[2]}
              imageLink={movie[10]}
              theaterSelected={activeTab}
            ></ShowtimeBox>
          ))}
        {activeTab === "c" &&
          movies["c"].map((movie, i) => (
            <ShowtimeBox
              key={i}
              title={movie[5]}
              filmId={movie[2]}
              imageLink={movie[10]}
              theaterSelected={activeTab}
            ></ShowtimeBox>
          ))}
        {activeTab === "d" &&
          movies["d"].map((movie, i) => (
            <ShowtimeBox
              key={i}
              title={movie[5]}
              filmId={movie[2]}
              imageLink={movie[10]}
              theaterSelected={activeTab}
            ></ShowtimeBox>
          ))}
      </div>
    </div>
  );
}
