import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

function ProductsPage() {
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const d =
        allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
    console.log(allProducts)
    window.scrollTo(0, 0);
  }, [allProducts, categoryData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <div className="section pb-12 pt-8">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {data &&
                data.map((item, index) => (
                  <ProductCard data={item} key={index} />
                ))}
            </div>
            {data && data.length === 0 ? (
              <h1 className="select-none pb-12 pt-6 text-center font-Poppins text-3xl">
                No product found
              </h1>
            ) : null}
          </div>
          <NewsLetter />
          <Footer />
        </div>
      )}
    </>
  );
}

export default ProductsPage;
