/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import ProductDetailsPopup from "./ProductDetailsPopup";
import { backend_url } from "../server";

function ProductCard({ data }) {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const productName = encodeURIComponent(data.name.replace(/\s+/g, "-"));
    const imageUrl =
    data.images && data.images.length > 0
      ? `${backend_url}/${data.images[0]}`
      : "https://cdn-icons-png.flaticon.com/128/44/44289.png";

  return (
    <>
      <div className="relative h-[370px] w-full md:max-w-72 cursor-pointer rounded-lg bg-white p-3 shadow-sm">
        <Link to={`/product/${productName}`}>
          <img
            src={imageUrl}
            className="h-[170px] w-11/12 object-contain pr-2"
            alt={data.name}
          />
        </Link>
        <Link to="/">
          <h5 className="py-3 text-[15px] text-blue-400">
            {data.shop?.name || "Unknown Shop"}
          </h5>
        </Link>
        <Link to={`/product/${productName}`}>
          <h5 className="mb-2 line-clamp-2 font-medium">{data.name}</h5>
          <div className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <AiFillStar
                key={i}
                className="mr-1 cursor-pointer"
                color="#F6BA00"
                size={20}
              />
            ))}
            <AiOutlineStar
              className="mr-1 cursor-pointer"
              color="#F6BA00"
              size={20}
            />
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center">
              <h5 className="font-Roboto text-[18px] font-bold text-[#333]">
                {data.discountPrice ? data.discountPrice : data.originalPrice}$
              </h5>
              {data.discountPrice && (
                <h5 className="pl-2 text-[16px] font-[500] text-[#d55b45] line-through">
                  {data.originalPrice}$
                </h5>
              )}
            </div>
            <div className="text-[17px] font-normal text-[#68d284]">
              <h5>{data.sold_out} sold</h5>
            </div>
          </div>
        </Link>

        {/* side options */}
        {click ? (
          <AiFillHeart
            size={22}
            className="absolute right-2 top-5 cursor-pointer"
            onClick={() => setClick(!click)}
            color="red"
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="absolute right-2 top-5 cursor-pointer"
            onClick={() => setClick(!click)}
            color="#333"
            title="Add to wishlist"
          />
        )}
        <AiOutlineEye
          size={22}
          className="absolute right-2 top-14 cursor-pointer"
          onClick={() => setOpen(!open)}
          color="#333"
          title="Quick View"
        />
        <AiOutlineShoppingCart
          size={25}
          className="absolute right-2 top-24 cursor-pointer"
          color="#444"
          title="Add to cart"
        />
        {open && <ProductDetailsPopup setOpen={setOpen} data={data} />}
      </div>
    </>
  );
}

export default ProductCard;