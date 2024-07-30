import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllShopProducts } from "../../redux/actions/product";

function ShopProfileData({ isOwner }) {
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);

  useEffect(() => {
    dispatch(getAllShopProducts(id));
  }, [id, dispatch]);

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
    </div>
  );
}

export default ShopProfileData;
