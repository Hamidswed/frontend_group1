
import FilterProducts from "../components/products/FilterProducts";
import ProductList from "../components/products/ProductList";
import Search from "../components/search/Search";
import { useState } from "react";

const Products = () => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <div className="products-page">
      <h2>Product List</h2>
       <Search userInput={userInput} setUserInput={setUserInput} /> 
        <FilterProducts/>
      <ProductList userInput={userInput} />
    </div>
  );
};
export default Products;
