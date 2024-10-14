import React from "react";
import styles from "./Input.module.scss";

type Propstypes = {
  type: string;
  placeholder?: string;
  marginBottom?: string;
  width?: string;
};

const Input = (props: Propstypes) => {
  const { type, placeholder, marginBottom = "mb-3", width = "w-full" } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border border-black ${marginBottom} ${width} py-2 px-4 rounded ${styles.input}`}
      // style={{ borderBottomWidth: "3px" }}
    />
  );
};

export default Input;
