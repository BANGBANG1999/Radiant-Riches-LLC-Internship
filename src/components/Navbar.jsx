import React from "react";

function Navbar() {
  return (
    <>
      <nav className="text-white lg:flex max-w lg:flex-row lg:h-[64px] bg-[#212731]">
        <div className="rounded absolute ml-[17rem] h-[2rem] w-[10rem] top-[1.3rem] bg-white sm:left-[6rem] md:h-[2rem] md:ml-[30rem] md:top-[1.3rem] lg:sticky lg:top-[0rem] lg:w-[258px] lg:h-[37px] lg:mt-[14px] lg:ml-[480px] lg:rounded-[8px] lg:bg-white">
          <i className="fa-solid fa-magnifying-glass text-black pl-[1rem] md:pl-[1rem] lg:pl-[1rem] lg:pt-[0.6rem] cursor-pointer"></i>
        </div>
        <div className="ml-[5rem] sm:ml-[6rem] md:ml-[5rem] lg:ml-[79px] lg:mt-[23px] lg:text-white cursor-pointer">
          Categories
        </div>
        <div className="ml-[5rem] sm:ml-[6rem] md:ml-[5rem] lg:ml-[53px] lg:mt-[23px] lg:text-white cursor-pointer">
          Website Builders
        </div>
        <div className="ml-[5rem] sm:ml-[6rem] md:ml-[5rem] lg:ml-[53px] lg:mt-[23px] lg:text-white cursor-pointer">
          Today's deals
        </div>
      </nav>
    </>
  );
}

export default Navbar;
