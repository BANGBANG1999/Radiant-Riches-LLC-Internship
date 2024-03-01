import React from "react";
import Deals from "./Deals";

function ShowDeals() {
  return (
    <>
      <div>
        <h1 className="text-xl text-center mb-[-3rem] mt-[5rem] lg:text-4xl lg:flex lg:mx-auto lg:w-[70%] lg:mb-[1rem]">
          Related deals you might like for
        </h1>
        <div className="lg:flex lg:w-[67%] lg:mx-auto">
          <div className="mr-[4%]">
            <Deals />
          </div>
          <div className="mr-[4%]">
            <Deals />
          </div>
          <div className="mr-[4%]">
            <Deals />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowDeals;
