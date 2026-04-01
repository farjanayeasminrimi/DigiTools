import React from "react";
import ToolCard from "../ToolCard/ToolCard";

const ToolsCards = ({ tools }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tools.map((card) => (
        <ToolCard key={card.id} card={card}></ToolCard>
      ))}
    </div>
  );
};

export default ToolsCards;
