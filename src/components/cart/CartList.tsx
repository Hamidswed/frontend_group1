import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Button,
  Alert,
  Snackbar,
  styled,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { Link } from "react-router-dom";
 import { RootState } from "../../redux/store";
 import { ProductType } from "../../type/ProductType";
 import { actions } from "./../../redux/slice/product";

 function createData(
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number;
    count: number;
  },
  qty: number
) {
  return {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    qty,
  };
}
const CartList = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const CheckOutBTN = styled(Button)({
    color: "#06d6a0",
    borderColor: "#06d6a0",
    "&:hover": {
      color: "#ffb703",
      borderColor: "#ffb703",
    },
  });
  const cartState = useSelector((state: RootState) => state.product.carts);
  const totalPrice = useSelector(
    (state: RootState) => state.product.totalPrice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.totalPrice());
  });

  const cartRows = cartState.map((cart) => {
    return createData(
      cart.id,
      cart.title,
      cart.price,
      cart.description,
      cart.category,
      cart.image,
      cart.rating,
      cart.qty
    );
  });
  return (
    <div className="cart-list">
      {cartState.length === 0 ? (
        <div className="cart-list-warning">
          <Tooltip title="Back to products">
            <Link to="/products">
              <IconButton>
                <AddShoppingCartOutlinedIcon sx={{ fontSize: "50px" }} />
              </IconButton>
            </Link>
          </Tooltip>
          <em>Please add product to the cart!</em>
        </div>
      ) : (
        <>
          <TableContainer component={Paper} style={{ marginTop: "50px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#ffb703" }}>
                  <TableCell align="center">
                    <strong>Image</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Title</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Price</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Rating</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Quantity</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Remove</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              {cartRows.map((cart) => {
                return <CartItem key={cart.id} cart={cart} />;
              })}
            </Table>
          </TableContainer>
          <div className="cart-total">
            <CheckOutBTN variant="outlined" onClick={handleClick}>
              Checkout
            </CheckOutBTN>
            <p>
              <strong>Total Price</strong>
            </p>
            <p>
              <strong>$ {totalPrice.toFixed(2)}</strong>
            </p>
          </div>
        </>
      )}

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default CartList;
