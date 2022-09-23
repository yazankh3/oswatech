import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import ReactLogo from "../../asset/icons/oswaGreen.svg";
import { Box, Toolbar, Typography } from "@mui/material";
import Oswas from "../../asset/icons/oswas.svg";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const NavBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  const handleClickRight2 = (e) => {
    console.log("You clicked submit.");
    setClick2({ click: false, click2: true });
  };

  return (
    <div className="nav-container">
      <div className="nav-wrap">
        <div className="drawer">
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              open={open}
              sx={{
                backgroundColor: "#0D323D",
              }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    mr: 2,
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  <img src={Oswas} alt="" style={{ color: "#fff" }} />
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,

                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <List>
                {["", "Buy", ""].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        {
                          (text === 0,
                          index === 0 ? (
                            <NavLink
                              to="/home"
                              className={({ isActive }) =>
                                isActive ? "a" : "b"
                              }
                            >
                              <div
                                style={{
                                  display: "flex",
                                  width: "45%",
                                  position: "absolute",
                                  alignItems: "center",
                                  textAlign: "center",
                                  justifyContent: "center",
                                }}
                              >
                                Home
                              </div>
                            </NavLink>
                          ) : (
                            ""
                          ))
                        }
                        {
                          (text === 2,
                          index === 2 ? (
                            <NavLink
                              to="/rent"
                              className={({ isActive }) =>
                                isActive ? "a" : "b"
                              }
                            >
                              <div
                                style={{
                                  display: "flex",
                                  width: "45%",
                                  position: "absolute",
                                  alignItems: "center",
                                  textAlign: "center",
                                  justifyContent: "center",
                                }}
                              >
                                Rent
                              </div>
                            </NavLink>
                          ) : (
                            ""
                          ))
                        }
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {["About Us", "Contact Us", "", "SIGN UP"].map(
                  (text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          {
                            (text === 2,
                            index === 2 ? (
                              <NavLink
                                to="/home2"
                                className={({ isActive }) =>
                                  isActive ? "a" : "b"
                                }
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    width: "45%",
                                    position: "absolute",
                                    alignItems: "center",
                                    textAlign: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  Login
                                </div>
                              </NavLink>
                            ) : (
                              ""
                            ))
                          }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
            </Drawer>
            <Main open={open}>
              <DrawerHeader />
            </Main>
          </Box>
        </div>
        <div className="nav-left">
          <div className="nav-logo">
            <img src={ReactLogo} alt="" />
          </div>
          <div className="nav-left-link">
            <div>
              <nav>
                <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? "a" : "b")}
                >
                  <p>Home</p>
                </NavLink>
              </nav>
            </div>
            <div className="border-left-colmn"></div>
            <div>
              <p onClick={handleClickRight2}>Buy</p>
            </div>
            <div className="border-left-colmn"></div>

            <div>
              <nav>
                <NavLink
                  to="/rent"
                  className={({ isActive }) => (isActive ? "c" : "d")}
                >
                  <p>Rent</p>
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-right-link">
            <div>
              <p>About</p>
            </div>
            <p
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              Contact Us
            </p>
            <div className="border-right-colmn"></div>
            <div>
              <NavLink
                to="/home2"
                // style={({ isActive }) => {
                //   return { color: isActive ? "red" : "blue" };
                // }}
                className={({ isActive }) => (isActive ? "a" : "b")}
              >
                <p>LOG IN</p>
              </NavLink>
            </div>
            <div className="button-sign-up">
              <button className="">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
