import React, { useState, useEffect } from "react";
import Seat from "./Seat";

const SeatMap = (props) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [allSeats, setAllSeats] = useState([]);

  function handleSubmit() {
    fetch("http://localhost:5000/book/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theater_id: theaterSelected, schedule_id: props.scheduleId, ordered_seats: selectedSeats }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          console.log(data);
        } else {
          alert(data.message);
        }
      });
  }

  function convertData(seats) {
    let seatsList = [];
    seats.map((seat) => (
      seatsList.push({
        id: seat[0],
        isReserved: seat[1],
      })
    ));
    return seatsList;
  }

  const handleSeatSelect = (seatId) => {
    // Check if the seat is already selected
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else if (selectedSeats.length < 8) {
      // Check if the user is allowed to select more seats
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/book/seats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ schedule_id: props.scheduleId, theater_id: props.theaterSelected }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          console.log(data);
          setAllSeats(convertData(data));
        } else {
          alert(data.message);
        }
      });
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-md p-4 bg-gray-100 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Movie Theater Seat Map</h2>
        <div className="seat-map grid grid-cols-10 gap-2 justify-center">
          {allSeats.map((seat, i) => (
            <Seat
              key={i}
              id={seat.id}
              isReserved={seat.isReserved}
              isSelected={selectedSeats.includes(seat.id)}
              onSelect={handleSeatSelect}
            />
          ))}
        </div>
        <p className="mt-4">Selected Seats: {selectedSeats.join(", ")}</p>
      </div>
      <div className="flex justify-center p-5">
        <button onClick={} className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex mb-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Book Selected Seats
        </button>
      </div>
    </div>
  );
};

export default SeatMap;
