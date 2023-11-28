import React from "react";

export default function MovieBox(props) {
    return (
      <div className="shadow-md border border-gray-100 p-2 rounded bg-white mt-6 flex justify-between items-center ">
        <div className="flex flex-col p-2">
            <p className="font-extrabold text-xl">Movie A</p>
            <p className="font-light text-gray-700 text-sm">Movie ID: 1</p>
        </div>
        <div className="flex flex-col p-2">
            <p className="font-extrabold text-xl">Start Time </p>
            <p className="font-light text-gray-700 text-lg">10:00</p>
        </div>
        <div className="flex flex-col p-2">
            <p className="font-extrabold text-xl">End Time </p>
            <p className="font-light text-gray-700 text-lg">12:00</p>
        </div>
        <div className="flex flex-col p-2">
        <button className="bg-indigo-500 text-white rounded px-4 py-2 hover:bg-indigo-900 transform active:scale-75 transition-transform">
            Remove
        </button>
        </div>
      </div>
    );
}