import React, { useState } from 'react';

const Seat = ({ id, isReserved, isSelected, onSelect }) => {
  const seatStyle = {
    backgroundColor: isReserved ? 'gray' : isSelected ? 'blue' : 'green',
    cursor: isReserved ? 'not-allowed' : 'pointer',
  };

  return (
    <div
      className={`seat p-1 m-0 justify-center items-center text-white ${isReserved ? 'bg-gray-500' : isSelected ? 'bg-blue-500' : 'bg-green-500'}`}
      style={seatStyle}
      onClick={() => onSelect(id)}
    >
      {id}
    </div>
  );
};

export default Seat;