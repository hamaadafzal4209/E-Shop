import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function SingleCart({ data }) {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center gap-4">
        <div className="flex flex-col gap-1">
          <div
            className="bg-[#e44343] border border-[#e4434373] rounded-full w-6 h-6 flex items-center justify-center text-white cursor-pointer"
            onClick={() => setValue(value + 1)}
          >
            <FaPlus size={16} />
          </div>
          <span className="text-center">{value}</span>
          <div
            className="bg-[#a7abb14f] border border-[#e4434373] rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <FaMinus size={16} color="#7d879c" />
          </div>
        </div>
        <div className="">
          <img
            src="https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ="
            className="w-20 h-20 object-contain"
            alt=""
          />
        </div>
        <div>
          <h2 className="font-semibold ">{data.name}</h2>
          <h4 className="font-normal text-sm py-1 text-[#00000082]">
            {data.price} * {value}
          </h4>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[#d02222]">${totalPrice}</h3>
            <span className="text-red-600 hover:underline text-sm cursor-pointer">
              remove
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCart;
