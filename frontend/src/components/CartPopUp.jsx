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
    <div className="fixed top-0 right-0 w-full h-full bg-[#0000004b] z-[100]">
      <div className="fixed top-0 right-0 h-full max-w-sm w-full bg-white shadow-sm flex flex-col justify-between overflow-auto">
        <div className="pt-[30px] overflow-auto no-scrollbar">
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
        <div className="px-4 py-4 bg-white text-white border-t">
          <Link to="/checkout">
            <div className="h-11 flex items-center justify-center w-full bg-[#e44343] rounded-md">
              <h1 className="text-white font-semibold">
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
