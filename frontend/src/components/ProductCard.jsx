import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { MdOutlineRemoveShoppingCart } from "react-icons/md"; // Import the icon
import ProductDetailsPopup from "./ProductDetailsPopup";
import { backend_url } from "../server";
import { useDispatch, useSelector } from "react-redux";
import { addTocartAction, removeFromCartAction } from "../redux/actions/cart";

function ProductCard({ data }) {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [inCart, setInCart] = useState(false);

  const dispatch = useDispatch();
  const { cart = [] } = useSelector((state) => state.cart);

  const productName = encodeURIComponent(data.name.replace(/\s+/g, "-"));

  useEffect(() => {
    if (cart) {
      const isItemInCart = cart.some((item) => item._id === data._id);
      setInCart(isItemInCart);
    }
  }, [cart, data._id]);

  const handleCartClick = () => {
    if (inCart) {
      dispatch(removeFromCartAction(data._id));
    } else {
      const cartData = { ...data, qty: 1 };
      dispatch(addTocartAction(cartData));
    }
    setInCart(!inCart);
  };

  return (
    <>
      <div className="relative h-[370px] w-full cursor-pointer rounded-lg bg-white p-3 shadow-sm md:max-w-72">
        <Link to={`/product/${productName}`}>
          <img
            src={
              data.images && data.images.length > 0
                ? `${backend_url}/${data.images[0]}`
                : "https://cdn-icons-png.flaticon.com/128/44/44289.png"
            }
            className="h-[170px] w-11/12 object-contain pr-2"
            alt={data.name}
          />
        </Link>
        <Link to={`/shop/preview/${data?.shop._id}`}>
          <h5 className="py-3 text-[15px] text-blue-400">
            {data.shop?.name || "Unknown Shop"}
          </h5>
        </Link>
        <Link to={`/product/${productName}`}>
          <h5 className="mb-2 line-clamp-2 font-medium">{data?.name}</h5>
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

        {/* Side options */}
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
        <div
          className="absolute right-2 top-24 cursor-pointer"
          onClick={handleCartClick}
          title={inCart ? "Remove from cart" : "Add to cart"}
        >
          {inCart ? (
            <MdOutlineRemoveShoppingCart size={25} color="#444" />
          ) : (
            <AiOutlineShoppingCart size={25} color="#444" />
          )}
        </div>
        {open && <ProductDetailsPopup setOpen={setOpen} data={data} />}
      </div>
    </>
  );
}

export default ProductCard;
