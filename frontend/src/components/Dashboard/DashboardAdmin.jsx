import MovieScheduleTable from "../ScheduleTable/MovieScheduleTable";

export default function DashboardAdmin() {
    const user_info = JSON.parse(localStorage.getItem("user_info"));
    const Fullname = user_info.first_name + " " + user_info.last_name;
    const email = user_info.email;
    const membership = user_info.membership;
    
    return (
      <div>
        <MovieScheduleTable />
      </div>
    );
  }
  