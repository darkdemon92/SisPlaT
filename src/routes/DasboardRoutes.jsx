import Container from "@mui/material/Container";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Menu from "../components/Menu";
import Error404 from "../components/error404";

const DasboardRoutes = () => {
  return (
    <Container>
    <Menu />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
    </Container>
  );
};

export default DasboardRoutes;
