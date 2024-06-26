import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { Backdrop, Menu, MenuItem } from "@mui/material";
import { getMenuAccordingToRole } from "../../../utils/sidemenu";
// import logoutImg from "assets/images/sidebar/Logout.svg";
// import Notifications from "assets/images/sidebar/notify.svg";
// import Settings from "assets/images/sidebar/settings.svg";
import ProfileImg from "../../../assets/images/authIcons/profileImg.svg";
import BellIcon from "../../../assets/images/authIcons/bell.svg";

// import SideBg from "assets/images/sidebar-bg.png";

// import ChangePassword from "assets/images/sidebar/changePassword.svg";
import { ReactComponent as DownArrow } from "../../../assets/images/authIcons/arrowLeft.svg";
import logoImg from "../../../assets/images/authIcons/simply.svg";
import bottomWhite from "../../../assets/images/authIcons/simplyLine.svg";

import "./style.scss";
import { useDispatch } from "react-redux";
// import { logout } from "app/redux/action/auth/authAction";

const drawerWidth = "300px";
const drawerWidth2 = "260px";

function DashboardView({ window, children = <></> }) {
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menus = getMenuAccordingToRole(localStorage.getItem("roles"));
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const handleLogout = () => {
    // dispatch(logout());
  };
  const isActiveItem = (itemRoute, child) => {
    let isActive = false;
    let childPath;
    const basePath = currentPath
      ?.split("/")
      ?.slice(0, itemRoute?.split("/").length)
      ?.join("/");

    if (child) {
      childPath = child.map((ele) => ele.to);
    }
    if (
      basePath === itemRoute ||
      basePath === `${itemRoute}/` ||
      childPath?.includes(basePath)
    ) {
      isActive = true;
    }
    return isActive;
  };

  const handleProfile = () => {
    navigate("/profile");
  };
  const handleChangePassword = () => {
    navigate("/change-password");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List
        component="nav"
        sx={{
          mt: { xs: ".5", md: "1.2rem" },
          display: "flex",
          flexDirection: "column",
          alignItems: { sm: "inherit", md: "center" },
        }}
      >
        <img src={logoImg} style={{ marginTop: "20px" }} />
        <img src={bottomWhite} style={{ margin: "20px 10px 20px 10px" }} />

        {menus?.map((item) => {
          return (
            <ListItem
              key={item?.id}
              sx={{
                width: { xs: "100%", md: "83%" },
                borderRadius: "8px",
                paddingRight: { xs: "0px" },
                display: "flex",
                justifyContent: "flex-start",
                m: { xs: 0.5, md: 1.5 },
                paddingLeft: { md: "1.8rem" },

                background: isActiveItem(item.to, item.child) && "#736c68",
                "&:hover": {
                  background: "#736c68",

                },
                color: "#ffffff",
                paddingTop: "12px",
                paddingBottom: "12px",
              }}
              onClick={() => {
                handleDrawerToggle();
                item.click && item.click();
                navigate(`${item.to}`);
              }}
            >
              <span
                className={`svgImage ${isActiveItem(item.to, item.child) ? "isActive" : ""
                  }`}
                style={{
                  color: "#00000",
                }}
              >
                {item.images}
              </span>
              <Typography
                variant="h3"
                sx={{
                  p: "2px",
                  cursor: "pointer",
                  color: "#00000",
                }}
                className={`menu-title ${isActiveItem(item.to, item.child) ? "isActive" : ""
                  }`}
              >
                {item.title}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const name = localStorage.getItem("NAME");
  const adminName = name;

  const dynamicStyles = {
    width: "46px",
    height: "46px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };
  return (
    <Box sx={{ backgroundColor: "F3F8FF" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: { sm: "75px", md: "92px" },
          backgroundColor: "#fff",
          boxShadow: "none",
          borderBottom:" 1px solid #D5D5D5;"

        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: { sm: "75px", md: "92px" },
            boxShadow: "none",
            marginLeft: "370px",
            paddingLeft: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { md: "none" },
                color: "#fff",
              }}
            >
              <MenuIcon style={{ fontSize: "3rem" }} />
            </IconButton>
          </div>
          <div className="admin_main_profile_bx">
            <div className="profile_bx" onClick={handleMenuClick}>
              <div className="profile_icon">
              <img
                  src={BellIcon}
                  alt={BellIcon}
                  sx={{ cursor: "pointer" }}
                  style={dynamicStyles}
                />
                <p>{"Abhishek"}</p>

                <img
                  src={ProfileImg}
                  alt={ProfileImg}
                  sx={{ cursor: "pointer" }}
                  style={dynamicStyles}
                />
              </div>
              <div className="profile_name">
                <DownArrow />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth2,
              // backgroundColor: "#fff",
              borderRight: "transparent",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgba(23, 25, 24, 1)",

              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRight: "transparent",
            },
          }}
          className="web_drawer"
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        className="childrenItem"
        component="main"
        sx={{
          flexGrow: 1,
          p: "4% 3% 3% 3%",
          marginLeft: { md: drawerWidth },
          height: "100vh",
          overflowY: "scroll",
          background: "#ffffff",
        }}
      >
        <Toolbar />

        {children}
      </Box>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              // background: "#fff",
              borderRadius: "15px",
            },
          }}
        >
          <MenuItem
            onClick={() => {
              handleProfile();
              handleMenuClose();
            }}
            sx={{
              minWidth: "185px",
              background: "#00000",
              padding: ".5rem",
              paddingLeft: "1rem",
            }}
          >
            <ListItemIcon>
              <img
                // src={ProfileImg}
                // alt={ProfileImg}
                style={{
                  width: "20px",
                  // height: "50px",
                  marginRight: "12px",
                  borderRadius: "50%",
                }}
              />
            </ListItemIcon>
            <ListItemText>My Account</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleChangePassword();
              handleMenuClose();
            }}
            sx={{
              minWidth: "185px",
              background: "#00000",
              padding: ".5rem",
              paddingLeft: "1rem",
            }}
          >
            <ListItemIcon>
              <img
                // src={ChangePassword}
                // alt={ChangePassword}

                style={{ marginRight: "12px" }}
              />
            </ListItemIcon>
            <ListItemText>Change Password</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleProfile();
              handleMenuClose();
            }}
            sx={{
              minWidth: "185px",
              background: "#00000",
              padding: ".5rem",
              paddingLeft: "1rem",
            }}
          >
            <ListItemIcon>
              <img
                // src={Notifications}
                // alt={Notifications}
                style={{ marginRight: "12px" }}
              />
            </ListItemIcon>
            <ListItemText>Notifications</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleChangePassword();
              handleMenuClose();
            }}
            sx={{
              minWidth: "185px",
              background: "#00000",
              padding: ".5rem",
              paddingLeft: "1rem",
            }}
          >
            <ListItemIcon>
              <img
                // src={Settings}
                // alt={Settings}
                style={{ marginRight: "12px" }}
              />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleLogout();
            }}
            sx={{
              minWidth: "185px",
              background: "#00000",
              padding: ".5rem",
              paddingLeft: "1rem",
            }}
          >
            <ListItemIcon>
              <img
                // src={logoutImg}
                // alt={logoutImg}
                style={{ marginRight: "12px" }}
              />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </Menu>
      </Backdrop>
    </Box>
  );
}

export default DashboardView;
