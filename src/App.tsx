import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import FavoriteList from "./components/wishlist/FavoriteList";
import Products from './pages/Products';
import Cart from './pages/Cart';
import WishList from "./pages/WishList";

function App() {
  return <div className="App">
  
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      
      <Route path="/favourite" element={<WishList/>} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes> 
    
    <Products></Products>
  {/*  <FavoriteList></FavoriteList> 
 */}
  </div>;
}

export default App;