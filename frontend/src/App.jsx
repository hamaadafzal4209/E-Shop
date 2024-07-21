import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActivationUser from "./pages/ActivationUser";
import Home from "./pages/Home";
import { useEffect } from "react";
import store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import ProductsPage from "./pages/ProductsPage";
import BesrSelling from "./pages/BesrSelling";
import FAQs from "./pages/FAQs";
import EventsPage from "./pages/EventsPage";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <div>
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
          <Route path="/best-selling" element={<BesrSelling />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
