import { productData } from "../static/data";
import ProductCard from "./ProductCard";

function FeaturedProduct() {
  return (
    <div>
      <div className="section">
        <h1 className="heading">Featured Products</h1>
        <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {productData &&
            productData.map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
