import {
  Button,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
<<<<<<< HEAD
=======

>>>>>>> e3454ed (NavBar and Footer)
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ProductType } from "../../type/ProductType";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/slice/product";

type PropType = {
  cart: ProductType;
};
const CartItem = ({ cart }: PropType) => {
  const dispatch = useDispatch();
  return (
    <TableBody className="cart-item">
      <TableRow
        key={cart.id}
        sx={{
          "&:last-child td, &:last-child th": {
            borderBottom: "1px solid lightgrey",
          },
          bgColor: "none",
        }}
      >
        <TableCell component="th" scope="row" align="center">
          <img src={cart.image} alt={cart.title} />
        </TableCell>
        <TableCell align="center">{cart.title.slice(0, 20)}</TableCell>
<<<<<<< HEAD
        <TableCell align="center">${cart.price * cart.qty}</TableCell>
=======
        <TableCell align="center">${cart.price*cart.qty}</TableCell>
>>>>>>> e3454ed (NavBar and Footer)
        <TableCell align="center">{cart.rating.rate}</TableCell>
        <TableCell align="center">
          <Button
            variant="outlined"
            onClick={() => dispatch(actions.removeFromCart(cart))}
<<<<<<< HEAD
            size="small"
          >
            -
          </Button>
          <span style={{marginInline:"10px"}}>{cart.qty}</span>
          <Button
            variant="outlined"
            onClick={() => dispatch(actions.addToCart(cart))}
            size="small"
=======
          >
            -
          </Button>
          {cart.qty}
          <Button
            variant="outlined"
            onClick={() => dispatch(actions.addToCart(cart))}
>>>>>>> e3454ed (NavBar and Footer)
          >
            +
          </Button>
        </TableCell>
        <TableCell align="center">
<<<<<<< HEAD
          <Tooltip title="Remove from cart">
            <IconButton onClick={() => dispatch(actions.removeAll(cart))}>
              <HighlightOffIcon />
            </IconButton>
          </Tooltip>
=======
          <IconButton onClick={()=>dispatch(actions.removeAll(cart))}>
            <HighlightOffIcon />
          </IconButton>
>>>>>>> e3454ed (NavBar and Footer)
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
export default CartItem;
