import React from "react";
import Container from "./Container";
import heroImge from "../assets/hero.png";
import Button from "./Button";

function Hero() {
  return (
    <Container>
      <div className="flex items-center justify-between min-h-[70vh] space-y-6 py-24 max-lg:flex-col-reverse">
        <div className="flex flex-col text-center lg:text-left max-w-[345px] max-lg:mt-[60vh] max-md:mt-[35vh] max-md:items-center max-md:max-w-[270px]">
          <h1 className="text-6xl font-bold leading-[69px] text-[#0E2368] z-30 max-md:text-[38px] max-md:leading-[46px] w-full">
            Discover the <span className="text-[#E23744]"> Best </span> Food and
            Drinks
          </h1>
          <p className="text-base leading-7 my-6 max-md:text-[11px] max-md:leading-[18px] max-md:max-w-[240px] max-md:my-4">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <Button variant="filled" additionalClasses="w-max text-xl max-md:text-xs">Explore Now!</Button>
        </div>

        <img
          src={heroImge}
          alt="hero image"
          className=" absolute right-0 top-0 z-0 !mt-0 lg:h-[92vh] h-auto max-lg:w-full"
        />
      </div>
    </Container>
  );
}

export default Hero;
