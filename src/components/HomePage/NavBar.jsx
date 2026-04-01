import { ShoppingCart } from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <div className="py-3 px-3 bg-base-100 shadow-sm">
      <div className=" max-w-[1240px] mx-auto flex justify-between items-center">
        <div className="navbar-start flex gap-4 md:gap-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
          <a className=" text-3xl font-extrabold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent inline-block">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end  flex gap-1.25 md:gap-4 items-center">
          <span>
            <ShoppingCart></ShoppingCart>
          </span>
          <p className="text-[.9rem] font-semibold">Login</p>
          <button className="btn text-[.9rem] font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl hover:from-transparent hover:to-transparent hover:text-black transition transform ease-in  ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
