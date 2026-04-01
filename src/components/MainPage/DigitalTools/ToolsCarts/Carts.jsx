import React from "react";

const Carts = ({ selectedCart, setSelectedCart }) => {
  let totalCount = selectedCart.reduce((total, cart) => total + cart.price, 0);
  return (
    <div className="space-y-4">
      {selectedCart.map((cart) => (
        <div>
          <div className="flex justify-between shadow-sm p-3 items-center border border-gray-200 rounded-lg">
            <div className="flex gap-4 items-center">
              <div>
                <img src={cart.icon} alt="icon png" />
              </div>
              <div>
                <h2 className="title text-xl font-semibold">{cart.name}</h2>
                <h2 className="description ">${cart.price}</h2>
              </div>
            </div>
            <div>
              <button className="btn text-red-700 font-semibold">Remove</button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between">
        <h1 className="text-xl title font-semibold">Total:</h1>
        <h1 className="text-xl title ">${totalCount}</h1>
      </div>
    </div>
  );
};

export default Carts;
