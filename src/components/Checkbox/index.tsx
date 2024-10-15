import React from "react";
import styles from "./Checkbox.module.scss";

type Propstypes = {
  label: string;
};
const Checkbox = (props: Propstypes) => {
  const { label } = props;
  return (
    <>
      <div className={`flex gap-x-3 mb-3 ${styles?.checkBox}`}>
        <input type="checkbox" className={`block ${styles?.checkBox}`} />
        <label htmlFor="checkbox" className="text-sm text-balance">
          {label}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
