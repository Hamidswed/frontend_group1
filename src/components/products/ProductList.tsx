import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AppDispatch, RootState } from "../../redux/store";
import ProductItem from "./ProductItem";
import fetchProductData from "./../../redux/thunk/product";
import { Link } from "react-router-dom";

const ProductList = () => {
  const productState = useSelector(
    (state: RootState) => state.product.products
  );
  const cartState = useSelector((state: RootState) => state.product.carts);
  const favState = useSelector((state: RootState) => state.product.favorites);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  return (
    <div>
      <Link to="/cart">Cart {cartState.length}</Link>
      <Link to="/favourite">Favourite{favState.length}</Link>
      {productState.length === 0 && (
        <div>
          <i className="fas fa-spinner fa-spin fa-xl" />
          <p style={{ marginTop: "10px" }}>Please Wait...</p>
        </div>
      )}
      <div className="product-list">
        {productState.map((item) => {
          return <ProductItem key={item.id} product={item}/>;
        })}
      </div>
    </div>
  );
};
export default ProductList;
