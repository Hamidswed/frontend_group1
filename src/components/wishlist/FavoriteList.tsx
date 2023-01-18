import { useSelector } from "react-redux";
import { useEffect } from "react";
// store redux components
import FavoriteItem from "./FavoriteItem"
import {RootState } from "../../redux/store"

//mui
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
/* function createData(
  id: number,
  title: string,
  price: number,
  remove:string,
  buy:string,
 
) {
  return {
    id,
    title,
    price,
    remove,
  buy,
  };
}
 */


const FavoriteList=()=>{
  const favoriteList=useSelector((state:RootState)=>state.product.favorites);
//const favouriteState = useSelector((state: RootState) => state.product.favorites);
 //const cartRows = 
 //favoriteList.map((cart) => {
 /*  return createData(
    cart.id,
    cart.title,
    cart.price,
    cart.category,
    cart.category,
   
  ); */
//}); 
// const cat = localStorage.getItem('favoriteList');
return (
  <div>
   
    <h1> Favourite Items are </h1>
    <TableContainer component={Paper} style={{ marginTop: "50px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
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

        {favoriteList.map((item,quantity) => {
      return <FavoriteItem key={item.id} favourite={item} quantity={quantity+1} />;
    })}
      </Table>
    </TableContainer>
   
  </div>
);



}  
export default FavoriteList
