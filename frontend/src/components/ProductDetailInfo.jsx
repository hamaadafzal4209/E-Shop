/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { backend_url } from "../server";
import { useSelector } from "react-redux";

function ProductDetailInfo({ data }) {
  const [active, setActive] = useState(1);
  const { allProducts } = useSelector((state) => state.products);

  // Filter products by shop ID
  const shopProducts = allProducts.filter((product) => product.shopId === data.shop._id);

  return (
    <div className="pb-12">
      <div className="rounded-md bg-[#f5f6fb] px-4 py-2 pb-6 md:px-10">
        <div className="flex w-full items-center justify-between gap-4 border-b pb-2 pt-10">
          <div className="relative">
            <h5
              className={`cursor-pointer px-1 text-base font-semibold text-[#000] sm:text-lg md:text-[20px] ${
                active === 1 ? "text-crimson" : ""
              }`}
              onClick={() => setActive(1)}
            >
              Product Details
            </h5>
            {active === 1 && (
              <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]"></div>
            )}
          </div>
          <div className="relative">
            <h5
              className={`cursor-pointer px-1 text-base font-semibold text-[#000] sm:text-lg md:text-[20px] ${
                active === 2 ? "text-crimson" : ""
              }`}
              onClick={() => setActive(2)}
            >
              Product Reviews
            </h5>
            {active === 2 && (
              <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]"></div>
            )}
          </div>
          <div className="relative">
            <h5
              className={`cursor-pointer px-1 text-base font-semibold text-[#000] sm:text-lg md:text-[20px] ${
                active === 3 ? "text-crimson" : ""
              }`}
              onClick={() => setActive(3)}
            >
              Seller Information
            </h5>
            {active === 3 && (
              <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]"></div>
            )}
          </div>
        </div>

        <div className="pt-4">
          {active === 1 && (
            <div>
              <p className="whitespace-pre-line text-balance py-2 font-Poppins text-lg font-medium">
                {data.description}
              </p>
            </div>
          )}
          {active === 2 && (
            <div className="flex min-h-[40vh] w-full items-center justify-center">
              <h3>No Reviews Yet?</h3>
            </div>
          )}
          {active === 3 && data && data.shop && (
            <div className="block w-full p-4 md:flex">
              {/* left */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src={`${backend_url}/${data?.shop?.avatar}`}
                      className="h-12 w-12 rounded-full"
                      alt={data?.shop?.name || "Shop Avatar"}
                    />
                  </div>
                  <div>
                    <Link to={`/shop/preview/${data?.shop._id}`}>
                      <h3 className="text-[15px] text-blue-400">
                        {data?.shop?.name || "Unknown Shop"}
                      </h3>
                    </Link>
                    <h5 className="text-[15px]">4/5 Ratings</h5>
                  </div>
                </div>
                <p className="pt-6">{data?.shop?.description}</p>
              </div>
              {/* right */}
              <div className="mt-5 w-full flex-col items-end md:mt-0 md:flex md:w-1/2">
                <div className="space-y-2 text-left">
                  <h5 className="font-semibold">
                    Joined on <span className="font-medium">{data?.shop?.createdAt?.slice(0, 10)}</span>
                  </h5>
                  <h5 className="font-semibold">
                    Total Products <span className="font-medium">{shopProducts.length}</span>
                  </h5>
                  <h5 className="font-semibold">
                    Total Reviews <span className="font-medium">131</span>
                  </h5>
                  <Link to={`/shop/preview/${data?.shop._id}`}>
                    <button className="cursor-pointer bg-black px-10 py-2 mt-2 rounded-md text-white">
                      Visit Shop
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailInfo;