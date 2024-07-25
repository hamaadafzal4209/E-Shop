import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../../components/Loader";

const SellerProtectedRoute = ({ children }) => {
  const { isLoading, isSeller } = useSelector((state) => state.seller);

  if (isLoading) {
    return <Loader />;
  }

  if (!isSeller) {
    return <Navigate to="/shop-login" />;
  }

  return children;
};

export default SellerProtectedRoute;
