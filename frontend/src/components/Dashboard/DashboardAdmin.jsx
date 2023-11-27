export default function DashboardAdmin() {
    const user_info = JSON.parse(localStorage.getItem("user_info"));
    const Fullname = user_info.first_name + " " + user_info.last_name;
    const email = user_info.email;
    const membership = user_info.membership;
    const reward_points = user_info.reward_points;
    
    return (
      <div>
        <h1>Dashboard Admin</h1>
        <h2>Logged in</h2>
        <h3>Name: {user_info.first_name + " " + user_info.last_name}</h3>
        <h3>Email: {user_info.email}</h3>
        <h3>Membership: {user_info.membership}</h3>
        <h3>Reward Points: {user_info.reward_points}</h3>
      </div>
    );
  }
  