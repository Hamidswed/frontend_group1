import { AppDispatch, RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//mui
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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
//import Rating from '@mui/material/Rating';

import { ProductType } from "../../type/ProductType";
import { useEffect, useState } from "react";
import { Button, Rating } from "@mui/material";
import { actions } from "../../redux/slice/product";

type PropType = {
  product: ProductType;
};

const ProductItem = ({ product }: PropType) => {
  const dispatch = useDispatch<AppDispatch>();
  const favaoriteList = useSelector(
    (state: RootState) => state.product.favorites
  );
  const isExist = favaoriteList.some(
    (favoriteItem) => Number(favoriteItem.id) === Number(product.id)
  );
  const dispatchFunc = useDispatch<AppDispatch>();
  function addToFavorite() {
    if (!isExist) {
      dispatchFunc(actions.getFavoriteData(product));
    }

    isExist ? setOpen(true) : setOpenFail(true);
    isExist ? setAlert(false) : setAlert(true);
  }
  //snackbar Logic
  const [open, setOpen] = useState<boolean>(false);
  const [openFail, setOpenFail] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenFail(false);
    setOpen(false);
  };
  const [storeIndex, setStoreIndex] = useState(-1);
  const [storeCount, setStoreCount] = useState(0);
  const cartState = useSelector((state: RootState) => state.product.carts);
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
    <Card sx={{ width: 300, maxHeight:450 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {product.title.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.title.slice(0, 20)}
        subheader={product.category}
      />
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.title}
        sx={{ maxWidth: "fit-content", margin: "10px auto" }}
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
        <IconButton aria-label="add to favorites" onClick={addToFavorite}>
          <FavoriteIcon sx={{ color: isExist ? "red" : "gray" }} />
        </IconButton>
        {!alert ? (
          <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert severity="warning">The {product.title} exist already</Alert>
          </Snackbar>
        ) : (
          <Snackbar
            open={openFail}
            autoHideDuration={1000}
            onClose={handleClose}
          >
            <Alert severity="success">
              The {product.title} added Succesfully!
            </Alert>
          </Snackbar>
        )}
        {storeIndex < 0 ? (
          <IconButton onClick={addToCartHandler}>
            <AddShoppingCartIcon />
          </IconButton>
        ) : (
          <div className="product-item-btn">
            <Button
              variant="outlined"
              onClick={removeFromCartHandler}
              size="small"
            >
              -
            </Button>
            <span>{storeCount}</span>
            <Button variant="outlined" onClick={addToCartHandler} size="small">
              +
            </Button>
          </div>
        )}
        <Link to={`/products/${product.id}`}>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
};
export default ProductItem;
