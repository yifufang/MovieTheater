import React, { useState, useEffect } from "react";
import PurchaseBox from "./PurchaseBox";

export default function PurchaseHistory() {
    const [purchase_history, setPurchaseHistory] = useState([]);
    const user_info = JSON.parse(localStorage.getItem("user_info"));
    const membership = user_info.membership;
    useEffect(() => {
      if(membership !== "E"){
        fetch(`http://localhost:5000/member/purchase_history`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setPurchaseHistory(data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, []);

  return (
    <div className="flex flex-col w-1/2 mx-auto">
      <div className="w-full">
        <p className="text-2xl font-bold text-left">Purchase History</p>
      </div>
      <div className="flex flex-col flex-grow overflow-auto">
        {purchase_history.map((purchase) => (
        <PurchaseBox ticket_id={purchase[0]} price={purchase[1]} cancelled={purchase[5]} ticket_time={purchase[7]} schedule_id={purchase[6]} />
        ))}

      </div>
    </div>
  );
}
