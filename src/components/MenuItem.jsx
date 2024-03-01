import React from "react";

function MenuItem() {
  return (
    <>
      <div className="md:flex md:justify-center mt-4">
        <div className="flex justify-around md:justify-evenly mt-1 md:w-[72rem] cursor-pointer">
          <div>Tools</div>
          <div>AWS Builder</div>
          <div>Start Build</div>
          <div>Build Supplies</div>
          <div>Tooling</div>
          <div>BlueHosting</div>
        </div>
      </div>

      <div className="md:flex md:justify-center mt-4">
        <div className="flex justify-evenly lg:justify-start mx-[-0.5rem] mt-4 md:w-[65rem]">
          <div className="mr-2 mb-1 cursor-pointer">
            Home <i class="fa-solid fa-angle-right mt-1"></i>
          </div>
          <div className="mr-2 cursor-pointer">
            Hosting for all <i class="fa-solid fa-angle-right"></i>
          </div>
          <div className="mr-2 cursor-pointer">
            Hosting <i class="fa-solid fa-angle-right"></i>
          </div>
          <div className="mr-2 cursor-pointer">
            Hosting 6 <i class="fa-solid fa-angle-right"></i>
          </div>
          <div className="mr-2 cursor-pointer">Hosting 5</div>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
