import React from "react";

const WorkFlow = () => {
  return (
    <div className="py-18 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  ">
      <div className="max-w-[700px] mx-auto flex flex-col gap-4 items-center text-center text-white">
        <h1 className=" text-4xl font-extrabold">Ready to Transform Your Workflow?</h1>
        <p className=" text-[.7rem]">
          Choose from our curated collection of premium digital products designed to boost your
          productivity and creativity.
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <button className="btn text-[.9rem] font-semibold  border text-purple-700 rounded-3xl bg-white   transition transform ease-in hover:border-white hover:text-white hover:bg-transparent">
            Explore Products
          </button>
          <button className="btn text-[.9rem] font-semibold  border hover:text-purple-700 rounded-3xl hover:bg-white   transition transform ease-in border-white text-white bg-transparent">
            View Pricing
          </button>
        </div>
        <p className=" text-[.7rem]">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default WorkFlow;
