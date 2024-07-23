import { useState, useEffect } from "react";
import { productData, categoriesData } from "../static/data";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import classNames from "classnames";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { backend_url } from "../server";
import CartPopUp from "./CartPopUp";
import WhishListPopUp from "./WhishListPopUp";

function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWhishlist, setOpenWhishlist] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filterProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase()),
      );
    setSearchData(filterProducts);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="section">
        {/* top navbar section */}
        <div className="relative my-[20px] flex h-[50px] items-center justify-between">
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="Logo"
              />
            </Link>
          </div>
          {/* Search box */}
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search Products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="block w-full rounded-lg border-2 border-blue-600 bg-gray-50 p-2 text-gray-900 focus:ring-blue-600"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-2 cursor-pointer"
            />
            {searchTerm && searchData && (
              <div className="absolute top-full z-10 mt-2 w-full bg-white p-4 shadow-lg">
                {searchData.length === 0 ? (
                  <div className="flex w-full items-start py-2">
                    <h1>No products found</h1>
                  </div>
                ) : (
                  searchData.map((item) => (
                    <Link
                      key={`${item.id}-${item.name}`}
                      to={`/product/${item.name}`}
                    >
                      <div className="flex w-full items-start py-2 hover:bg-gray-100">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
                          {item.image_Url && item.image_Url.length > 0 && (
                            <img
                              src={item.image_Url[0].url}
                              alt={item.name}
                              className="mr-2 h-full w-full object-contain"
                            />
                          )}
                        </div>
                        <h1 className="line-clamp-2">{item.name}</h1>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
          {/* seller button */}
          <div className="flex h-[50px] cursor-pointer items-center justify-center rounded-xl bg-black px-4">
            <Link to="/seller">
              <div className="flex items-center justify-center text-[#fff]">
                <h1> Become Seller</h1>
                <IoIosArrowForward className="ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* bottom navbar */}
      <div
        className={classNames("z-30 h-[70px] w-full", {
          "sticky top-0 bg-[#3321c8] shadow-md": active,
          "bg-[#3321c8]": !active,
        })}
      >
        <div className="section flex items-center justify-between">
          {/* categories */}
          <div
            onClick={() => setDropDown(!dropDown)}
            className="relative flex h-[70px] w-[270px] items-center"
          >
            <BiMenuAltLeft
              size={30}
              className="absolute left-2 top-1/2 mt-1.5 -translate-y-1/2"
            />
            <button
              className={`font-sans mt-[10px] flex h-[60px] w-full select-none items-center justify-between rounded-t-md bg-white pl-10 text-lg font-[500]`}
            >
              All Categories
            </button>
            <IoIosArrowDown
              size={20}
              className="absolute right-2 top-1/2 mt-1.5 -translate-y-1/2 cursor-pointer"
            />
            {dropDown && (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            )}
          </div>
          {/* nav links */}
          <div>
            <Navbar />
          </div>
          {/* nav icons */}
          <div>
            <div className="flex items-center">
              <div
                onClick={() => setOpenWhishlist(true)}
                className="relative mr-4 cursor-pointer"
              >
                <AiOutlineHeart size={30} className="text-white opacity-75" />
                <span className="font-mono absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#3bc177] text-xs leading-tight text-white">
                  0
                </span>
              </div>
              <div
                onClick={() => setOpenCart(true)}
                className="relative mr-4 cursor-pointer"
              >
                <AiOutlineShoppingCart
                  size={30}
                  className="text-white opacity-75"
                />
                <span className="font-mono absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#3bc177] text-xs leading-tight text-white">
                  0
                </span>
              </div>
              <div className="cursor-pointer">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${backend_url}/${user.avatar}`}
                      className="h-8 w-8 rounded-full object-cover object-top"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} className="text-white opacity-75" />
                  </Link>
                )}
              </div>

              {/* cart popup */}
              {openCart && <CartPopUp setOpenCart={setOpenCart} />}
              {/* whishlist popup */}
              {openWhishlist && (
                <WhishListPopUp setOpenWhishlist={setOpenWhishlist} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
