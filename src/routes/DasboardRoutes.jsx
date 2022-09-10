import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Menu from "../components/Menu";
import Error404 from "../components/error404";
import URL_DIR from "./URL_DIR";

const DasboardRoutes = () => {
  return (
    <Container>
    <Menu />
    <Routes>
      <Route path={URL_DIR + "/"} element={<Dashboard />} />
      <Route path={URL_DIR + "/*"} element={<Error404 />} />
    </Routes>
    </Container>
  );
};

export default DasboardRoutes;
