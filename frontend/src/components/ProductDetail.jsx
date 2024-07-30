import { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import ProductDetailInfo from "./ProductDetailInfo";
import { backend_url } from "../server";

function ProductDetail({ data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  if (!data) {
    return <h1 className="text-center p-6">Loading...</h1>;
  }

  const { images, name, description, originalPrice, discountPrice, shop } = data;

  return (
    <div className="bg-white">
      {data ? (
        <div className="section">
          {/* product details */}
          <div className="w-full py-5">
            <div className="flex items-start gap-6 flex-col md:flex-row">
              {/* left section */}
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <img
                  src={images && images.length > 0 ? images[select]?.url : ''}
                  className="w-[80%] max-h-[350px] object-contain mb-4"
                  alt={name}
                />
                <div className="w-full flex justify-center">
                  {images && images.map((image, index) => (
                    <div
                      key={index}
                      className={`${select === index ? "border" : ""} cursor-pointer`}
                    >
                      <img
                        className="h-[200px] w-[200px] object-contain p-3"
                        onClick={() => setSelect(index)}
                        src={image.url}
                        alt={name}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* right section */}
              <div className="w-full md:w-1/2 pt-5 px-1.5">
                <h1 className="text-2xl font-[600] font-Roboto text-[#333]">
                  {name}
                </h1>
                <p className="pt-2">{description}</p>
                <div className="flex items-center pt-3">
                  <h5 className="font-bold text-[18px] text-[#333] font-Roboto">
                    {discountPrice ? discountPrice : originalPrice}$
                  </h5>
                  {discountPrice && (
                    <h5 className="font-[500] text-[16px] text-[#d55b45] pl-2 line-through">
                      {originalPrice}$
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
                <div className="flex items-center gap-2 sm:gap-6 flex-wrap sm:flex-nowrap my-8">
                  <div className="flex items-center gap-2">
                    <div>
                      <img
                        src={`${backend_url}/${data?.shop?.avatar}` || ''}
                        className="w-12 h-12 rounded-full"
                        alt={shop?.name}
                      />
                    </div>
                    <div>
                      <h3 className="text-[15px] text-blue-400">
                        {shop?.name || 'Unknown Shop'}
                      </h3>
                      <h5 className="text-[15px]">
                        {shop?.ratings || 'No ratings'}
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
