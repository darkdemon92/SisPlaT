import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const Store = useSelector((state) => state.loginData);
  //console.log(Store);
  const { logged } = Store;
  return (
    <div>{logged ? children : <Navigate to="/login" replace={true} />}</div>
  );
};

export default PrivateRoutes;
