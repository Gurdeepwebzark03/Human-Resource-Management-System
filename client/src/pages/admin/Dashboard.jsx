import {
    FaUsers,
    FaUserCheck,
    FaPlaneDeparture,
    FaClipboardCheck
} from "react-icons/fa";

import StatCard from "../../components/dashboard/StatCard";

import "../../styles/dashboard.css";

const Dashboard = () => {

    return (

        <div className="page-content">

            <h1 className="page-title">
                Dashboard
            </h1>

            <div className="cards-grid">

                <StatCard
                    title="Employees"
                    value={145}
                    icon={<FaUsers />}
                    color="#2563eb"
                />

                <StatCard
                    title="Available"
                    value={128}
                    icon={<FaUserCheck />}
                    color="#22c55e"
                />

                <StatCard
                    title="On Leave"
                    value={7}
                    icon={<FaPlaneDeparture />}
                    color="#f97316"
                />

                <StatCard
                    title="EOD Submitted"
                    value={118}
                    icon={<FaClipboardCheck />}
                    color="#8b5cf6"
                />

            </div>

        </div>

    );

};

export default Dashboard;