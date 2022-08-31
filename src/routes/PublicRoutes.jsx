import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoutes = ({ children }) => {
  const { logged } = useSelector((state) => state.userData);
  //console.log(logged);
  return <div>{logged ? <Navigate to="/" replace={true} /> : children}</div>;
};

export default PublicRoutes;
