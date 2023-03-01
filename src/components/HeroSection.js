import React from "react";
import Image from "../Image/PNG.png";

function HeroSection() {
  return (
    <>
      <div className="hero">
        <img src={Image} alt="kanha" height={200} className="Order-Now" />
      </div>
    </>
  );
}

export default HeroSection;
