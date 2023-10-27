import React from "react";

const Button = ({ children, variant, additionalClasses, ...props }) => {
  const baseClasses = "rounded-full py-3 px-7 text-white max-md:text-[11px] max-md:py-2 max-md:px-4";

  const outlinedClasses =
    "text-black border border-black bg-transparent hover:bg-gray-100 hover:text-gray-800";
  const filledClasses =
    "bg-[#E23744] hover:bg-[#e23745cb] text-white hover:text-white";

  let variantClasses = "";
  if (variant === "outlined") {
    variantClasses = outlinedClasses;
  } else if (variant === "filled") {
    variantClasses = filledClasses;
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${additionalClasses}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
