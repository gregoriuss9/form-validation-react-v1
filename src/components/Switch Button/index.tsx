import React from "react";
import styles from "./Switch.module.scss";

type Propstypes = {
  onClick: () => void;
};
const SwitchButton = (props: Propstypes) => {
  const { onClick } = props;
  return (
    <label className={styles.switch}>
      <input type="checkbox" onClick={onClick} />
      <span
        className={`${styles.switch__slider} ${styles.switch__slider__rounded}`}
      ></span>
    </label>
  );
};

export default SwitchButton;
