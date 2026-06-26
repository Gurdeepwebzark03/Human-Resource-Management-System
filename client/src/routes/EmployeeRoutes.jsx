import { Routes, Route } from "react-router-dom";

import EmployeeLayout from "../layouts/EmployeeLayout";

import Dashboard from "../pages/employee/Dashboard";
import Status from "../pages/employee/Status";
import EOD from "../pages/employee/EOD";
import Timeline from "../pages/employee/Timeline";

const EmployeeRoutes = () => {
    return (
        <Routes>

            <Route element={<EmployeeLayout />}>

                <Route index element={<Dashboard />} />

                <Route path="status" element={<Status />} />

                <Route path="eod" element={<EOD />} />

                <Route path="timeline" element={<Timeline />} />

            </Route>

        </Routes>
    );
};

export default EmployeeRoutes;