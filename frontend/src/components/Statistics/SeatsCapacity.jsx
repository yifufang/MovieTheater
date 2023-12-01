import React, { useState } from "react";
import BModal from "./BModal";

export default function SeatsCapacity({
  theater_id,
  number_of_seats,
  number_of_available_seats,
}) {
  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-md">
      <div className="px-3 py-8">
        <div className="grid items-center justify-center w-full grid-cols-1 text-left shadow-md p-2">
          <div>
            <h2 className="text-2xl font-medium tracking-tighter text-black">
              Theater {theater_id.toUpperCase()}
            </h2>
          </div>
          <div className="mt-6">
            <p>
              <span className="text-5xl font-light tracking-tight text-black">
                {number_of_available_seats}
              </span>
              <span className="text-base font-medium">
                / {number_of_seats}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-6 pb-8 sm:px-8 text-black">
        <BModal theater_id={theater_id}/>
      </div>
    </div>
  );
}
