import React from "react";
import StartedCard from "../StartedCard/StartedCard";

const StartedCards = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center my-20">
      <StartedCard
        user={"https://i.ibb.co.com/jkZjvQGt/user.png"}
        title="Create Account"
        description="Sign up for free in seconds. No credit card required to get started."
        serial="01"
      ></StartedCard>
      <StartedCard
        user={"https://i.ibb.co.com/ZpW5MBHZ/package.png"}
        title=" Choose Products"
        description="Browse our catalog and select the tools that fit your needs."
        serial="02"
      ></StartedCard>
      <StartedCard
        user={"https://i.ibb.co.com/9CfXvXM/rocket.png"}
        title="Start Creating"
        description="Download and start using your premium tools immediately."
        serial="03"
      ></StartedCard>
    </div>
  );
};

export default StartedCards;
