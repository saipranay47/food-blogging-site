import React from "react";
import Container from "./Container";
import aboutImg from "../assets/about.png";
import Button from "./Button";

function About() {
  return (
    <div className=" bg-[#F6F7F9] lg:my-44 max-md:py-40">
      <div className="mx-auto max-w-[1440px] lg:px-24 px-5 flex justify-around items-center">
        <img src={aboutImg} alt="" className="hidden lg:block " />
        <div className="w-full max-w-md flex flex-col max-md:justify-center max-md:items-center max-md:text-center">
          <h2 className=" text-[45px] leading=[27px] text-[#0E2368] font-bold max-md:text-[26px] max-md:leading-[35px]">
            About Us
          </h2>
          <p className="max-md:text-[11px] max-md:leading-[21px] max-md:max-w-[275px] max-md:my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
          <Button variant="filled" additionalClasses="w-max mt-[21px] max-md:mt-0">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
