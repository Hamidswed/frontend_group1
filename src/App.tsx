import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import FavoriteList from "./components/wishlist/FavoriteList";
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetail from "./components/products/ProductDetail";

function App() {
  return <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element = {<ProductDetail/>}></Route>
      
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  </div>;
}

export default App;