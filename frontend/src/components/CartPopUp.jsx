import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import SingleCart from "./SingleCart";
import { Link } from "react-router-dom";

function CartPopUp({ setOpenCart }) {
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
    <div className="animate-fadeIn fixed right-0 top-0 z-[300] h-full w-full bg-[#0000004b]">
      <div className="fixed right-0 top-0 flex h-full w-full max-w-sm flex-col justify-between overflow-auto bg-white shadow-sm">
        <div className="no-scrollbar overflow-auto pt-[30px]">
          {/* cross icon */}
          <div>
            <RxCross1
              size={25}
              className="absolute right-3 top-3 z-[200] cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* item length */}
          <div className="flex items-center gap-2 p-4">
            <IoBagHandleOutline size={25} className="inline-block" />
            <h5 className="text-[20px] font-semibold">3 items</h5>
          </div>

          {/* cart items */}
          <div className="w-full border-t">
            {cartData &&
              cartData.map((item, index) => (
                <SingleCart key={index} data={item} />
              ))}
          </div>
        </div>

        {/* checkout button */}
        <div className="border-t bg-white px-4 py-4 text-white">
          <Link to="/checkout">
            <div className="flex h-11 w-full items-center justify-center rounded-md bg-[#e44343]">
              <h1 className="font-semibold text-white">
                Checkout Now (USD$1000)
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPopUp;
