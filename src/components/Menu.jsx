import * as React from "react";
import PocketBase from "pocketbase";
import ServerDB from "../helpers/DB";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";

import Fab from "@mui/material/Fab";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import StorageSharpIcon from "@mui/icons-material/StorageSharp";
import DesktopMacSharpIcon from "@mui/icons-material/DesktopMacSharp";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modifyTheme } from "../redux/features/themeSlice";
import { modifyLoggedIn } from "../redux/features/loginSlice";

const drawerWidth = 240;

function Menu(props) {
  const client = new PocketBase(ServerDB);
  const Store = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let activeStyle = {
    textDecoration: "none",
  };
  let inactiveStyle = {
    textDecoration: "none",
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <h3>Menú</h3>
      <IconButton
        sx={{ ml: 1 }}
        onClick={() =>
          Store.mode === "dark"
            ? dispatch(modifyTheme({ mode: "light" }))
            : dispatch(modifyTheme({ mode: "dark" }))
        }
        color="inherit"
      >
        {Store.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Divider />
      <List>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          end
        >
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <HomeSharpIcon />
                <ListItemText primary="Home" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="/PCs"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          end
        >
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <StorageSharpIcon />
                <ListItemText primary="PCs" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="/Monitores"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          end
        >
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <DesktopMacSharpIcon />
                <ListItemText primary="Monitores" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to=""
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          end
        >
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={() => {
                dispatch(modifyLoggedIn({ logged: false }));
                client.authStore.clear();
              }}
            >
              <ListItemIcon>
                <LogoutSharpIcon />
                <ListItemText primary="Salir" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
      <Divider>
        <Chip label="Copyright ©" />
      </Divider>
      <a href="mailto:jorge920801@gmail.com">Jorge L. Durán Montero</a>{" "}
      <Divider>
        {new Date().getFullYear()}
        {"."}
      </Divider>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        edge="end"
        onClick={handleDrawerToggle}
        sx={{ mt: 2, mr: 2, mb: 3, display: { sm: "block" } }}
      >
        <MenuBookSharpIcon sx={{ mr: 1 }} />
        Menú
      </Fab>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Menu;
