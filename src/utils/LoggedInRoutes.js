import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const LoggedInRoutes = () => {
  const userAuth = useSelector((state) => state.login);
  const isLoggedIn = userAuth.login && userAuth.login.token;
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default LoggedInRoutes;
