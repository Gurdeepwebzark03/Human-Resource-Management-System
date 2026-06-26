import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Navbar from "../common/Navbar";
import "../../styles/dashboard.css";

const AdminLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar role="admin" />

      <div className="dashboard-content">
        <Navbar />

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;