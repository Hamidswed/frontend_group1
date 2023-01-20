import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Products from "./pages/Products";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import DetailProduct from "./pages/DetailProduct";

import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "./redux/store";

function App() {
  const changeMode = useSelector((state: RootState) => state.product.themeMode);

  const changeTheme = createTheme({
    palette: {
      mode: changeMode ? "dark" : "light",
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={changeTheme}>
        <CssBaseline />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/favorite" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
export default App;
