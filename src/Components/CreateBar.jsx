import React from "react";

function CreateBar() {
  return (
    <div className="flex mt-[80px] justify-between">
      <div className="flex items-center ">
        <img
          src="../public/Group1.png"
          alt=""
          className="w-[100px] bg-[#fff]  logo-img mr-5 "
        />
        <div className="flex flex-col ">
          <p className="font-[Inter] p-1 text-[#696671]">published by</p>
          <img src="../public/Component 40 (2).png" alt="" />
        </div>
      </div>
      <div className="flex  items-center">
        <img src="../public/Frame (5).png" className="cursor-pointer" alt="" />
        <h1 className="heading text-[28px] font-[600] pl-4">
          Create Flashcard
        </h1>
      </div>
    </div>
  );
}

export default CreateBar;
