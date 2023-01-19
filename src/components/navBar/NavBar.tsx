import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  BadgeProps,
  MenuItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux/es/exports";
import { actions } from "../../redux/slice/product";
import { AppDispatch } from "../../redux/store";

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: -2,
    padding: "0 4px",
  },
}));

export default function NavBar() {
  const favList = useSelector((state: RootState) => state.product.favorites);
  const cartState = useSelector((state: RootState) => state.product.carts);

  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let mode = event.target.checked;
    dispatch(actions.changeTheme(mode));
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: "100",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#474747" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <MenuItem component={Link} to={"/"}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Home
            </Typography>
          </MenuItem>
          <MenuItem component={Link} to={"/products"}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Product list
            </Typography>
          </MenuItem>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuItem component={Link} to={"/favorite"}>
              <StyledBadge badgeContent={favList.length} color="error">
                <FavoriteIcon />
              </StyledBadge>
            </MenuItem>
            <MenuItem component={Link} to={"/cart"}>
              <StyledBadge badgeContent={cartState.length} color="error">
                <ShoppingCartIcon />
              </StyledBadge>
            </MenuItem>
            <Switch onChange={handleChange} color = "default"/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
