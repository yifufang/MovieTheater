import React, { useEffect, useState } from "react";

export default function PurchaseBox({
  ticket_id,
  price,
  cancelled,
  ticket_time,
  schedule_id,
}) {
  const [active, setActive] = useState(false);


  const HandleCancel = () => {
    fetch(`http://localhost:5000/member/cancel_ticket`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ticket_id: ticket_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "success") {
          alert("Ticket Cancelled!");
        } else {
          alert("Ticket already cancelled or expired!");
        }
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/member/get_schedule_time`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        schedule_id: schedule_id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const schedule_time_obj = new Date(data.schedule_time);
        const ticket_time_obj = new Date(ticket_time);
        console.log(schedule_time_obj);
        console.log(ticket_time_obj);
        const diff = (schedule_time_obj - ticket_time_obj) / 1000;
        console.log(diff);
        if (diff > 0) {
          setActive(true);
        } else {
          setActive(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="shadow-md border border-gray-100 p-2 rounded bg-white mt-6 flex justify-between items-end">
      <div className="flex flex-col p-2">
        <p className="font-extrabold text-xl">Ticket ID: {ticket_id}</p>
        <p className="font-light text-gray-700 text-sm">Price: ${price}</p>
      </div>
      <div className="flex flex-col p-2">
        <p className="font-extrabold text-xl">
          Cancelled:
          {cancelled ? (
            <span className="text-red-500">Cancelled</span>
          ) : (
            <span className="text-green-500">UnCancelled</span>
          )}
        </p>
        <p className="font-extrabold text-xl">
          Status:{" "}
          {!active ? (
            <span className="text-red-500">expired</span>
          ) : (
            <span className="text-green-500">active</span>
          )}
        </p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={HandleCancel}
      >
        Cancel
      </button>
    </div>
  );
}
