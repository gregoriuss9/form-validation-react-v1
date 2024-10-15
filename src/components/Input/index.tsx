import React, { useState } from "react";
import styles from "./Input.module.scss";

type Propstypes = {
  type: string;
  placeholder?: string;
  marginBottom?: string;
  width?: string;
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
  } = props;
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
    <input
      type={inputType}
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`border border-black ${marginBottom} ${width} py-2 px-4 rounded ${styles.input}`}
    />
  );
};

export default Input;
