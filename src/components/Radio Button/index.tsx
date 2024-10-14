import React from "react";
import styles from "./RadioButton.module.scss";
type Propstypes = {
  id: string;
  name: string; // grouper
  value: string;
  children: string;
};
const RadioButton = (props: Propstypes) => {
  const { id, name, value, children } = props;
  return (
    <div className={`flex flex-row gap-x-4 ${styles.radioButton}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className={`${styles.radioButton}`}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};

export default RadioButton;
