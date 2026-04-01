import React, { Suspense } from "react";
import ToolsIntro from "./ToolsIntro/ToolsIntro";
import ToolsCards from "./ToolsCards/ToolsCards";

const toolsDataLoad = async () => {
  const toolsRes = await fetch("/public/JsonData/Products.json");
  return await toolsRes.json();
};

const DigitalTools = ({ selectedCart, setSelectedCart }) => {
  return (
    <div className="max-w-[1240px] mx-auto py-20 flex flex-col gap-5">
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <ToolsIntro
          toolsDataLoad={toolsDataLoad()}
          selectedCart={selectedCart}
          setSelectedCart={setSelectedCart}
        ></ToolsIntro>
      </Suspense>
    </div>
  );
};

export default DigitalTools;
