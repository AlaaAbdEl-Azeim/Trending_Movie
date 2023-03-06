import Container from "@mui/material/Container";
import logo from "logo.svg";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  Button,
  AppBar,
  Drawer,
  IconButton,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const navItemsname = ["Home", "Pages", "Movies", "TV Shows", "Celebs", "blog"];
const navItems = navItemsname.map((item, index) => (
  <Button
    key={index}
    sx={{
      color: "#000",
      textTransform: "capitalize",
    }}
  >
    {item}
  </Button>
));
const drawerData = navItemsname.map((item) => (
  <ListItem key={item} disablePadding>
    <ListItemButton>
      <ListItemText
        primary={item}
        sx={{ flexGrow: "0" }}
        primaryTypographyProps={{
          fontWeight: "bold",
        }}
      />
      {/* dummy condition  */}
      {item === "Pages" ? <ArrowRightIcon sx={{ color: "#c8c1c1" }} /> : ""}
    </ListItemButton>
  </ListItem>
));

export const Header = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <div className="main_container">
      {/* nav for pc & tablet */}
      <AppBar component="nav" position="static" variant="white">
        <Container>
          <Toolbar
            sx={{
              justifyContent: {
                xs: "flex-start",
                sm: "space-between",
              },
            }}
            disableGutters
          >
            {/* icon for mobile nav */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* end of icon for mobile nav */}
            {/* logo */}
            <Box
              sx={{
                flexGrow: 1,
                textAlign: "left",
                maxWidth: "100px",
              }}
            >
              <Link to="/">
                <img className="" src={logo} alt="random"></img>
              </Link>
            </Box>
            {/* end of logo */}
            {/* nav items */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>{navItems}</Box>
            {/* end of nav items */}
          </Toolbar>
        </Container>
      </AppBar>

      {/* drawer component */}
      <Container>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <Box width={"200px"}>
              <Container>
                <List>
                  <ListItem>
                    <IconButton
                      color="inherit"
                      aria-label="close drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ display: { sm: "none" } }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </ListItem>
                  {drawerData}
                </List>
              </Container>
            </Box>
          </Drawer>
        </Box>
      </Container>
    </div>
  );
};
