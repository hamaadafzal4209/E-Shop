import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import ProductDetail from "../components/ProductDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import SuggestedProducts from "../components/SuggestedProducts";

function ProductDetails() {
  const [data, setData] = useState(null);
  const { name } = useParams();
  const productName = decodeURIComponent(name.replace(/-/g, " "));

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`/api/products/${productName}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    if (productName) {
      fetchProductData();
    }
    window.scrollTo(0, 0);
  }, [productName]);

  return (
    <div>
      <Header />
      <ProductDetail data={data} />
      {data && <SuggestedProducts data={data} />}
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default ProductDetails;