import { toast } from "react-toastify";

const ToolCard = ({ card, selectedCart, setSelectedCart }) => {
  const features = card.features;
  // console.log(card);
  const purchaseHandler = () => {
    const existingCard = selectedCart.find((item) => item.id === card.id);
    if (existingCard) {
      toast.error("Already added");
      return;
    }

    const newArr = [...selectedCart, card];
    setSelectedCart(newArr);
    toast.success("Added to cart");
  };
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        {/* Status */}
        <div className="flex justify-end mb-2">
          {card.tagType === "best seller" ? (
            <span className="button rounded-3xl  px-5  bg-amber-100 text-amber-700 capitalize font-semibold">
              {card.tag}
            </span>
          ) : card.tagType === "new" ? (
            <span className="button rounded-3xl  px-5  bg-purple-200 text-purple-600 capitalize font-semibold">
              {card.tag}
            </span>
          ) : (
            <span className="button rounded-3xl  px-5  bg-green-100 text-green-700 capitalize font-semibold ">
              {card.tag}
            </span>
          )}
        </div>
        {/* icon */}
        <div className="mb-4">
          <img src={card.icon} alt="icon png" />
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold title ">{card.name}</h2>
          <p className="description">{card.description}</p>
        </div>
        <div className="mt-2">
          <span className="text-xl font-semibold title">${card.price}</span>
          <span className="description">/{card.period}</span>
        </div>

        <ul className="mt-2 flex flex-col gap-2 text-xs">
          {features.map((link, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="description">{link}</span>
            </li>
          ))}
        </ul>
        <div className="mt-2">
          <button
            onClick={purchaseHandler}
            className="btn w-full text-[.9rem] font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl hover:from-white hover:to-white hover:text-purple-700 transition transform ease-in hover:border-purple-800 "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
