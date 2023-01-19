
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { AppDispatch, RootState } from "../../redux/store";
import ProductItem from "./ProductItem";
import fetchProductData from "./../../redux/thunk/product";
import { Link } from "react-router-dom";


type PropType = {
  userInput: string;
};

const ProductList = ( {userInput}:PropType) => {
  const productState = useSelector(
    (state: RootState) => state.product.products
  );
//new code sahira
let productResult;
if(userInput)
{
  productResult = productState.filter((country) =>
  country.title.toLowerCase().includes(userInput.toLowerCase()));
}
else
productResult=productState;
const cartState = useSelector((state: RootState) => state.product.carts);
const favState = useSelector((state:RootState)=>state.product.favorites)
const dispatch = useDispatch<AppDispatch>();

useEffect(() => {
dispatch(fetchProductData());
 }, [dispatch]);

  return (
    <div>
      <Link to="/cart">Cart {cartState.length}</Link>

      <Link to="/favourite">Favourite {favState.length}</Link>
      { productResult.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
};
export default ProductList;
