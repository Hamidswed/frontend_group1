import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Link } from "react-router-dom";
// store redux components
import FavoriteItem from "./FavoriteItem";
import { RootState } from "../../redux/store";

//mui
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const FavoriteList = () => {
  const favoriteList = useSelector(
    (state: RootState) => state.product.favorites
  );
  return (
    <div className="cart-list">
      {favoriteList.length === 0 ? (
        <div className="cart-list-warning">
          <Tooltip title="Back to products">
            <Link to="/products">
              <IconButton>
                <AddShoppingCartOutlinedIcon sx={{ fontSize: "50px" }} />
              </IconButton>
            </Link>
          </Tooltip>
          <em>Please add product to the Favourites!</em>
        </div>
      ) : (
        <Fragment>
          <h3> Favourite List</h3>
          <TableContainer component={Paper} style={{ marginTop: "50px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#ffb703" }}>
                  <TableCell align="center">
                    <strong>Item</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Title</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Price</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Remove</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Buy</strong>
                  </TableCell>
                </TableRow>
              </TableHead>

              {favoriteList.map((item, quantity) => {
                return (
                  <FavoriteItem
                    key={item.id}
                    favourite={item}
                    quantity={quantity + 1}
                  />
                );
              })}
            </Table>
          </TableContainer>
        </Fragment>
      )}
    </div>
  );
};
export default FavoriteList;
