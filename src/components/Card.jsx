import React from "react";

function Card({
  title,
  description,
  trendingIn,
  highlights,
  rating,
  ratingComment,
}) {
  return (
    <>
      <div className="relative">
        {trendingIn && (
          <div className="w-[98px] h-[34px] bg-[#FF7724] rounded-md text-white flex justify-center items-center text-xs absolute top-[-4%] xl:top-[-4%] left-[12%] ">
            {trendingIn == "Best Choice" ? (
              <div>
                <i class="fa-solid fa-trophy"></i>
              </div>
            ) : (
              <div>
                <i class="fa-regular fa-gem"></i>
              </div>
            )}

            <div className="ml-1">{trendingIn}</div>
          </div>
        )}

        <div className="mx-auto w-[67%] mt-[4rem] xl:flex justify-evenly">
          <div className="xl:m-auto xl:w-[24%]">
            <div className="flex justify-center">
              <img src="card.png" alt="" />
            </div>
          </div>

          <div className="flex flex-col text-center xl:text-start items-center">
            <div className="thisOnly xl:w-[69%] ">
              <b>{title}</b> - {description}
            </div>
            <div className="mt-1 xl:w-[67%]">
              <div className="xl:flex xl:mb-2">
                <b>Main highlights</b>
              </div>
              {highlights == "" ? (
                <div className="xl:ml-[1rem]">
                  <div className="mt-2">
                    <div className="flex flex-col bg-[#FFF4ED] w-[20rem]">
                      <div className="flex">
                        <div className="mr-2 ml-2 mt-1 mb-1 text-center bg-white w-[2rem]">
                          9.9
                        </div>
                        <div>Building Responsive</div>
                      </div>
                      <div className="flex">
                        <div className="mr-2 ml-2 mt-1 mb-1 text-center bg-white w-[2rem]">
                          8.9
                        </div>
                        <div>Cool</div>
                      </div>
                      <div className="flex">
                        <div className="mr-2 ml-2 mt-1 mb-1 text-center bg-white w-[2rem]">
                          8.9
                        </div>
                        <div>Docs</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                highlights
              )}
            </div>
            <div className="mt-1 xl:flex lg:w-[67%] xl:items-baseline xl:justify-start text-blue-500">
              Show more{" "}
              <i className="fa-solid fa-angle-down xl:ml-2 cursor-pointer"></i>
            </div>
          </div>

          <div className="text-center mt-2 xl:mt-[0rem]">
            <div className="w-[7rem] h-[6rem] bg-[#f3f9ff] flex flex-col justify-center mx-auto rounded">
              <div className="text-2xl">{rating}</div>
              <div>{ratingComment}</div>
              <div>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#FFD43B" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#FFD43B" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#FFD43B" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#FFD43B" }}
                ></i>
                <i
                  className="fa-solid fa-star-half-stroke"
                  style={{ color: "#FFD43B" }}
                ></i>
              </div>
            </div>
            <div className="w-[232px] h-[48px] flex justify-center mx-auto mt-[2rem] bg-[#1B88F4] rounded-md text-white xl:mt-[3.5rem] cursor-pointer">
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
