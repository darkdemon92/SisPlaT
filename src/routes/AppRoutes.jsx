import { Routes, Route } from "react-router-dom";

import DashboardRoutes from "./DasboardRoutes";
import Login from "../components/Login";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
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
