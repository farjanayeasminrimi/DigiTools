import React from "react";
import ToolsIntro from "./ToolsIntro/ToolsIntro";
import ToolsCards from "./ToolsCards/ToolsCards";

const DigitalTools = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-20 flex flex-col gap-5">
      <ToolsIntro></ToolsIntro>
      <ToolsCards></ToolsCards>
    </div>
  );
};

export default DigitalTools;
