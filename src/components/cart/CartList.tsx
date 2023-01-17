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
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { ProductType } from "../../type/ProductType";
import CartItem from "./CartItem";
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
  const cartState = useSelector((state: RootState) => state.product.carts);
  const totalPrice = useSelector(
    (state: RootState) => state.product.totalPrice
  );
  const dispatch = useDispatch();
  dispatch(actions.totalPrice());

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
    <div>
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
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
      <div>Total:{totalPrice.toFixed(2)}</div>
    </div>
  );
};
export default CartList;
