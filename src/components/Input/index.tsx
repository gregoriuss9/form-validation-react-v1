import React, { useContext, useState } from "react";
import styles from "./Input.module.scss";
import { DarkMode } from "../../context/DarkMode";
import darkMode from "../../helpers/darkMode";
import alertIcon from "../../assets/Alert.svg";
import verifiedIcon from "../../assets/Verified.svg";
type Propstypes = {
  type: string;
  placeholder?: string;
  marginBottom?: string;
  name: string;
  width?: string;
  label?: string;
  validator?: boolean;
  errorMessages?: string;
  showIcon?: boolean;
  onChange?: () => {};
};

const Input = (props: Propstypes) => {
  const {
    type,
    placeholder,
    marginBottom = "mb-3",
    width = "w-full",
    name,
    label,
    errorMessages,
    onChange,
    validator = true, // for border styling
    showIcon, //for show the icon after validation
  } = props;
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
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
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
        {showIcon &&
          (validator ? (
            <div className="absolute inset-y-0 flex items-center right-2 bottom-3">
              <img src={verifiedIcon}></img>
            </div>
          ) : (
            <div className="absolute inset-y-0 flex items-center right-2 bottom-1">
              <img src={alertIcon} alt="test" />
            </div>
          ))}
      </div>
      {errorMessages && (
        <p className="text-xs text-right text-red-500 font-semibold">
          {errorMessages}
        </p>
      )}
    </>
  );
};

export default Input;
