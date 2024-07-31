import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import ProductDetail from "../components/ProductDetail";
import SuggestedProducts from "../components/SuggestedProducts";
import { getAllProducts } from "../redux/actions/product";
import Loader from "../components/Loader";

function ProductDetails() {
  const { name } = useParams();
  const productName = decodeURIComponent(name.replace(/-/g, " ")).trim();
  const dispatch = useDispatch();

  const { allProducts, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getAllProducts());
    }
    window.scrollTo(0,0);
  }, [dispatch, allProducts]);

  // Log the productName and allProducts for debugging
  console.log("Product Name:", productName);
  console.log("All Products:", allProducts);

  // Normalize product names for comparison
  const normalizeName = (name) =>
    name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/gi, "");

  const normalizedProductName = normalizeName(productName);

  // Log normalized names for debugging
  allProducts.forEach((product) => {
    console.log(
      "Normalized Product in allProducts:",
      normalizeName(product.name),
    );
  });

  const product = allProducts.find(
    (p) => normalizeName(p.name) === normalizedProductName,
  );

  // Log the found product for debugging
  console.log("Found Product:", product);

  if (isLoading) {
    return <h1 className="p-6 text-center"><Loader/></h1>;
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
