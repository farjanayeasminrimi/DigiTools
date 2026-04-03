import React from "react";

const PricingCards = () => (
  <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 items-center  my-20">
    {/* Card 1 */}
    <div className="card group hover:text-white  hover:bg-purple-700 transition transform ease-in-out duration-500  bg-base-100 shadow-sm border border-gray-400/25">
      <div className="card-body space-y-3 ">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl  font-bold">Starter</h2>
          <p className=" ">Perfect for getting started</p>
        </div>
        <div className="">
          <span className="text-xl  font-semibold">$0</span>
          <span className="">/mo</span>
        </div>
        <ul className=" flex flex-col gap-2 text-xs">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Access to 10 free tools</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Community support</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Basic templates</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>1 project per month</span>
          </li>
        </ul>
        <div className="mt-3">
          <button className="w-full btn text-[.9rem] font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-lg   transition transform ease-in  group-hover:from-white group-hover:to-white group-hover:text-purple-600 ">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
    {/* card 2 */}
    <div className="card group hover:text-white hover:bg-purple-700 transition transform ease-in-out duration-500 bg-base-100 shadow-sm border border-gray-400/25">
      <div className="card-body space-y-3 relative">
        <div className=" flex justify-center absolute -top-2 right-38">
          <span className="badge badge-xs badge-warning ">Most Popular</span>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl  font-bold">Pro</h2>
          <p className="">Best for professionals</p>
        </div>
        <div>
          <span className="text-xl  font-semibold">$29</span>
          <span className="">/mo</span>
        </div>
        <ul className=" flex flex-col gap-2 text-xs">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Access to all premium tools</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Priority support</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Unlimited projects</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Advanced analytics</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Cloud sync</span>
          </li>
        </ul>
        <div className="mt-3 w-full">
          <button className="w-full btn text-[.9rem] font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-lg   transition transform ease-in  group-hover:from-white group-hover:to-white group-hover:text-purple-600  ">
            Start Pro Trial
          </button>
        </div>
      </div>
    </div>

    {/* card 3 */}
    <div className="card group hover:text-white hover:bg-purple-700 transition transform ease-in-out duration-500  bg-base-100 shadow-sm border border-gray-400/25">
      <div className="card-body space-y-3 ">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl  font-bold">Starter</h2>
          <p className="">Perfect for getting started</p>
        </div>
        <div>
          <span className="text-xl  font-semibold">$0</span>
          <span className="">/mo</span>
        </div>
        <ul className=" flex flex-col gap-2 text-xs">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Access to 10 free tools</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Community support</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Basic templates</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>1 project per month</span>
          </li>
        </ul>
        <div className="mt-3">
          <button className="w-full btn text-[.9rem] font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-lg   transition transform ease-in  group-hover:from-white group-hover:to-white group-hover:text-purple-600  ">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default PricingCards;
