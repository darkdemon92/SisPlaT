import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { logged } = useSelector((state) => state.logged);
  return (
    <div>{logged ? children : <Navigate to="/login" replace={true} />}</div>
  );
};

export default PrivateRoutes;
