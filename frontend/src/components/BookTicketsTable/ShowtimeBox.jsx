import React, { useEffect, useState } from "react";
import SlidingSeatMap from "./SlidingSeatMap";

export default function ShowtimeBox(props) {
  const [title, setTitle] = useState(props.title);
  const [imageLink, setImageLink] = useState(props.imageLink);
  const [schedules, setSchedules] = useState([]);
  const [scheduleId, setScheduleId] = useState();

  function convertTimeStr(timeStr) {
    // Create a new Date object by parsing the date string
    const parsedDate = new Date(timeStr);
    // Format the time as HH:MM am/pm
    const formattedTime = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: 'GMT',
    }).format(parsedDate);
    return formattedTime;
  }

  function sortTimeStrs(data) {
    let timeStrList = [];
    data.map((e)=>(
      timeStrList.push(e[1])
    ));
    if(timeStrList.length < 2)
      return timeStrList;
    // Function to parse date strings and compare them
    const compareDates = (a, b) => {
      const dateA = new Date(a);
      const dateB = new Date(b);
      return dateA - dateB;
    };

    // Sort the array of time strings
    const sortedTimeStrings = timeStrList.sort(compareDates);
    return sortedTimeStrings;
  }

  useEffect(() => {
    fetch("http://localhost:5000/book/schedules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        theater_id: props.theaterSelected,
        film_id: props.filmId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          console.log(data);
          console.log(data[0][1]);
          setSchedules(sortTimeStrs(data));
          setScheduleId(data[0][0]);
          console.log(scheduleId)
        } else {
          alert(data.message);
        }
      });
  }, []);

  return (
    <div className="shadow-md border border-gray-100 p-2 rounded bg-white mt-6 flex flex-col justify-between">
      <div className="flex justify-left p-2">
        <div className="w-32 h-32 overflow-hidden rounded-full bg-cover bg-center">
          <img src={imageLink} alt="movie" />
        </div>
        <p className="font-extrabold text-3xl p-10">{title}</p>
      </div>

      <div className="flex w-full m-5 space-x-5">
        {schedules.map((time, i) => (
          <SlidingSeatMap scheduleId={scheduleId} time={convertTimeStr(time)} key={i} theaterSelected={props.theaterSelected}/>
        ))}
      </div>
    </div>
  );
}
