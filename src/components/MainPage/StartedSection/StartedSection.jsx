import React from "react";
import StartedIntro from "./StartedIntro/StartedIntro";
import StartedCards from "./StartedCards/StartedCards";

const StartedSection = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 md:px-0  gap-4 items-center ">
      <StartedIntro></StartedIntro>
      <StartedCards></StartedCards>
    </div>
  );
};

export default StartedSection;
