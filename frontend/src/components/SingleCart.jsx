// SingleCart.js
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { backend_url } from "../server";

function SingleCart({ data, quantityChangeHandler, removeFromCartHandler }) {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.discountPrice * value;

  const increment = () => {
    if (data.stock <= value) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
      const updateCartData = { ...data, qty: value - 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  return (
    <div className="py-4 pr-2">
      <div className="flex w-full items-center gap-2">
        <div className="flex flex-col gap-1">
          <div
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-[#e4434373] bg-[#e44343] text-white"
            onClick={increment}
          >
            <FaPlus size={16} />
          </div>
          <span className="text-center">{value}</span>
          <div
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-[#e4434373] bg-[#a7abb14f]"
            onClick={decrement}
          >
            <FaMinus size={16} color="#7d879c" />
          </div>
        </div>
        <div className="">
          <img
            src={`${backend_url}/${data.images[0]}`}
            className="h-20 w-20 object-contain"
            alt={data.name}
          />
        </div>
        <div className="w-full">
          <h2 className="font-semibold">{data.name}</h2>
          <h4 className="py-1 text-sm font-normal text-[#00000082]">
            ${data.discountPrice} * {value}
          </h4>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[#d02222]">${totalPrice.toFixed(2)}</h3>
            <span
              className="cursor-pointer text-sm text-red-600 hover:underline"
              onClick={() => removeFromCartHandler(data)}
            >
              remove
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCart;