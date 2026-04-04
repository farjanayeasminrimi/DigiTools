import { TriangleAlert } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const Carts = ({ selectedCart, setSelectedCart }) => {
  let totalCount = selectedCart.reduce((total, cart) => total + cart.price, 0);
  const removeHandler = (cart) => {
    const remainingCart = selectedCart.filter((element) => element.id != cart.id);
    setSelectedCart(remainingCart);
  };
  return (
    <div className="space-y-4">
      {selectedCart.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <TriangleAlert size={50} color="blue"></TriangleAlert>
          </div>
          <p className="description">Not a single item purchased!!!!!!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {selectedCart.map((cart) => (
            <div key={cart.id}>
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
                  <button
                    onClick={() => {
                      removeHandler(cart);
                    }}
                    className="btn text-red-700 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <h1 className="description font-semibold">Total:</h1>
            <h1 className="text-xl title ">${totalCount}</h1>
          </div>
          <button
            onClick={() => {
              setSelectedCart([]);
              toast.success("Successfully proceed to checkout");
            }}
            className="btn text-[.9rem] w-full font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl hover:from-white hover:to-white hover:text-purple-700 transition transform ease-in hover:border-purple-800 "
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Carts;
