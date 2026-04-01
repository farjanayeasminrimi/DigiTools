import React from "react";

const StatSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  ">
      <div
        className="stats   shadow text-center flex flex-row justify-center
     items-center py-12 text-white"
      >
        <div className="stat border-r border-gray-400">
          <div className="stat-value">50K+</div>
          <div className="stat-desc text-white ">Active Users</div>
        </div>
        <div className="stat border-r border-gray-400">
          <div className="stat-value">200+</div>
          <div className="stat-desc text-white">Premium Tools</div>
        </div>
        <div className="stat">
          <div className="stat-value">4.9</div>
          <div className="stat-desc text-white">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default StatSection;
