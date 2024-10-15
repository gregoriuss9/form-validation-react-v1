import React from "react";
import styles from "./Dropdown.module.scss";
type Option = {
  value: string | number | undefined;
  label: string;
};

type Propstypes = {
  name: string;
  options: Option[];
};
const Dropdown = (props: Propstypes) => {
  const { name, options } = props;
  return (
    <select
      name={name}
      id={name}
      className={`border border-black rounded mb-3 py-2 px-4 w-full ${styles.select}`}
    >
      {options &&
        options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
};

export default Dropdown;
