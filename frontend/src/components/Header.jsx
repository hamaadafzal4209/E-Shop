import { useState } from "react";
import { productData } from "../static/data";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filterProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filterProducts);
  };

  return (
    <div className="section">
      {/* top navbar section */}
      <div className="h-[50px] my-[20px] flex items-center justify-between relative">
        <div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt="Logo"
            />
          </Link>
        </div>
        {/* Search box */}
        <div className="w-1/2 relative">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-gray-50 border-2 text-gray-900 rounded-lg focus:ring-blue-600 border-blue-600 block w-full p-2"
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-2 cursor-pointer"
          />
          {searchTerm && searchData && (
            <div className="absolute top-full mt-2 w-full bg-white shadow-lg z-10 p-4">
              {searchData.length === 0 ? (
                <div className="w-full flex items-start py-2">
                  <h1>No products found</h1>
                </div>
              ) : (
                searchData.map((item) => (
                  <Link key={item.id} to={`/product/${item.name}`}>
                    <div className="w-full flex items-start py-2 hover:bg-gray-100">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                        {item.image_Url && item.image_Url.length > 0 && (
                          <img
                            src={item.image_Url[0].url}
                            alt={item.name}
                            className="w-full h-full object-contain mr-2"
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
        <div className="px-4 bg-black h-[50px] flex items-center justify-center rounded-xl cursor-pointer">
          <Link to="/seller">
            <div className="text-[#fff] flex items-center justify-center">
              <h1> Become Seller</h1>
              <IoIosArrowForward className="ml-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
