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
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: { xs: "350px", md: "900px" },
          paddingBottom:{xs:"2rem"}
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "300px",
            maxHeight: "fit-content",
            margin: "0 auto",
            padding: "1rem",
          }}
          image={productDetail.image}
          alt={productDetail.title}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent:"center"
          }}
        >
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Typography component="div" variant="subtitle1" align="left">
              {productDetail.title}
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize={30}
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
              {productDetail.description}
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
