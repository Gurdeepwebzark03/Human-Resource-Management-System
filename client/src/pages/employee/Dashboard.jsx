import "../../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="page-container">

      <h1 className="page-title">
        Employee Dashboard
      </h1>

      <div className="welcome-card">

        <h2>Welcome Back 👋</h2>

        <p>
          Here you can update your availability,
          submit EOD reports and view company status.
        </p>

      </div>

    </div>
  );
};

export default Dashboard;