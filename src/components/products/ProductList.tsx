import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AppDispatch, RootState } from "../../redux/store";
import ProductItem from "./ProductItem";
import fetchProductData from "./../../redux/thunk/product";

const ProductList = () => {
  const productState = useSelector(
    (state: RootState) => state.product.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <div className="product-list">
      {productState.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
};
export default ProductList;
