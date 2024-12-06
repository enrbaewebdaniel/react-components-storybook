import React from "react";
import "./button.styles.scss";

/** Primary UI component for user interaction */
const Button = ({ type, size, children, ...props }) => {
  return (
    <button
      type="button"
      className={["button", `button--${type}`, `button--${size}`]}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "primary",
  size: "medium",
  onClick: undefined,
};

export default Button;
