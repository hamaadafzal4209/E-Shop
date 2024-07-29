import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getAllProducts } from "../redux/actions/product";

function ProductsPage() {
  const dispatch = useDispatch();
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (categoryData === null) {
      setData(allProducts);
    } else {
      const filteredData =
        allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(filteredData);
    }
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
