import React from "react";

const sizes = {
  xs: "text-[11px] font-normal",
  lg: "text-sm font-medium",
  s: "text-xs font-normal",
  "2xl": "text-base font-medium leading-5",
  "3xl": "text-xl font-medium leading-[25px]",
  "4xl": "text-4xl font-medium",
  xl: "text-[15px] font-medium leading-[19px]",
  md: "text-[13px] font-medium leading-4",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_06 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
