import { Routes, Route } from "react-router-dom";

import DashboardRoutes from "./DasboardRoutes";
import Login from "../components/Login";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import URL_DIR from "./URL_DIR";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={URL_DIR + "/login"}
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <DashboardRoutes />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
