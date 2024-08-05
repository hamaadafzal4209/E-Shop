/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
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
import ProductDetails from "./pages/ProductDetails";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./pages/ProtectedRoute";
import CheckOutPage from "./pages/CheckOutPage";
import SellerActivation from "./pages/ShopPages/SellerActivation";
import ShopCreate from "./pages/ShopPages/ShopCreate";
import ShopLogin from "./pages/ShopPages/ShopLogin";
import ShopHomePage from "./pages/ShopPages/ShopHomePage";
import SellerProtectedRoute from "./pages/ShopPages/SellerProtectedRoute";
import ShopDashBoard from "./pages/ShopDashBoard/ShopDashBoard";
import ShopCreateProduct from "./pages/ShopDashBoard/ShopCreateProduct";
import DashAllProducts from "./pages/ShopDashBoard/DashAllProducts";
import ShopCreateEvent from "./pages/ShopDashBoard/ShopCreateEvent";
import DashAllEvents from "./pages/ShopDashBoard/DashAllEvents";
import ShopCoupounsCode from "./pages/ShopDashBoard/ShopCouponsCode";
import ShopPreviewPage from "./pages/ShopPages/ShopPreviewPage";
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import PaymentPage from "./pages/PaymentPage";
import axios from "axios";
import { server } from "./server";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import DashAllOrders from "./pages/ShopDashBoard/DashAllOrders";
import ShopOrderDetails from "./pages/ShopPages/ShopOrderDetails";
import OrderDetailPage from "./pages/OrderDetailPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import DashAllRefunds from "./pages/ShopDashBoard/DashAllRefunds";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get(`${server}/payment/stripeapikey`);
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error("Error fetching Stripe API key:", error);
    }
  }

  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadSeller());
    store.dispatch(getAllProducts());
    store.dispatch(getAllEvents());
    getStripeApiKey();
  }, []);

  return (
    <>
      <BrowserRouter>
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Routes>
              <Route
                path="/payment"
                element={
                  <ProtectedRoute>
                    <PaymentPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Elements>
        )}
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
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/best-selling" element={<BestSelling />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/order/success" element={<OrderSuccessPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/order/:id"
            element={
              <ProtectedRoute>
                <OrderDetailPage />
              </ProtectedRoute>
            }
          />
            <Route
          path="/user/track/order/:id"
          element={
            <ProtectedRoute>
              <TrackOrderPage />
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
              <SellerProtectedRoute>
                <ShopHomePage />
              </SellerProtectedRoute>
            }
          />
          <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
          <Route
            path="/dashboard"
            element={
              <SellerProtectedRoute>
                <ShopDashBoard />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-create-product"
            element={
              <SellerProtectedRoute>
                <ShopCreateProduct />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-orders"
            element={
              <SellerProtectedRoute>
                <DashAllOrders />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/order/:id"
            element={
              <SellerProtectedRoute>
                <ShopOrderDetails />
              </SellerProtectedRoute>
            }
          />
           <Route
          path="/dashboard-refunds"
          element={
            <SellerProtectedRoute>
              <DashAllRefunds />
            </SellerProtectedRoute>
          }
        />
          <Route
            path="/dashboard-products"
            element={
              <SellerProtectedRoute>
                <DashAllProducts />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-create-event"
            element={
              <SellerProtectedRoute>
                <ShopCreateEvent />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-events"
            element={
              <SellerProtectedRoute>
                <DashAllEvents />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="/dashboard-coupouns"
            element={
              <SellerProtectedRoute>
                <ShopCoupounsCode />
              </SellerProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
