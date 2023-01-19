import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AppDispatch, RootState } from "../../redux/store";
import ProductItem from "./ProductItem";
import fetchProductData from "./../../redux/thunk/product";

type PropType = {
  userInput: string;
};

const ProductList = ({ userInput }: PropType) => {
  const productState = useSelector(
    (state: RootState) => state.product.products
  );
  //new code sahira
  let productResult;
  if (userInput) {
    productResult = productState.filter((product) =>
      product.title.toLowerCase().includes(userInput.toLowerCase())
    );
  } else productResult = productState;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  return (
    <div className="product-list">
      {productState.length === 0 && (
        <div>
          <i className="fas fa-spinner fa-spin fa-xl" />
          <p style={{ marginTop: "10px" }}>Please Wait...</p>
        </div>
      )}
      <div className="product-list">
        {productResult.map((item) => {
          return <ProductItem key={item.id} product={item} />;
        })}
      </div>
    </div>
  );
};
export default ProductList;
