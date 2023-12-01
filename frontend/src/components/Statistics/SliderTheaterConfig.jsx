import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css"; // Import the styles
import AvailableSeats from "./AvailableSeats";

const SliderTheaterConfig = () => {
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    const handleToggle = () => {
        setIsPaneOpen(!isPaneOpen);
    };

    return (
        <div className="flex justify-center items-center">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full animate-pulse transform active:scale-75 transition-transform"
                onClick={handleToggle}
            >
                Theater Configuration
            </button>
            <SlidingPane
                isOpen={isPaneOpen}
                onRequestClose={() => setIsPaneOpen(false)}
                from="left"
                width="800px"
                className="md:w-600px"
            >
                <div>
                    <AvailableSeats />
                </div>
            </SlidingPane>
        </div>
    );
};

export default SliderTheaterConfig;
