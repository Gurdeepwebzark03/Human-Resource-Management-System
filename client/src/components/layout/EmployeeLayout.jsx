import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Navbar from "../common/Navbar";
import "../../styles/dashboard.css";

const EmployeeLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar role="employee" />

      <div className="dashboard-content">
        <Navbar />

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EmployeeLayout;