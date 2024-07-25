import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActivationUser from "./pages/ActivationUser";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import FAQs from "./pages/FAQs";
import EventsPage from "./pages/EventsPage";
import BestSelling from "./pages/BestSelling";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import ProductDetails from "./pages/ProductDetails";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./pages/ProtectedRoute";
import CheckOutPage from "./pages/CheckOutPage";
import SellerActivation from "./pages/ShopPages/SellerActivation";
import ShopCreate from "./pages/ShopPages/ShopCreate";
import ShopLogin from "./pages/ShopPages/ShopLogin";
import ShopHomePage from "./pages/ShopPages/ShopHomePage";
import SellerProtectedRoute from "./pages/ShopPages/SellerProtectedRoute";

function App() {
  const { loading } = useSelector((state) => state.user);
  const { isLoading, isSeller } = useSelector((state) => state.seller);

  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadSeller());
  }, []);

  if (loading || isLoading) return <div>Loading...</div>;

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationUser />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:name" element={<ProductDetails />} />
          <Route path="/best-selling" element={<BestSelling />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/events" element={<EventsPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckOutPage />
              </ProtectedRoute>
            }
          />
          {/* shop Routes */}
          <Route path="/shop-create" element={<ShopCreate />} />
          <Route
            path="/seller/activation/:activation_token"
            element={<SellerActivation />}
          />
          <Route path="/shop-login" element={<ShopLogin />} />
          <Route
            path="/shop/:id"
            element={
              <SellerProtectedRoute isSeller={isSeller}>
                <ShopHomePage />
              </SellerProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
