import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { ProductType } from "../../type/ProductType";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./../../redux/slice/product";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { Button, Rating } from "@mui/material";

type PropType = {
  product: ProductType;
};

const ProductItem = ({ product }: PropType) => {
  const [storeIndex, setStoreIndex] = useState(-1);
  const [storeCount, setStoreCount] = useState(0);
  const cartState = useSelector((state: RootState) => state.product.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    const index = cartState.findIndex((item) => item.id === product.id);
    setStoreIndex(index);
    if (index >= 0) {
      setStoreCount(cartState[index].qty);
    }
  }, [cartState, product.id]);

  const addToCartHandler = () => {
    dispatch(actions.addToCart(product));
  };
  const removeFromCartHandler = () => {
    dispatch(actions.removeFromCart(product));
  };
  return (
    <Card sx={{ width: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {product.title.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.title.slice(0, 20)}
        subheader={product.category}
      />
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.title}
        sx={{maxWidth:"fit-content",margin:"10px auto"}}
      />
      <CardContent>
        <Typography
          sx={{ fontWeight: "bold", color: "#F44336", fontSize: "20px" }}
        >
          ${product.price}
        </Typography>
        <Rating
          name="read-only"
          value={product.rating.rate}
          readOnly
          sx={{ marginTop: "10px" }}
        />
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {storeIndex < 0 ? (
          <IconButton onClick={addToCartHandler}>
            <AddShoppingCartIcon />
          </IconButton>
        ) : (
          <div className="product-item-btn">
            <Button variant="outlined" onClick={removeFromCartHandler} size="small">
              -
            </Button>
            <span>{storeCount}</span>
            <Button variant="outlined" onClick={addToCartHandler} size="small">
              +
            </Button>
          </div>
        )}
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default ProductItem;
