import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllShopProducts } from "../../redux/actions/product";
import Ratings from "../Ratings";
import { backend_url } from "../../server";

function ShopProfileData({ isOwner }) {
  const { products } = useSelector((state) => state.products);
  const { events } = useSelector((state) => state.events);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllShopProducts(id));
  }, [id, dispatch]);

  const allReviews =
    products && products.map((product) => product.reviews).flat();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <div className="cursor-pointer" onClick={() => setActive(1)}>
            <h5
              className={`text-lg font-semibold ${active === 1 ? "text-red-600" : "text-gray-700"}`}
            >
              Shop Products
            </h5>
          </div>
          <div className="cursor-pointer" onClick={() => setActive(2)}>
            <h5
              className={`text-lg font-semibold ${active === 2 ? "text-red-600" : "text-gray-700"}`}
            >
              Running Events
            </h5>
          </div>
          <div className="cursor-pointer" onClick={() => setActive(3)}>
            <h5
              className={`text-lg font-semibold ${active === 3 ? "text-red-600" : "text-gray-700"}`}
            >
              Shop Reviews
            </h5>
          </div>
        </div>
        {isOwner && (
          <button className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700">
            <Link to="/dashboard">Go to dashboard</Link>
          </button>
        )}
        {!isOwner && (
          <button className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700">
            <Link to="/">Go to Home</Link>
          </button>
        )}
      </div>

      {active === 1 && (
        <div className="product-grid-container my-5">
          {products && products.length > 0 ? (
            products.map((item, index) => (
              <ProductCard data={item} key={index} isShop={true} />
            ))
          ) : (
            <div className="text-center text-gray-600">
              No products available.
            </div>
          )}
        </div>
      )}

      {active === 2 && (
        <div className="w-full">
          <div className="product-grid-container my-5">
            {events &&
              events.map((i, index) => (
                <ProductCard
                  data={i}
                  key={index}
                  isShop={true}
                  isEvent={true}
                />
              ))}
          </div>
          {events && events.length === 0 && (
            <h5 className="w-full py-5 text-center text-[18px]">
              No Events have for this shop!
            </h5>
          )}
        </div>
      )}

      {active === 3 && (
        <div className="w-full">
          {allReviews &&
            allReviews.map((item, index) => (
              <div key={index} className="my-4 flex w-full">
                <img
                  src={`${backend_url}/${item?.user?.avatar}`}
                  className="h-[50px] w-[50px] rounded-full"
                  alt=""
                />
                <div className="pl-2">
                  <div className="flex w-full items-center">
                    <h1 className="pr-2 font-[600]">{item.user.name}</h1>
                    <Ratings rating={item.rating} />
                  </div>
                  <p className="font-[400] text-[#000000a7]">{item?.comment}</p>
                  <p className="text-[14px] text-[#000000a7]">{"2days ago"}</p>
                </div>
              </div>
            ))}
          {allReviews && allReviews.length === 0 && (
            <h5 className="w-full py-5 text-center text-[18px]">
              No Reviews have for this shop!
            </h5>
          )}
        </div>
      )}
    </div>
  );
}

export default ShopProfileData;
