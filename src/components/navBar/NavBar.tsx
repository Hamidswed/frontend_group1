import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  BadgeProps,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeIcon from "@mui/icons-material/Home";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
  const matches = useMediaQuery("(min-width:640px)");
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
      <AppBar position="static" sx={{ padding: "0 2rem" }}>
        <Toolbar>
          <Logo
            style={{
              width: matches ? "120px" : "70px",
              display: matches ? "block" : "none",
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "block" },
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "50%", md: "20%" },
            }}
          >
            <Link to="/">
              <IconButton >
                <HomeIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Link>
            <Link to="products">
              <IconButton>
                <FormatListBulletedIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Link>
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
            <Switch onChange={handleChange} color="default" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
