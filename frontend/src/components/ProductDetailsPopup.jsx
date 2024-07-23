import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function ProductDetailsPopup({ setOpen, data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-white">
      {data && (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-[400] flex items-center justify-center">
          <div className="w-11/12 md:w-3/5 h-[90vh] overflow-y-scroll md:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50 cursor-pointer"
              onClick={() => setOpen(false)}
            />

            <div className="block w-full md:flex gap-6">
              {/* left */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center justify-center my-4">
                  <img
                    src={data.image_Url[0]?.url}
                    className="w-60 "
                    alt={data.name}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src={data.shop.shop_avatar.url}
                      className="w-12 h-12 rounded-full"
                      alt={data.shop.name}
                    />
                  </div>
                  <div>
                    <h3 className="text-[15px] text-blue-400">
                      {data.shop.name}
                    </h3>
                    <h5 className="text-[15px]">{data.shop.ratings} ratings</h5>
                  </div>
                </div>
                {/* send message button */}
                <button
                  className="flex items-center gap-2 bg-black text-white rounded-md px-5 py-3 my-3"
                  onClick={handleMessageSubmit}
                >
                  Send Message <AiOutlineMessage size={22} />
                </button>
                {/* sold out items */}
                <h6 className="text-base text-red-600">
                  ({data.total_sell}) sold out
                </h6>
              </div>
              {/* right */}
              <div className="w-full md:w-1/2 pt-5 px-1.5">
                <h1 className="text-[20px] text-[#333] font-semibold">
                  {data.name}
                </h1>
                <p className="pt-2">{data.description}</p>
                <div className="flex items-center pt-3">
                  <h5 className="font-bold text-[18px] text-[#333] font-Roboto">
                    {data.discount_price ? data.discount_price : data.price}$
                  </h5>
                  {data.discount_price && (
                    <h5 className="font-[500] text-[16px] text-[#d55b45] pl-2 line-through">
                      {data.price}$
                    </h5>
                  )}
                </div>
                <div className="flex items-center mt-8 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color="red"
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color="#333"
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                {/* add to cart button */}
                <button className="bg-black text-white px-5 py-3 flex items-center gap-2 my-4 rounded-md">
                  Add to cart <AiOutlineShoppingCart size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPopup;
