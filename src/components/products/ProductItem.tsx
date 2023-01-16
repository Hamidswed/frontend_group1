import { ProductType } from "../../type/ProductType";

type PropType = {
  product: ProductType;
};
const ProductItem = ({ product }: PropType) => {
  return (
    <div>
      <p>{product.title}</p>
    </div>
  );
};
export default ProductItem;
