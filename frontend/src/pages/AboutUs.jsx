import React, { useState, useEffect } from "react";

function TheaterCard({theater_id, theater_name, theater_address}) {
  return (
    <div class="p-4 md:w-1/4">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Theater {theater_id}
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
            {theater_name}
          </h1>
          <p class="leading-relaxed mb-3">
            {theater_address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const [theaterData, setTheaterData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/other/getTheaterData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTheaterData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            theaterData.map((theater) => {
              return <TheaterCard theater_id={theater[0]} theater_name={theater[1]} theater_address={theater[2]}/>
            })
          }
        </div>
      </div>
    </section>
  );
}
