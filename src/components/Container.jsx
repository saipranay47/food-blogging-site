import React from "react";

function Container({ children, ...props }) {
  return (
    <div className="max-w-[1440px] mx-auto lg:px-24 p-5" {...props}>
      {children}
    </div>
  );
}

export default Container;
