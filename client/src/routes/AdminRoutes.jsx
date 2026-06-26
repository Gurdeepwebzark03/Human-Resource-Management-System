import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/admin/Dashboard";
import Employees from "../pages/admin/Employees";
import AddEmployee from "../pages/admin/AddEmployee";
import EditEmployee from "../pages/admin/EditEmployee";
import EmployeeDetails from "../pages/admin/EmployeeDetails";

const AdminRoutes = () => {
    return (
        <Routes>

            <Route element={<AdminLayout />}>

                <Route index element={<Dashboard />} />

                <Route path="employees" element={<Employees />} />

                <Route path="add-employee" element={<AddEmployee />} />

                <Route path="edit/:id" element={<EditEmployee />} />

                <Route path="details/:id" element={<EmployeeDetails />} />

            </Route>

        </Routes>
    );
};

export default AdminRoutes;