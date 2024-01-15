import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const NotLoggedInRoutes = () => {
  const userAuth = useSelector((state) => state.login);
  console.log(userAuth);
  const isLoggedIn = userAuth.login && userAuth.login.token;
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default NotLoggedInRoutes;
