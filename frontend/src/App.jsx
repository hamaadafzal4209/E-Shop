import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActivationUser from "./pages/ActivationUser";
import Home from "./pages/Home";
import { useEffect } from "react";
import axios from "axios";
import { server } from "./server";

function App() {
  useEffect(() => {
    axios
      .get(`${server}/user/getuser`, { withCredentials: true })
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err.res.data.message));
  }, []);

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
