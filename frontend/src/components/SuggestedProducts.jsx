import { useEffect, useState } from "react";
import { productData } from "../static/data";
import ProductCard from "./ProductCard";

function SuggestedProducts({ data }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const d =
      productData &&
      productData.filter((product) => product.category === data.category);
    setProducts(d);
  }, []);

  return (
    <div className="py-12">
      <div className="section">
        <h1 className="heading">Related Products</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products &&
            products.map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SuggestedProducts;
