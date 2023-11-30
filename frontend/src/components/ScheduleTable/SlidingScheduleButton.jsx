import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css"; // Import the styles
import ScheduleDetail from "./ScheduleDetail";

const SlidingScheduleButton = ({movie}) => {
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  const handleToggle = () => {
    setIsPaneOpen(!isPaneOpen);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className=" bg-indigo-500 text-white rounded px-4 py-2 mt-4 hover:bg-indigo-900 transform active:scale-75 transition-transform"
        onClick={handleToggle}
      >
        Schedule
      </button>

      <SlidingPane
        isOpen={isPaneOpen}
        onRequestClose={() => setIsPaneOpen(false)}
        width="600px"
      >
        <div>
            <ScheduleDetail movie = {movie} />
        </div>
      </SlidingPane>
    </div>
  );
};

export default SlidingScheduleButton;
