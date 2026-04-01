import { useState } from "react";

const ToolsIntro = () => {
  const [active, setActive] = useState("products");

  return (
    <div className="max-w-[600px] mx-auto flex flex-col gap-4 items-center text-center">
      <h1 className="title text-5xl font-extrabold">Premium Digital Tools</h1>
      <p className="description text-[1rem]">
        Choose from our curated collection of premium digital products designed to boost your
        productivity and creativity.
      </p>
      <div className="flex gap-5">
        <button
          onClick={() => {
            setActive("products");
          }}
          className={`btn text-[.9rem] font-semibold ${active === "products" ? `bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#9514FA] hover:to-[#4F39F6]  hover:border-purple-800` : `text-purple-600  border-purple-800`} px-6 rounded-3xl transition transform  ease-in `}
        >
          Products
        </button>
        <button
          onClick={() => {
            setActive("cart");
          }}
          className={`btn text-[.9rem] font-semibold ${active === "cart" ? `bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#9514FA] hover:to-[#4F39F6]  hover:border-purple-800` : `text-purple-600  border-purple-800`} px-6 rounded-3xl transition transform  ease-in `}
        >
          Cart (0)
        </button>
      </div>
    </div>
  );
};

export default ToolsIntro;
