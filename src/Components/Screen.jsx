import React from "react";

function Screen() {
  return (
    <div className="flex flex-col items-center justify-center" id="mode">
      <ul className="flex justify-center mt-[85px]">
        <li>Study</li>
        <li>Quiz</li>
        <li>Test</li>
        <li>Game</li>
        <li>Others</li>
      </ul>
      <div>
        <div
          id="screen"
          className=" h-[393px] w-[712px] rounded-[50px] mt-[32px] flex justify-center items-center text-white font-[Lato] text-[39px] relative"
        >
          <img
            src="../public/Frame (3).png"
            className="absolute right-[34px] top-[34px] bg-transparent cursor-pointer"
            alt=""
          />
          <img
            src="../public/Frame (4).png"
            className="absolute left-[34px] top-[34px] bg-transparent cursor-pointer"
            alt=""
          />
          9 + 6 + 7x - 2x - 3
        </div>
        <div className="flex justify-between mt-[32px]">
          <img
            src="../public/Vector.png"
            alt=""
            className="p-[15px] cursor-pointer"
          />
          <div className="flex items-center">
            <img
              src="../public/Vector (1).png"
              alt=""
              className="cursor-pointer"
            />
            <h3 className="px-[43px] text-[24px] font-[Inter] font-[700]">
              01/10
            </h3>
            <img
              src="../public/Vector (2).png"
              alt=""
              className="cursor-pointer"
            />
          </div>
          <img
            src="../public/Vector (3).png"
            alt=""
            className="p-[15px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Screen;
