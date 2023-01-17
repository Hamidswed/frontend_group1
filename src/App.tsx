import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>


    </Routes>
  </div>;
}
export default App;
