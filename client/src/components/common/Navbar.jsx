import "./Navbar.css";
import {
  FaBell,
  FaMoon,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="search-box">

        <FaSearch className="search-icon"/>

        <input
          type="text"
          placeholder="Search employee..."
        />

      </div>

      <div className="navbar-right">

        <button className="icon-btn">
          <FaMoon />
        </button>

        <button className="icon-btn notification">
          <FaBell />
          <span className="badge">3</span>
        </button>

        <div className="profile">

          <FaUserCircle className="profile-icon"/>

          <div>

            <h4>Admin</h4>

            <small>Administrator</small>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;