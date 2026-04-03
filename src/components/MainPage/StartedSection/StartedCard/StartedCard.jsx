import React from "react";

const StartedCard = ({ user, title, description, serial }) => {
  return (
    <div className="flex flex-col  space-y-3 border border-gray-300/40 shadow-lg  p-6 rounded-lg">
      <div className="flex justify-end">
        <div className="bg-purple-600 text-white py-1 px-2 rounded-full ">{serial}</div>
      </div>
      <div className="text-center space-y-3 mb-2">
        <div className="flex justify-center">
          <img src={user} alt="icon" />
        </div>
        <h2 className="title text-xl font-semibold mt-3">{title}</h2>
        <p className="description text-[1rem">{description}</p>
      </div>
    </div>
  );
};

export default StartedCard;
