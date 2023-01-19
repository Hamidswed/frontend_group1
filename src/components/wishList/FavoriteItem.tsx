import { ProductType } from "../../type/ProductType";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/slice/product";
import { AppDispatch } from "../../redux/store";
//mui
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Button,
  IconButton,
  TableBody,
  TableCell,
  TableRow, 
} from "@mui/material";


type PropType={
  favourite:ProductType;
  quantity:number;
}

const FavoriteItem=({favourite,quantity}:PropType)=>
{
  const dispatch=useDispatch<AppDispatch>();

function addToCart()
{
dispatch(actions.removeFromFavourite(favourite))
dispatch(actions.addToCart(favourite))
}
  return (
   
 <TableBody className="favourite-item">
      <TableRow
        key={favourite.id}
        sx={{
          "&:last-child td, &:last-child th": {
            borderBottom: "1px solid lightgrey",
          },
          bgColor: "none",
        }}
      >
        <TableCell align="center">{quantity + " ."} </TableCell>
        <TableCell align="center">{favourite.title.slice(0,20)} </TableCell>
        <TableCell align="center">{favourite.price}</TableCell>
        <TableCell align="center">
  <IconButton onClick={()=>dispatch(actions.removeFromFavourite(favourite))}>
    <FavoriteIcon sx={{ color: "red" }} ></FavoriteIcon>
  </IconButton>
        </TableCell>
        <TableCell align="center">
    <Button onClick={addToCart}>BUY</Button> 
        </TableCell>
      </TableRow>
    </TableBody>
   
  );
 
}
export default FavoriteItem;