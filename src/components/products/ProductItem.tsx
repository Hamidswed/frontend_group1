<<<<<<< HEAD
import React from "react";



export default function ProductItem()
{
    return <div>

    </div>;
    
}


=======
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
>>>>>>> 2005d1cd421e01424231e1d6c746a88fa3a641c1
