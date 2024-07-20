import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="min-h-[70vh] md:min-h-[90vh] py-12 w-full bg-cover bg-no-repeat flex items-center"
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className="w-11/12 mx-auto space-y-6">
        <h1 className="text-[35px] leading-[1.2] md:text-[60px] text-[#3d3a3a] font-[600] capitalize">
          Best Collection for <br /> home Decoration
        </h1>
        <p className="text-[16px] font-[400] text-[#000000ba] max-w-3xl text-balance">
          Discover the finest selection of products tailored to your needs.
          Enjoy a seamless shopping experience with our extensive range of
          high-quality items. Our commitment to excellence ensures that you
          receive the best value and service. Explore our collection and find
          the perfect products to enhance your lifestyle. Shop with confidence
          and convenience at our eCommerce platform.
        </p>
        <Link to="/products" className="inline-block">
          <div className="bg-black px-10 py-3 rounded-md ">
            <span className="text-[#fff] text-[18px]">Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
