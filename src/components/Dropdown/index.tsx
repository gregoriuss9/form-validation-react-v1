import React, { useContext } from "react";
import styles from "./Dropdown.module.scss";
import { DarkMode } from "../../context/DarkMode";
import darkMode from "../../helpers/darkMode";
type Option = {
  value: string | number | undefined;
  label: string;
};

type Propstypes = {
  name: string;
  options: Option[];
  label?: string;
};
const Dropdown = (props: Propstypes) => {
  const { name, options, label } = props;
  const { isDarkMode } = useContext(DarkMode);
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
      <select
        name={name}
        id={name}
        style={{
          color: `${darkMode(isDarkMode).secondaryColor}`,
          border: `1px solid ${darkMode(isDarkMode).secondaryColor}`,
          borderBottom: `3px solid ${darkMode(isDarkMode).secondaryColor}`,
        }}
        className={`border  rounded mb-3 py-2 px-4 w-full ${styles.select}`}
      >
        {options &&
          options.map((option) => (
            <option
              value={option.value}
              key={option.value}
              style={{
                backgroundColor: `${darkMode(isDarkMode).mainColor}`,
              }}
            >
              {option.label}
            </option>
          ))}
      </select>
    </>
  );
};

export default Dropdown;
