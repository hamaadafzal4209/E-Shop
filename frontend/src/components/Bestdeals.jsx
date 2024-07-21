import { useEffect, useState } from "react";
import { productData } from "../static/data";
import ProductCard from "./ProductCard";

function Bestdeals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const productdata =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = productdata.slice(0, 5);
    setData(firstFive);
  }, []);

  return (
    <div>
      <div className="section">
        <h1 className="heading">Best Deals</h1>
        <div className="product-grid-container mb-12">
          {data &&
            data.map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Bestdeals;