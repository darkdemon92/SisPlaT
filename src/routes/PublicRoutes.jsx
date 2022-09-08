import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children }) => {
  const Store = useSelector((state) => state.loginData);
  //console.log(Store);
  const { logged } = Store;
  return <div>{logged ? <Navigate to="/" replace={true} /> : children}</div>;
};

export default PublicRoutes;
