import React,{useState, useEffect} from "react";
import SeatsCapacity from "./SeatsCapacity";

export default function AvailableSeats() {
    const [seats, setSeats] = useState({
        'a': {
            'number_of_seats': 0,
            'number_of_available_seats': 0,
        },
        'b': {
            'number_of_seats': 0,
            'number_of_available_seats': 0,
        },
        'c': {
            'number_of_seats': 0,
            'number_of_available_seats': 0,
        },
        'd': {
            'number_of_seats': 0,
            'number_of_available_seats': 0,
        },
    });
    useEffect(() => {
        setInterval(() => {
            fetch("http://localhost:5000/other/GetAailableSeats", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((data) => {
                setSeats({
                    'a': {
                        'number_of_seats': data.a.number_of_seats,
                        'number_of_available_seats': data.a.number_of_available_seats,
                    },
                    'b': {
                        'number_of_seats': data.b.number_of_seats,
                        'number_of_available_seats': data.b.number_of_available_seats,
                    },
                    'c': {
                        'number_of_seats': data.c.number_of_seats,
                        'number_of_available_seats': data.c.number_of_available_seats,
                    },
                    'd': {
                        'number_of_seats': data.d.number_of_seats,
                        'number_of_available_seats': data.d.number_of_available_seats,
                    },
                });
            })
            .catch((err) => console.log(err));
        }, 3000); 
    }
    , []);
  return (
    <section class="text-gray-600 body-font">
        <div>
            <h1 class="text-2xl font-bold text-left py-2 px-5">Seats Configuration</h1>
        </div>
      <div class="container px-5 py-3 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/4">
            <SeatsCapacity theater_id={'a'} number_of_seats={seats.a.number_of_seats} number_of_available_seats={seats.a.number_of_available_seats} />
          </div>
          <div class="p-4 lg:w-1/4">
            <SeatsCapacity theater_id={'b'} number_of_seats={seats.b.number_of_seats} number_of_available_seats={seats.b.number_of_available_seats} />
          </div>
          <div class="p-4 lg:w-1/4">
          <SeatsCapacity theater_id={'c'} number_of_seats={seats.c.number_of_seats} number_of_available_seats={seats.c.number_of_available_seats} />
          </div>
          <div class="p-4 lg:w-1/4">
          <SeatsCapacity theater_id={'d'} number_of_seats={seats.d.number_of_seats} number_of_available_seats={seats.d.number_of_available_seats} />
          </div>
        </div>
      </div>
    </section>
  );
}
