import React from "react";
import hero from "../../assets/banner.png";
import { Loader } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="hero bg-base-200 mt-2">
      <div className="hero-content flex-col lg:flex-row-reverse gap-3 md:gap-25 my-2">
        <div className="flex-1">
          <img src={hero} className="rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1">
          <button className="btn flex-row items-center bg-blue-100 rounded-3xl mb-6">
            <Loader size={14} color="purple"></Loader>
            <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent inline-block rounded-3xl">
              New: AI-Powered Tools Available
            </span>
          </button>
          <h1 className="text-5xl font-extrabold leading-16">Supercharge Your Digital Workflow</h1>
          <p className="py-6 text-[1rem] leading-8">
            Access premium AI tools, design assets, templates, and productivity software—all in one
            place. Start creating faster today. Explore Products
          </p>
          <div className="flex gap-4">
            <button className="btn text-[.9rem] font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl hover:from-white hover:to-white hover:text-black transition transform ease-in hover:border-purple-800 ">
              Get Started
            </button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
