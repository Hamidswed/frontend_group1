import { ProductType } from "../../type/ProductType";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useDispatch } from "react-redux";
import { actions } from "./../../redux/slice/product";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

type PropType = {
  productDetail: ProductType;
};

export default function ProductDetail({ productDetail }: PropType) {
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Card sx={{ display: "flex", width: 0.6, minHeight: 400 }}>
        <CardMedia
          component="img"
          sx={{ width: 0.5,height:"fit-content", margin: "auto 10px" }}
          image={productDetail.image}
          alt={productDetail.title}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography component="div" variant="subtitle1" align="left">
              {productDetail.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="#F44336"
              component="div"
              align="left"
            >
              ${productDetail.price}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              align="left"
            >
              Description:{productDetail.description}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              align="left"
            >
              {productDetail.category}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "absolute",
              bottom: 20,
              width: "100%",
              paddingRight: "20px",
            }}
          >
            <Link to="/products">
              <IconButton>
                <Tooltip title="Back to product list">
                  <ArrowBackIosNewIcon />
                </Tooltip>
              </IconButton>
            </Link>
            <Button
              variant="outlined"
              sx={{
                maxWidth: 0.7,
              }}
              onClick={() => dispatch(actions.addToCart(productDetail))}
            >
              ADD TO CART
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
