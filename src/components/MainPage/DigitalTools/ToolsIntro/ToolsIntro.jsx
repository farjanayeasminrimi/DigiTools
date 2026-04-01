import React from "react";

const ToolsIntro = () => {
  return (
    <div className="max-w-[600px] mx-auto flex flex-col gap-4 items-center text-center">
      <h1 className="title text-5xl font-extrabold">Premium Digital Tools</h1>
      <p className="description text-[1rem]">
        Choose from our curated collection of premium digital products designed to boost your
        productivity and creativity.
      </p>
      <div className="flex gap-5">
        <button className="btn text-[.9rem] font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl hover:from-white hover:to-white hover:text-purple-700 transition transform ease-in hover:border-purple-800 px-6">
          Products
        </button>
        <button className="btn text-purple-600 rounded-3xl px-6 hover:border-purple-800">
          Cart (0)
        </button>
      </div>
    </div>
  );
};

export default ToolsIntro;
