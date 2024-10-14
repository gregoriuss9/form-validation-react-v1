import React from "react";
type Propstypes = {
  htmlFor?: string;
  children: string;
};
const Label = (props: Propstypes) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="block">
      {children}
    </label>
  );
};

export default Label;
