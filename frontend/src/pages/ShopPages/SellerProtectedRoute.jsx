import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SellerProtectedRoute = ({ children }) => {
  const { isLoading, isSeller } = useSelector((state) => state.seller);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isSeller) {
    return <Navigate to="/shop-login" />;
  }

  return children;
};

export default SellerProtectedRoute;
