import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateGard = () => {
  const { user } = useSelector((state) => state.Auth);
  if (localStorage.getItem("user")) {
    return <Outlet />;
  } else {
    return user ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default PrivateGard;
