import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaClipboardList,
  FaClock,
  FaUserPlus,
  FaCog,
  FaSignOutAlt,
  FaBuilding,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = ({ role }) => {
  const employeeMenu = [
    {
      title: "Dashboard",
      path: "/employee",
      icon: <FaHome />,
    },
    {
      title: "Status",
      path: "/employee/status",
      icon: <FaClock />,
    },
    {
      title: "EOD Report",
      path: "/employee/eod",
      icon: <FaClipboardList />,
    },
    {
      title: "Timeline",
      path: "/employee/timeline",
      icon: <FaUsers />,
    },
  ];

  const adminMenu = [
    {
      title: "Dashboard",
      path: "/admin",
      icon: <FaHome />,
    },
    {
      title: "Employees",
      path: "/admin/employees",
      icon: <FaUsers />,
    },
    {
      title: "Add Employee",
      path: "/admin/add-employee",
      icon: <FaUserPlus />,
    },
  ];

  const menu = role === "admin" ? adminMenu : employeeMenu;

  return (
    <aside className="sidebar">

      <div>

        <div className="logo">

          <FaBuilding className="logo-icon"/>

          <div>

            <h2>HRMS</h2>

            <small>Management</small>

          </div>

        </div>

        <div className="menu">

          {menu.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              {item.icon}

              <span>{item.title}</span>

            </NavLink>

          ))}

        </div>

      </div>

      <div>

        <button className="settings">

          <FaCog />

          Settings

        </button>

        <button className="logout">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;