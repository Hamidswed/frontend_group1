import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import { ProductType } from "../../type/ProductType";



import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ProductDetail(){
  const productId = useParams();

  const url = `https://fakestoreapi.com/products/${productId.id}`;
    //console.log(productId);
    //console.log(url);

    const [productDetail, setProductDetail] = useState<ProductType>();

    function getData(){
        fetch(url)
        .then((response) => response.json())
        .then((data) => setProductDetail(data));
    }

    const cachedFetch = useCallback(getData, [url]);

    useEffect(() => {
        cachedFetch();
    },[cachedFetch]);




    return (
      <Box sx={{display: "flex", justifyContent: "center" }}>
      <Card sx={{ display: 'flex', width: 0.6, height: 400 }}>
      <CardMedia
          component="img"
          sx={{ width: .5 }}
          image={productDetail?.image}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column'}}>
            <Typography component="div" variant="subtitle1" align="left">
              {productDetail?.title}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div" align="left">
              ${productDetail?.price}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div" align="left">
              Description:{productDetail?.description}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div" align="left">
              {productDetail?.category}
            </Typography>
          </CardContent>
          <Button variant="outlined" sx = {{width: 0.3}}>ADD TO CART</Button>
          
        </Box>
        
      </Card>
      </Box>
    );
}
