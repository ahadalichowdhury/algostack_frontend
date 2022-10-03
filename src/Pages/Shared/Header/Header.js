import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../../Utils/algotransfort.png";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileHoverEffect = {
    "&:hover": {
      color: "#000",
      backgroundColor: "#fff",
    },
  };
  const navLinkHover = {
    transition: "color 0.5s",
    "&:hover": {
      color: "#fff",
      // backgroundColor: "#fff",
    },
    "&:active":{
      color:'green'
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      style={{ background: "#000", color: "#fff" }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography
          variant="h6"
          sx={{ my: 2, background: "#000", pb: 2, flexGrow: 1 }}
          style={{ borderBottom: "1px solid #ccc" }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: "2rem", height: "2rem" }}
          ></img>
          AlgoStack-BD
        </Typography>
        <Typography
          variant="h6"
          sx={{ my: 2, background: "#000", pb: 2.4, pr: 3 }}
          style={{ borderBottom: "1px solid #ccc", fontWeight: "bolder" }}
        >
          <div
            style={{
              padding: "2px 10px",
              fontWeight: "bolder",
              background: "#fff",
              color: "#000",
              borderRadius: "70%",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            X
          </div>
        </Typography>
      </Box>
      {/* Appbar For mobile devices */}
      <List>
        <NavLink
          to="/home"
          style={{ textDecoration: "none", width: "100%", color: "#fff" }}
        >
          <ListItem disablePadding>
            <ListItemButton
              style={{ textAlign: "center" }}
              sx={mobileHoverEffect}
            >
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="/about"
          style={{ textDecoration: "none", width: "100%", color: "#fff" }}
        >
          <ListItem disablePadding>
            <ListItemButton
              style={{ textAlign: "center" }}
              sx={mobileHoverEffect}
            >
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="/services"
          style={{ textDecoration: "none", width: "100%", color: "#fff" }}
        >
          <ListItem disablePadding>
            <ListItemButton
              style={{ textAlign: "center" }}
              sx={mobileHoverEffect}
            >
              <ListItemText primary="Services" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink
          to="/team"
          style={{ textDecoration: "none", width: "100%", color: "#fff" }}
        >
          <ListItem disablePadding>
            <ListItemButton
              style={{ textAlign: "center" }}
              sx={mobileHoverEffect}
            >
              <ListItemText primary="Team" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        {/* <NavLink
          to="/home"
          style={{ textDecoration: "none", width: "100%", color: "#fff" }}
        >
          <ListItem disablePadding>
            <ListItemButton
              style={{ textAlign: "center" }}
              sx={mobileHoverEffect}
            >
              <ListItemText primary="Showcase" />
            </ListItemButton>
          </ListItem>
        </NavLink> */}
        <NavLink
          to="/contact"
          style={{ textDecoration: "none", width: "100%", color: "#fff" }}
        >
          <ListItem disablePadding>
            <ListItemButton
              style={{ textAlign: "center" }}
              sx={mobileHoverEffect}
            >
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* Appbar For Laptop */}
      <AppBar component="nav" style={{ color: "#fff", background: "#000" }}>
        <Container>
          <Toolbar component={Container}>
            <Typography
              variant="OVERLINE TEXT"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 800,
                marginRight: "5rem",
              }}
            >
              {/* logo code */}
              <img
                src={logo}
                alt="logo"
                style={{ width: "2rem", height: "2rem" }}
              ></img>
              AlgoStack-BD
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, marginLeft:{md:"10rem", lg:"25rem", sm:"none"} }}>
              <List style={{ display: "flex", justifyContent:'center', alignItems:'center' }}>
                <NavLink
                  to="/home"
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    color: "#999",
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      style={{ textAlign: "center" }}
                      sx={navLinkHover}
                    >
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
                <NavLink
                  to="/about"
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    color: "#999",
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      style={{ textAlign: "center" }}
                      sx={navLinkHover}
                    >
                      <ListItemText primary="About" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
                <NavLink
                  to="/team"
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    color: "#999",
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      style={{ textAlign: "center" }}
                      sx={navLinkHover}
                    >
                      <ListItemText primary="Team" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
                <NavLink
                  to="/services"
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    color: "#999",
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      style={{ textAlign: "center" }}
                      sx={navLinkHover}
                    >
                      <ListItemText primary="Services" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
                {/* <NavLink
                  to="/home"
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    color: "#999",
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      style={{ textAlign: "center" }}
                      sx={navLinkHover}
                    >
                      <ListItemText primary="Showcase" />
                    </ListItemButton>
                  </ListItem>
                </NavLink> */}
                <NavLink
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    color: "#999",
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      style={{ textAlign: "center" }}
                      sx={navLinkHover}
                    >
                      <ListItemText primary="Contact" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
              </List>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: {sm: "none" } }}
              style={{ marginLeft: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              background: "#000",
              color: "#fff",
              // transition:'linear easy'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 1 }}>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
