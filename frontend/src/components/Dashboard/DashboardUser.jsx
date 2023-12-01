import React, { useState, useEffect } from "react";
import PurchaseHistory from "./PurchaseHistory";

export default function DashboardUser() {
  const [is_premium, setIsPremium] = useState(false);
  const user_info = JSON.parse(localStorage.getItem("user_info"));
  const Fullname = user_info.first_name + " " + user_info.last_name;
  const email = user_info.email;
  const membership = user_info.membership;

  const [reward_points, setRewardPoints] = useState(0);

  useEffect(() => {
    if (membership === "P") {
      setIsPremium(true);
    } else {
      setIsPremium(false);
    }

    fetch(`http://localhost:5000/member/getRewards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data)=>{
        setRewardPoints(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div class="p-16">
      <div class="p-8 bg-white shadow mt-24">
        <div class="grid grid-cols-1">
          <div class="relative">
            <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-24 w-24"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="mt-28 text-center border-b pb-12">
          <h1 class="text-4xl font-medium text-gray-700">
            {Fullname}
          </h1>
          <p class="mt-2 text-gray-500">Membership: {membership}</p>
          <p class="mt-2 text-gray-500">Email: {email}</p>
          <p class="mt-2 text-gray-500">Reward Points: {reward_points}</p>
        </div>
        
        <div class="mt-12 flex flex-col justify-center">
          <PurchaseHistory />
        </div>
      </div>
    </div>
  );
}
