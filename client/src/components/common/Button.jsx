import "./Button.css";
import { motion } from "framer-motion";

const Button = ({
  children,
  icon,
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`btn ${variant}`}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <div className="btn-loader"></div>
      ) : (
        <>
          {children}

          {icon && (
            <span className="btn-icon">
              {icon}
            </span>
          )}
        </>
      )}
    </motion.button>
  );
};

export default Button;