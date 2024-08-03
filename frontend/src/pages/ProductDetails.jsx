/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import ProductDetail from "../components/ProductDetail";
import SuggestedProducts from "../components/SuggestedProducts";
import Loader from "../components/Loader";

function ProductDetails() {
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  const dispatch = useDispatch();

  useEffect(() => {
    if (eventData !== null) {
      const foundProduct = allEvents.find((product) => product._id === id);
      setProduct(foundProduct);
    } else {
      const foundProduct = allProducts.find((product) => product._id === id);
      setProduct(foundProduct);
    }
    window.scrollTo(0, 0);
  }, [dispatch, id, allProducts, allEvents, eventData]);

  if (isLoading) {
    return (
      <h1 className="p-6 text-center">
        <Loader />
      </h1>
    );
  }

  return (
    <div>
      <Header />
      {product ? (
        <>
          <ProductDetail data={product} />
          {!eventData && (
            <>
              <SuggestedProducts data={product} />
            </>
          )}
        </>
      ) : (
        <h1 className="p-6 text-center">Product not found!</h1>
      )}
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default ProductDetails;
