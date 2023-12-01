import React, { useState, useEffect } from "react";
import Seat from "./Seat";

const SeatMap = (props) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [allSeats, setAllSeats] = useState([]);
//   let seats = [
//     { id: 1, isReserved: false },
//     { id: 2, isReserved: false },
//     // Add more seat objects as needed
//   ];

  function convertData(seats) {
    let seatsList = [];
    seats.map((seat) => {
      seatsList.push({
        id: seat[0],
        isReserved: seat[1],
      });
    });
    return seatsList;
  }

  const handleSeatSelect = (seatId) => {
    if (!selectedSeats.includes(seatId)) {
      setSelectedSeats([...selectedSeats, seatId]);
      console.log(selectedSeats)
    } else {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/book/seats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theater_id: props.theaterSelected }),
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
    <div className="mx-auto max-w-md p-4 bg-gray-100 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Movie Theater Seat Map</h2>
      <div className="seat-map grid grid-cols-10 gap-2 justify-center">
        {allSeats.map((seat) => (
          <Seat
            key={seat.id}
            id={seat.id}
            isReserved={seat.isReserved}
            isSelected={selectedSeats.includes(seat.id)}
            onSelect={handleSeatSelect}
          />
        ))}
      </div>
      <p className="mt-4">Selected Seats: {selectedSeats.join(", ")}</p>
    </div>
  );
};

export default SeatMap;
