import React, { useState, useEffect } from "react";
export default function DashboardUser() {
  const user_info = JSON.parse(localStorage.getItem("user_info"));
  const Fullname = user_info.first_name + " " + user_info.last_name;
  const email = user_info.email;
  const membership = user_info.membership;
  const reward_points = user_info.reward_points;

  const [is_premium, setIsPremium] = useState(false);
  useEffect(() => {
    if (membership === "P") {
      setIsPremium(true);
    } else {
      setIsPremium(false);
    }
  }, []);

  return (
    <div>
      <h1>Dashboard User</h1>
      <h2>Logged in</h2>
      <h3>Name: {user_info.first_name + " " + user_info.last_name}</h3>
      <h3>Email: {user_info.email}</h3>
      <h3>Membership: {user_info.membership}</h3>
      <h3>Reward Points: {user_info.reward_points}</h3>
      {is_premium ? (
        <div>
          <p>you get your online service fee waived</p>
        </div>
      ) : (
        <div>
          <p>you need to pay $1.5 per ticket for online service fee.</p>
        </div>
      )}
    </div>
  );
}
