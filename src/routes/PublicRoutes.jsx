import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import URL_DIR from "./URL_DIR";

export const PublicRoutes = ({ children }) => {
  const Store = useSelector((state) => state.loginData);
  //console.log(Store);
  const { logged } = Store;
  return <div>{logged ? <Navigate to={URL_DIR + "/"} replace={true} /> : children}</div>;
};

export default PublicRoutes;
