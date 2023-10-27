import React from "react";
import blogImg from "../assets/blogImages/grilled-tomatoes-1.png";
import Button from "./Button";
function BlogCard({title, img, description}) {
  return (
    <div className="max-w-[381px] border-2 border-[#D6DCEE] rounded-3xl p-[26px] max-md:mb-5">
      <img src={img} alt={title} />
      <div className="flex flex-col gap-4 mt-5 max-md:text-center max-md:items-center">
        <h3 className="text-[21px] leading-[27px] max-md:text-[15px] max-md:leading-[35px] font-bold text-[#0E2368]">
          {title}
        </h3>
        <p className="text-[15px] leading-[27px] max-md:text-[12px] max-md:leading-[27px] line-clamp-3">
          {description}
        </p>
        <Button variant="outlined" additionalClasses="w-max mb-0">
          Read More
        </Button>
      </div>
    </div>
  );
}

export default BlogCard;
