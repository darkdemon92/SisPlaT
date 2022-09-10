import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import URL_DIR from "./URL_DIR";


const PrivateRoutes = ({ children }) => {
  const Store = useSelector((state) => state.loginData);
  //console.log(Store);
  const { logged } = Store;
  return (
    <div>{logged ? children : <Navigate to={URL_DIR + "/login"} replace={true} />}</div>
  );
};

export default PrivateRoutes;
