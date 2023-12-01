import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css"; // Import the styles
import SeatMap from "./SeatMap";

const SlidingSeatMap = (props) => {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [time, setTime] = useState(props.time);

  const handleToggle = () => {
    setIsPaneOpen(!isPaneOpen);
  };

  return (
    <div className="flex justify-center items-center overflow-y-auto">
      <button
        className=" bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-full animate-none transform active:scale-75 transition-transform"
        onClick={handleToggle}
      >
        {time}
      </button>

      <SlidingPane
        isOpen={isPaneOpen}
        onRequestClose={() => setIsPaneOpen(false)}
        width="600px"
      >
        <div className="grid p-5 text-lg font-bold ml-5">
            <h1>Theater ID: {props.theaterSelected}</h1>
            <h1>Schedule ID: {props.scheduleId}</h1>
            <h1>Showtime: {time}</h1>
        </div>
        <div>
          <SeatMap scheduleId={props.scheduleId} theaterSelected={props.theaterSelected}/>
        </div>
      </SlidingPane>
    </div>
  );
};

export default SlidingSeatMap;
