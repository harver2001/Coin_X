import React from "react";

const sizes = {
  "2xl": "text-[28px] font-semibold leading-[34px]",
  xl: "text-2xl font-semibold leading-[30px]",
  s: "text-base font-semibold",
  md: "text-lg font-semibold leading-[23px]",
  xs: "text-[15px] font-semibold",
  lg: "text-xl font-bold leading-[140%]",
};

const Heading = ({ children, className = "", size = "xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
