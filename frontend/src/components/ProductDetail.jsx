/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import ProductDetailInfo from "./ProductDetailInfo";
import { backend_url } from "../server";
import Loader from "./Loader";

function ProductDetail({ data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);

  const handleMessageSubmit = () => {
    // Implement message sending functionality
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  if (!data) {
    return (
      <h1 className="p-6 text-center">
        <Loader />
      </h1>
    );
  }

  const { images, name, description, originalPrice, discountPrice, shop } = data;

  // Ensure images array and shop are not empty
  if (!images || images.length === 0) {
    console.log("No images available for this product.");
  }

  return (
    <div className="bg-white">
      {data ? (
        <div className="section">
          {/* product details */}
          <div className="w-full py-5">
            <div className="flex flex-col items-start gap-6 md:flex-row">
              {/* left section */}
              <div className="flex w-full flex-col items-center md:w-1/2">
                <img
                  src={images && images.length > 0
                    ? `${backend_url}/${images[select]}`
                    : "path/to/placeholder-image.jpg"}
                  className="mb-4 max-h-[350px] w-[80%] object-contain"
                  alt={name || "Product Image"}
                />
                <div className="w-full flex items-center gap-4 overflow-x-auto justify-center">
                  {images &&
                    images.map((i, index) => (
                      <div
                        key={index}
                        className={`${
                          select === index ? "border" : ""
                        } cursor-pointer`}
                      >
                        <img
                          src={`${backend_url}/${i}`}
                          alt={`Thumbnail ${index + 1}`}
                          className="mr-3 mt-3 w-[200px] h-24 flex-shrink-0 object-contain overflow-hidden"
                          onClick={() => setSelect(index)}
                        />
                      </div>
                    ))}
                </div>
              </div>
              {/* right section */}
              <div className="w-full px-1.5 pt-5 md:w-1/2">
                <h1 className="font-Roboto text-2xl font-[600] text-[#333]">
                  {name || "Product Name"}
                </h1>
                <p className="pt-2">{description || "No description available."}</p>
                <div className="flex items-center pt-3">
                  <h5 className="font-Roboto text-[18px] font-bold text-[#333]">
                    {discountPrice ? discountPrice : originalPrice}$
                  </h5>
                  {discountPrice && (
                    <h5 className="pl-2 text-[16px] font-[500] text-[#d55b45] line-through">
                      {originalPrice}$
                    </h5>
                  )}
                </div>
                <div className="mt-8 flex items-center justify-between pr-3">
                  <div>
                    <button
                      className="rounded-l bg-gradient-to-r from-teal-400 to-teal-500 px-4 py-2 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:opacity-75"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 px-4 py-[11px] font-medium text-gray-800">
                      {count}
                    </span>
                    <button
                      className="rounded-r bg-gradient-to-r from-teal-400 to-teal-500 px-4 py-2 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:opacity-75"
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
                <button className="my-4 flex items-center gap-2 rounded-md bg-black px-5 py-3 text-white">
                  Add to cart <AiOutlineShoppingCart size={22} />
                </button>
                <div className="my-8 flex flex-wrap items-center gap-2 sm:flex-nowrap sm:gap-6">
                  <div className="flex items-center gap-2">
                    <div>
                      <img
                        src={shop?.avatar ? `${backend_url}/${shop.avatar}` : "path/to/placeholder-image.jpg"}
                        className="h-12 w-12 rounded-full"
                        alt={shop?.name || "Shop Avatar"}
                      />
                    </div>
                    <div>
                      <h3 className="text-[15px] text-blue-400">
                        {shop?.name || "Unknown Shop"}
                      </h3>
                      <h5 className="text-[15px]">
                        {shop?.ratings || "No ratings"}
                      </h5>
                    </div>
                  </div>
                  {/* send message button */}
                  <button
                    className="my-3 flex items-center gap-2 rounded-md bg-purple-800 px-5 py-3 text-white"
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
        <h1 className="p-6 text-center">Product not found!</h1>
      )}
    </div>
  );
}

export default ProductDetail;