import React, { useContext, useState } from "react";
import styles from "./Input.module.scss";
import { DarkMode } from "../../context/DarkMode";
import darkMode from "../../helpers/darkMode";
type Propstypes = {
  type: string;
  placeholder?: string;
  marginBottom?: string;
  name: string;
  width?: string;
  label?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const Input = (props: Propstypes) => {
  const {
    type,
    placeholder,
    marginBottom = "mb-3",
    width = "w-full",
    onBlur,
    onFocus,
    name,
    label,
  } = props;
  const { isDarkMode } = useContext(DarkMode);
  const [inputType, setInputType] = useState(type);
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (type === "date") {
      setInputType("date");
      if (onFocus) onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (type === "date") {
      setInputType("text");
      if (onBlur) onBlur(e);
    }
  };
  return (
    <>
      {label && (
        <label
          htmlFor={name}
          style={{ color: `${darkMode(isDarkMode).secondaryColor}` }}
        >
          {label}
        </label>
      )}
      <input
        type={inputType}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          color: `${darkMode(isDarkMode).secondaryColor}`,
          border: `1px solid ${darkMode(isDarkMode).secondaryColor}`,
          borderBottom: `3px solid ${darkMode(isDarkMode).secondaryColor}`,
        }}
        name={name}
        id={name}
        className={`border border-black ${marginBottom} ${width} py-2 px-4 rounded ${styles.input}`}
      />
    </>
  );
};

export default Input;
