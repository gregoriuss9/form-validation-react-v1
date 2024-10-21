import React, { useContext } from "react";
import styles from "./Button.module.scss";
import { DarkMode } from "../../context/DarkMode";
import darkMode from "../../helpers/darkMode";
type Propstypes = {
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => {};
  width?: string;
  children: string;
  padding?: string;
  disabled?: boolean;
};
const Button = (props: Propstypes) => {
  const {
    type,
    onClick,
    width = "w-full",
    children,
    padding = "",
    disabled,
  } = props;
  const { isDarkMode } = useContext(DarkMode);
  return (
    <button
      type={type}
      className={`${width} border rounded mb-3 ${padding} ${styles.button}`}
      onClick={onClick}
      disabled={disabled}
      style={{ color: `${darkMode(isDarkMode).mainColor}` }}
    >
      {children}
    </button>
  );
};

export default Button;
