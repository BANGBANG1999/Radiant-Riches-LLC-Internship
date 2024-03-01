import React from "react";

function Footer() {
  return (
    <>
      <footer className="my-2 text-white flex flex-col text-center bg-[#212731] h-[452px] justify-center md:flex-row md:justify-between md:items-center">
        <div className="categories md:space-y-3 mt-[2rem] md:mt-[0rem] md:pl-[4rem] lg:pl-[284px] cursor-pointer">
          <div>
            <b>CATEGORIES</b>
          </div>
          <div>Web Builder</div>
          <div>Hosting</div>
          <div>Data Center</div>
          <div>Robotic-Automation</div>
        </div>
        <div className="contact md:space-y-3 mt-[2rem] md:mt-[0rem] cursor-pointer">
          <div>
            <b>CONTACT</b>
          </div>
          <div>Contact</div>
          <div>Privacy Policy</div>
          <div>Terms Of Service</div>
          <div>Categories</div>
          <div>About</div>
        </div>
        <div className="mt-[3rem] md:pr-[4rem] lg:pr-[284px] md:mt-[0rem] cursor-pointer">
          United States{" "}
          <i className="fa-solid fa-angle-down xl:ml-2 cursor-pointer"></i>
        </div>
      </footer>
    </>
  );
}

export default Footer;
