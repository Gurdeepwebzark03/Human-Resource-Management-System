import "./StatCard.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const StatCard = ({ title, value, icon, color }) => {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
    >
      <div
        className="stat-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div className="stat-info">

        <p>{title}</p>

        <h2>
          <CountUp
            end={value}
            duration={1.8}
          />
        </h2>

      </div>
    </motion.div>
  );
};

export default StatCard;