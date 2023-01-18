import { useSelector } from "react-redux";

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


const FavoriteList=()=>{
  const favoriteList=useSelector((state:RootState)=>state.product.favorites);
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
