import { ProductType } from "../../type/ProductType";

//mui
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

type FavoriteListType={
  favourite:ProductType;
  quantity:number;
}

const FavoriteItem=({favourite,quantity}:FavoriteListType)=>
{
  
const name=favourite.title.slice(0,20);

      return (
      
<Box style={{ display: "flex", alignItems: "flex-end"  , justifyContent:"space-around"}} >
     <Typography   variant="h5">
     {quantity + " ."} 
      
     </Typography>
     <Typography  variant="h5" component="div">  {name} </Typography>
     <Typography  variant="h5"> {favourite.price} </Typography>
     <Typography  variant="h2"> <FavoriteIcon sx={{ color: "red" }} ></FavoriteIcon> </Typography>
     <Typography  variant="h2"> <Button> BUY</Button> </Typography>
     
     </Box>
     
  );
 
 
}
export default FavoriteItem









