import React from "react";
import ToolCard from "../ToolCard/ToolCard";

const ToolsCards = ({ tools, selectedCart, setSelectedCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {tools.map((card) => (
        <ToolCard
          key={card.id}
          card={card}
          selectedCart={selectedCart}
          setSelectedCart={setSelectedCart}
        ></ToolCard>
      ))}
    </div>
  );
};

export default ToolsCards;
