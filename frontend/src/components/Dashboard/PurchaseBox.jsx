import React, { useEffect, useState } from "react";

export default function PurchaseBox() {
  return (
    <div className="shadow-md border border-gray-100 p-2 rounded bg-white mt-6 flex justify-between items-end">
      <div className="flex flex-col p-2">
        <p className="font-extrabold text-xl">Ticket ID: </p>
        <p className="font-light text-gray-700 text-sm">Price: $10</p>
      </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Cancel
        </button>
    </div>
  );
}
