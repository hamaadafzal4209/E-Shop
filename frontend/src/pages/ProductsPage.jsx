import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function ProductsPage() {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!categoryData) {
      const d =
        productData && productData.sort((a, b) => b.total_sell - a.total_sell);
      setData(d);
    } else {
      const d =
        productData &&
        productData.filter((item) => item.category === categoryData);
      setData(d);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="section pt-8 pb-12">
        <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data &&
            data.map((item, index) => <ProductCard data={item} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center text-3xl pt-6 pb-12 select-none font-Poppins">
            No product found
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;
