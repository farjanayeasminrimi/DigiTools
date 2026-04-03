import React from "react";
import PricingIntro from "./PricingIntro/PricingIntro";
import PricingCards from "./PricingCards/PricingCards";

const PricingSection = () => {
  return (
    <div className="max-w-[1240px] mx-auto  gap-4 items-center ">
      <PricingIntro></PricingIntro>
      <PricingCards></PricingCards>
    </div>
  );
};

export default PricingSection;
