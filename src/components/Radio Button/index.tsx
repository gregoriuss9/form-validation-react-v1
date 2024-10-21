import React, { useContext } from "react";
import styles from "./RadioButton.module.scss";
import { DarkMode } from "../../context/DarkMode";
import darkMode from "../../helpers/darkMode";
type Propstypes = {
  id: string;
  name: string; // grouper
  value: string;
  children: string;
  onChange?: () => {};
};
const RadioButton = (props: Propstypes) => {
  const { id, name, value, children, onChange } = props;
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div className={`flex flex-row gap-x-4 ${styles.radioButton}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.radioButton}`}
        style={{
          color: `${darkMode(isDarkMode).secondaryColor}`,
          border: `1px solid ${darkMode(isDarkMode).secondaryColor}`,
        }}
      />
      <label
        htmlFor={value}
        style={{ color: `${darkMode(isDarkMode).secondaryColor}` }}
      >
        {children}
      </label>
    </div>
  );
};

export default RadioButton;
