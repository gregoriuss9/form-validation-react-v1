import React from "react";
import styles from "./Button.module.scss";
type Propstypes = {
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => {};
  width?: string;
  children: string;
  padding?: string;
};
const Button = (props: Propstypes) => {
  const { type, onClick, width = "w-full", children, padding = "" } = props;
  return (
    <button
      type={type}
      className={`${width} border rounded mb-3 ${padding} ${styles.button}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
