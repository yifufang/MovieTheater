import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// for now we import sample data, later we will make api call
import ShowtimeCard from "../components/Card/ShowtimeCard";
import MovieBookingTable from "../components/BookTicketsTable/MovieBookingTable";


export default function BookTickets() {
  return (
    <div className="">
      <div className="w-full h-10 flex text-xl bg-black">
        <h1 className="m-auto justify-center font-bold text-white">
          Select your theater:{" "}
        </h1>
      </div>
      <MovieBookingTable />
    </div>
  );
}
