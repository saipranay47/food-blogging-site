import React from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import Button from "./Button";

function Navbar() {
  return (
    <div>
      <Container>
        <div className="flex w-full justify-between items-center z-10 relative">
          <img src={logo} alt="food bloging logo" className="hidden lg:block"/>
          <Button variant="outlined" additionalClasses="ml-auto !border-white !text-white hover:!bg-gray-200 hover:!text-gray-800">
            Get In Touch
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
