import { useEffect, useState } from "react";
import Header from "../components/Header";
import { productData } from "../static/data";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

function BestSelling() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d = productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    setData(d);
  }, []);

  return (
    <div>
      <Header />
      <div className="section pt-8 pb-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data &&
            data.map((item, index) => <ProductCard data={item} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center text-3xl pt-6 pb-12 select-none font-Poppins">
            No product found
          </h1>
        ) : null}
      </div>
      <NewsLetter/>
      <Footer />
    </div>
  );
}

export default BestSelling;