import React, { useContext, useState } from "react";
import styles from "./Datepicker.module.scss";
import { DarkMode } from "../../context/DarkMode";
import darkMode from "../../helpers/darkMode";
type Propstypes = {
  type: string;
  placeholder?: string;
  marginBottom?: string;
  name: string;
  width?: string;
  label?: string;
  validator?: boolean;
  errorMessages?: string;
  onChange?: () => {};
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const Datepicker = (props: Propstypes) => {
  const {
    type = "date",
    placeholder,
    marginBottom = "mb-3",
    width = "w-full",
    onBlur,
    onFocus,
    name,
    label,
    errorMessages,
    onChange,
    validator = true,
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
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          style={{
            color: `${darkMode(isDarkMode).secondaryColor}`,
            border: `1px solid ${
              validator ? darkMode(isDarkMode).secondaryColor : "#ef4444"
            }`,
            borderBottom: `3px solid ${
              validator ? darkMode(isDarkMode).secondaryColor : "#ef4444"
            }`,
          }}
          name={name}
          id={name}
          className={`border border-black ${marginBottom} ${width} py-2 px-4 rounded ${styles.input}`}
        />
      </div>
      {errorMessages && (
        <p className="text-xs text-right text-red-500 font-semibold">
          {errorMessages}
        </p>
      )}
    </>
  );
};

export default Datepicker;
