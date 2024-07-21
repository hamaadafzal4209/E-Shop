import { productData } from "../static/data";
import ProductCard from "./ProductCard";

function FeaturedProduct() {

  return (
    <div>
      <div className="section">
        <h1 className="heading">Featured Products</h1>
        <div className="product-grid-container mb-12">
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
