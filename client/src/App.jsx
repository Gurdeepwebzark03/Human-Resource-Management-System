import { Routes, Route, Navigate } from "react-router-dom";

import EmployeeLogin from "./pages/employee/Login.jsx";
import AdminLogin from "./pages/admin/Login.jsx";

import EmployeeDashboard from "./pages/employee/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";

import EmployeeLayout from "./components/layout/EmployeeLayout.jsx";
import AdminLayout from "./components/layout/AdminLayout.jsx";

import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Default Route */}
      <Route path="/" element={<Navigate to="/employee/login" replace />} />

      {/* Employee Login */}
      <Route path="/employee/login" element={<EmployeeLogin />} />

      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Employee Routes */}
      <Route
        path="/employee"
        element={
          <ProtectedRoute role="employee">
            <EmployeeLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<EmployeeDashboard />} />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<h2>404 | Page Not Found</h2>} />
    </Routes>
  );
}

export default App;