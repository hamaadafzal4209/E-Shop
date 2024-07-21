import Bestdeals from "../components/Bestdeals";
import Categories from "../components/Categories";
import Events from "../components/Events";
import FeaturedProduct from "../components/FeaturedProduct";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sponsored from "../components/Sponsored";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <Bestdeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
    </div>
  );
}

export default Home;
