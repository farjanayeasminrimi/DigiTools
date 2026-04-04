import React from "react";
import PricingIntro from "./PricingIntro/PricingIntro";
import PricingCards from "./PricingCards/PricingCards";

const PricingSection = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 md:px-0  gap-4 items-center ">
      <PricingIntro></PricingIntro>
      <PricingCards></PricingCards>
    </div>
  );
};

export default PricingSection;
