import { useEffect } from "react";
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
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <div className="product-list">
      <Link to="/cart">Cart {cartState.length}</Link>
      <Link to="/favourite">Favourite </Link>
      {productState.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
};
export default ProductList;
