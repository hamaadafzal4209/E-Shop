import { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ProductDetailInfo from "./ProductDetailInfo";

function ProductDetail({ data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

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
      {data ? (
        <div className="section">
          {/* product detai; */}
          <div className="w-full py-5">
            <div className="flex items-start gap-6 flex-col md:flex-row">
              {/* left section */}
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <img
                  src={data.image_Url[select].url}
                  className="w-[80%] max-h-[350px] object-contain mb-4"
                  alt=""
                />
                <div className="w-full flex justify-center">
                  <div
                    className={`${select === 0 ? "border" : ""} cursor-pointer`}
                  >
                    <img
                      className="h-[200px] w-[200px] object-contain p-3"
                      onClick={() => setSelect(0)}
                      src={data?.image_Url[0]?.url}
                      alt={data?.name || "Product"}
                    />
                  </div>
                  <div
                    className={`${select === 1 ? "border" : ""} cursor-pointer`}
                  >
                    <img
                      className="h-[200px] w-[200px] object-contain p-3"
                      onClick={() => setSelect(1)}
                      src={data?.image_Url[1]?.url}
                      alt={data?.name || "Product"}
                    />
                  </div>
                </div>
              </div>
              {/* right section */}
              <div className="w-full md:w-1/2 pt-5 px-1.5">
                <h1 className="text-2xl font-[600] font-Roboto text-[#333]">
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
                <div className="flex items-center gap-2 sm:gap-6 flex-wrap sm:flex-nowraaddp my-8">
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
                      <h5 className="text-[15px]">
                        {data.shop.ratings} ratings
                      </h5>
                    </div>
                  </div>
                  {/* send message button */}
                  <button
                    className="flex items-center gap-2 bg-purple-800 text-white rounded-md px-5 py-3 my-3"
                    onClick={handleMessageSubmit}
                  >
                    Send Message <AiOutlineMessage size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* product detail info */}
          <ProductDetailInfo data={data} />
        </div>
      ) : (
        <h1 className="text-center p-6">Product not found!</h1>
      )}
    </div>
  );
}

export default ProductDetail;
