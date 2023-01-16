import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from './pages/Products';

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>

    </Routes>
  </div>;
}

export default App;
