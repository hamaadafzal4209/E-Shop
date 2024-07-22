import { RxCross1 } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import SingleWhislist from "./SingleWhislist";

function WhishListPopUp({ setOpenWhishlist }) {
  const cartData = [
    {
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram",
      description: "test",
      price: 240,
    },
    {
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram",
      description: "test",
      price: 240,
    },
    {
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram",
      description: "test",
      price: 240,
    },
    {
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram",
      description: "test",
      price: 240,
    },
    {
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram",
      description: "test",
      price: 240,
    },
  ];

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-[#0000004b] z-[100]">
      <div className="fixed top-0 right-0 h-full max-w-sm w-full bg-white shadow-sm flex flex-col justify-between overflow-auto no-scrollbar">
        <div className="pt-[40px]">
          {/* cross icon */}
          <div>
            <RxCross1
              size={25}
              className="absolute right-3 top-3 z-[200] cursor-pointer"
              onClick={() => setOpenWhishlist(false)}
            />
          </div>
          {/* item length */}
          <div className="flex items-center gap-2 p-4">
            <FaRegHeart size={25} className="inline-block" />
            <h5 className="text-[20px] font-semibold ">3 items</h5>
          </div>

          {/* cart items */}

          <div className="w-full border-t">
            {cartData &&
              cartData.map((item, index) => (
                <SingleWhislist key={index} data={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhishListPopUp;
