import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import "./InputField.css";

const InputField = ({
  icon,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="input-field">

      <label>{label}</label>

      <div className="input-wrapper">

        <div className="input-icon">
          {icon}
        </div>

        <input
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />

        {isPassword && (

          <button
            type="button"
            className="password-toggle"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >

            {showPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}

          </button>

        )}

      </div>

    </div>
  );
};

export default InputField;