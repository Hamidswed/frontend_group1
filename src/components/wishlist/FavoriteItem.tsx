import { ProductType } from "../../type/ProductType";

//mui
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import {
  IconButton,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/slice/product";
import { AppDispatch } from "../../redux/store";
type PropType = {
  favourite: ProductType;
  quantity: number;
};

const FavoriteItem = ({ favourite, quantity }: PropType) => {
  const dispatch = useDispatch<AppDispatch>();

  function addToCart() {
    dispatch(actions.removeFromFavourite(favourite));
    dispatch(actions.addToCart(favourite));
  }

  return (
    <TableBody className="cart-item">
      <TableRow
        key={favourite.id}
        sx={{
          "&:last-child td, &:last-child th": {
            borderBottom: "1px solid lightgrey",
          },
          bgColor: "none",
        }}
      >
        <TableCell align="center">{`${quantity} .`} </TableCell>
        <TableCell align="center">{favourite.title.slice(0, 20)} </TableCell>
        <TableCell align="center">${favourite.price}</TableCell>
        <TableCell align="center">
          <IconButton
            onClick={() => dispatch(actions.removeFromFavourite(favourite))}
          >
            <FavoriteIcon sx={{ color: "red" }} />
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <IconButton onClick={addToCart}>
            <AddShoppingCartOutlinedIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
export default FavoriteItem;
