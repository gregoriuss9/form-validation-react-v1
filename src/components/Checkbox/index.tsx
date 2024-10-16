import React, { useContext } from "react";
import styles from "./Checkbox.module.scss";
import { DarkMode } from "../../context/DarkMode";
import darkMode from "../../helpers/darkMode";

type Propstypes = {
  label: string;
};
const Checkbox = (props: Propstypes) => {
  const { label } = props;
  const { isDarkMode } = useContext(DarkMode);
  return (
    <>
      <div className={`flex gap-x-3 mb-3 ${styles?.checkBox}`}>
        <input
          type="checkbox"
          className={`block ${styles?.checkBox}`}
          style={{
            border: `0.1em solid ${darkMode(isDarkMode).secondaryColor}`,
          }}
        />
        <label
          htmlFor="checkbox"
          className="text-sm text-balance"
          style={{ color: `${darkMode(isDarkMode).secondaryColor}` }}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
