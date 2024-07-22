import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import ProductDetail from "../components/ProductDetail";
import { useParams } from "react-router-dom";
import { productData } from "../static/data";

function ProductDetails() {
  const [data, setData] = useState(null);
  const { name } = useParams();
  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    if (productName) {
      const d = productData.find((product) => product.name === productName);
      setData(d);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <ProductDetail data={data} />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default ProductDetails;
