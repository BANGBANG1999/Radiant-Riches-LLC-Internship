import React from "react";

function SignUp() {
  return (
    <>
      <div className=" flex justify-between w-[70%] lg:w-[60%] mx-auto mt-[6rem] mb-[4rem] bg-[#FBFCFD] items-center">
        <div className="text-xl lg:text-2xl lg:w-[32%]">
          Sign up and get exclusive special deals
        </div>
        <div>
          <div className="w-[90px] h-[38px] flex justify-center mx-auto bg-[#1B88F4] rounded-md text-white cursor-pointer">
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
