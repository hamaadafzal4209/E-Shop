import Bestdeals from "../components/Bestdeals";
import Categories from "../components/Categories";
import FeaturedProduct from "../components/FeaturedProduct";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <Bestdeals />
      <FeaturedProduct/>
    </div>
  );
}

export default Home;
