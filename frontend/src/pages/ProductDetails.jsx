/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import ProductDetail from "../components/ProductDetail";
import SuggestedProducts from "../components/SuggestedProducts";
import Loader from "../components/Loader";
import { getAllProducts } from "../redux/actions/product";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allProducts, isLoading } = useSelector((state) => state.products);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getAllProducts());
    } else {
      const foundProduct = allProducts.find((product) => product._id === id);
      setProduct(foundProduct);
    }
    window.scrollTo(0, 0);
  }, [dispatch, id, allProducts]);

  if (isLoading) {
    return <h1 className="p-6 text-center"><Loader /></h1>;
  }

  return (
    <div>
      <Header />
      {product ? (
        <>
          <ProductDetail data={product} />
          <SuggestedProducts data={product} />
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