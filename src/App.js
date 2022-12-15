import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import CartContainer from "./components/cart/CartContainer";
import { useEffect } from "react";
import { calcTotal } from "./features/cart/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/cart/Modal.js";
import FavoriteList from "./pages/FavoriteList";

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems } = useSelector((store) => {
    return store.cart;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calcTotal());
  }, [cartItems]);
  return (
    <Router>
      <Navbar />

      {isOpen && <Modal />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/productlist" element={<ProductList />}></Route>

        <Route path="/cartlist" element={<CartContainer />}></Route>
        <Route path="/liked" element={<FavoriteList />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
