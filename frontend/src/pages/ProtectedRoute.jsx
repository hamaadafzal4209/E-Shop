import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isAuthenticated } = useSelector((state) => state.user);

  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</div>;
}

export default ProtectedRoute;
