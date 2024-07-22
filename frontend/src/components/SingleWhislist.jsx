import { IoClose, IoCartOutline } from "react-icons/io5";

function SingleWhislist({ data }) {
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center gap-4">
        <div className="cursor-pointer">
          <IoClose />
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
          <h3 className="font-semibold text-lg text-[#d02222]">
            ${data.price}
          </h3>
        </div>
        <div className="cursor-pointer">
          <IoCartOutline size={22} />
        </div>
      </div>
    </div>
  );
}

export default SingleWhislist;
