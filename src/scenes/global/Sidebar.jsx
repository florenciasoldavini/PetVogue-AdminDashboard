import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PetsIcon from "@mui/icons-material/Pets";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logout from "../../redux/actions/login/logout";
import toast, { Toaster } from "react-hot-toast";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const userAuth = useSelector((state) => state.login);
  const isLoggedIn = userAuth.login && userAuth.login.token;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setTimeout(() => toast.success("Has cerrado sesion"), 200);
  };

  return (
    <div>
      <Toaster position="top-center" />
      {isLoggedIn ? (
        <Box
          sx={{
            "& .pro-sidebar-inner": {
              background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
              backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
              padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
              color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
              color: "#6870fa !important",
            },
          }}
        >
          <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
              {/* LOGO AND MENU ICON */}
              <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                  color: colors.grey[100],
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <Typography variant="h3" color={colors.grey[100]}>
                      PETVOGUE
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>

              {!isCollapsed && (
                <Box mb="25px">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      alt="profile-user"
                      width="100px"
                      height="100px"
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                      src={userAuth.login.user.photo}
                    />
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      variant="h2"
                      color={colors.grey[100]}
                      fontWeight="bold"
                      sx={{ m: "10px 0 0 0" }}
                    >
                      {userAuth.login.user.firstName}
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                      Administrador
                    </Typography>
                  </Box>
                </Box>
              )}

              <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                <Item
                  title="Dashboard"
                  to="/"
                  icon={<HomeIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />

                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Data
                </Typography>

                <Item
                  title="Usuarios"
                  to="/users"
                  icon={<PersonIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Mascotas"
                  to="/pets"
                  icon={<PetsIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Servicios"
                  to="/services"
                  icon={<MedicalServicesIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Productos"
                  to="/products"
                  icon={<InventoryIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Ordenes de compra"
                  to="/orders"
                  icon={<ShoppingCartIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />

                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Pages
                </Typography>

                <Item
                  title="Calendar"
                  to="/calendar"
                  icon={<CalendarTodayIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="FAQ Page"
                  to="/faq"
                  icon={<HelpIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <div onClick={handleLogout}>
                  <Item
                    title="Logout"
                    to="/login"
                    icon={<LogoutIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </div>
              </Box>
            </Menu>
          </ProSidebar>
        </Box>
      ) : (
        <Box></Box>
      )}
    </div>
  );
};

export default Sidebar;
