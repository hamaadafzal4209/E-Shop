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

function ProductCard({ data }) {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");

  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 cursor-pointer relative">
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            className="w-11/12 h-[170px] object-contain"
            alt={data.name}
          />
        </Link>
        <Link to="/">
          <h5 className="py-3 text-[15px] text-blue-400">{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h5 className="pb-3 font-medium">
            {data.name.length > 40 ? `${data.name.slice(0, 40)}...` : data.name}
          </h5>
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
          <div className="pt-4 flex items-center justify-between">
            <div className="flex items-center">
              <h5 className="font-bold text-[18px] text-[#333] font-Roboto">
                {data.discount_price ? data.discount_price : data.price}$
              </h5>
              {data.discount_price && (
                <h5 className="font-[500] text-[16px] text-[#d55b45] pl-2 line-through">
                  {data.price}$
                </h5>
              )}
            </div>
            <div className="font-normal text-[17px] text-[#68d284]">
              <h5>{data.total_sell} sold</h5>
            </div>
          </div>
        </Link>

        {/* side options */}
        {click ? (
          <AiFillHeart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={() => setClick(!click)}
            color="red"
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="cursor-pointer absolute right-2 top-5"
            onClick={() => setClick(!click)}
            color="#333"
            title="Add to wishlist"
          />
        )}
        <AiOutlineEye
          size={22}
          className="cursor-pointer absolute right-2 top-14"
          onClick={() => setOpen(!open)}
          color="#333"
          title="Quick View"
        />
        <AiOutlineShoppingCart
          size={25}
          className="cursor-pointer absolute right-2 top-24"
          color="#444"
          title="Add to cart"
        />
        {open && <ProductDetailsPopup setOpen={setOpen} data={data} />}
      </div>
    </>
  );
}

export default ProductCard;
