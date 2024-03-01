import React from "react";

function Hero() {
  return (
    <>
      <div className="text-xl md:text-[3rem] text-center my-8">
        <h1>Best Website builders in the US</h1>
      </div>

      <div className="flex justify-center">
        <div className="w-[70%] h-[1px] bg-[#E1E4E6]"></div>
      </div>
      <div className="md:flex md:items-center md:justify-around">
        <div className="flex justify-center">
          <div className="mr-5">
            <i className="fa-regular fa-circle-check mr-2"></i>Last Updated -
            February 22, 2020
          </div>
          <div className="mr-5">
            <i className="fa-solid fa-circle-info mr-2"></i>Advertising
            Disclosure
          </div>
        </div>
        <div className="text-center my-2">
          Top Relevant <i class="fa-solid fa-angle-down cursor-pointer"></i>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[70%] h-[1px] bg-[#E1E4E6]"></div>
      </div>
    </>
  );
}

export default Hero;
