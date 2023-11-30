import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css"; // Import the styles
import Searchbar from "./Searchbar";


const SlidingWindow = () => {
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  const handleToggle = () => {
    setIsPaneOpen(!isPaneOpen);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full animate-pulse transform active:scale-75 transition-transform"
        onClick={handleToggle}
      >
        Schedule Movie
      </button>
      <SlidingPane
        isOpen={isPaneOpen}
        onRequestClose={() => setIsPaneOpen(false)}
        width="600px"
      >
        <div>
            <Searchbar />
        </div>
      </SlidingPane>
    </div>
  );
};

export default SlidingWindow;
