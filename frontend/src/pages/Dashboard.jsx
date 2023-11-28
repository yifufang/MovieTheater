import React, { useState, useEffect } from "react";
import DashboardAdmin from "../components/Dashboard/DashboardAdmin";
import DashboardUser from "../components/Dashboard/DashboardUser";

export default function Dashboard() {
  const [is_admin, setIsAdmin] = useState(false);
  const user_info = JSON.parse(localStorage.getItem("user_info"));
  const membership = user_info.membership;
  
  useEffect(() => {
    if (membership === "E") {
      setIsAdmin(true);
    }
    else {
      setIsAdmin(false);
    }
  }, []);

  return (
    <div>
      {is_admin ? <DashboardAdmin /> : <DashboardUser />}
    </div>
  );
}
