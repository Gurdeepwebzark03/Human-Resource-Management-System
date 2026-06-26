import { motion } from "framer-motion";
import "./GlassCard.css";

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`glass-card ${className}`}
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;