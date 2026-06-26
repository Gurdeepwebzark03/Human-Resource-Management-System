import { useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaGoogle,
} from "react-icons/fa";
import InputField from "../../components/common/InputField";
import "../../styles/login.css";
import GlassCard from "../../components/common/GlassCard";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [remember, setRemember] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="login-page">

      {/* Animated Background */}

      <div className="gradient one"></div>
      <div className="gradient two"></div>
      <div className="gradient three"></div>

      <GlassCard className="login-container">

        {/* LEFT PANEL */}

        <div className="login-left">

          <div className="brand">

            <div className="brand-icon">
              <FaBuilding />
            </div>

            <div>

              <h2>HRMS</h2>

              <span>Human Resource Management System</span>

            </div>

          </div>

          <div className="hero-content">

            <h1>

              Manage your workforce
              <br />
              with <span>one platform.</span>

            </h1>

            <p>

              Streamline employee management,
              attendance, reports and company
              activities in one powerful platform.

            </p>

          </div>

          {/* Illustration will be added in Part 4 */}

            <div className="dashboard-preview">

                <div className="window-header">

                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>

                </div>

                <div className="window-body">

                    <div className="mini-sidebar">

                        <div className="side-logo"></div>

                        <div className="side-item active"></div>
                        <div className="side-item"></div>
                        <div className="side-item"></div>
                        <div className="side-item"></div>

                    </div>

                    <div className="mini-dashboard">

                        <div className="top-cards">

                            <div className="top-card">

                                <h4>145</h4>

                                <span>Employees</span>

                            </div>

                            <div className="top-card purple">

                                <h4>96%</h4>

                                <span>Attendance</span>

                            </div>

                        </div>

                        <div className="graph">

                            <div className="line"></div>

                            <div className="bars">

                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>

                            </div>

                        </div>

                        <div className="mini-table">

                            <div className="row"></div>
                            <div className="row"></div>
                            <div className="row"></div>

                        </div>

                    </div>

                </div>

            </div>

      </div>

        {/* RIGHT PANEL */}

        <div className="login-right">

          <div className="login-box">

            <h1>Sign in</h1>

            <p>
              Welcome back! Please login to your account.
            </p>

            <form onSubmit={handleSubmit}>

              <InputField
                  label="Email Address"
                  icon={<FaEnvelope />}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
              />



                  <InputField
                      label="Password"
                      type="password"
                      icon={<FaLock />}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      name="password"
                  />

              <div className="login-options">

                <label className="remember">

                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() =>
                      setRemember(!remember)
                    }
                  />

                  Remember me

                </label>

                <a href="/">
                  Forgot Password?
                </a>

              </div>

              <button
                type="submit"
                className="login-btn"
              >

                Login

                <FaArrowRight />

              </button>

              <div className="divider">

                <span></span>

                <p>OR</p>

                <span></span>

              </div>

              <button
                type="button"
                className="google-btn"
              >

                <FaGoogle />

                Continue with Google

              </button>

            </form>

            <p className="bottom-text">

              Don't have an account?

              <span> Contact your administrator</span>

            </p>

          </div>

        </div>

      </GlassCard>

    </div>
  );
};

export default Login;