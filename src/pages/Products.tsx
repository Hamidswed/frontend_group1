import FilterProducts from "../components/products/FilterProducts";
import ProductList from "../components/products/ProductList";

const Products = () => {
  return (
    <div className="products-page">
      <FilterProducts />
      <ProductList />;
    </div>
  );
};
export default Products;
