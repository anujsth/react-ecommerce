import React from "react";
import styled from "styled-components";

import Categories from "../components/Categories";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { useDispatch } from "react-redux";
import { clearType } from "../features/modal/modalSlice";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(clearType());
  return (
    <div>
      {/* <Announcement />
      <Navbar /> */}
      <Slider />
      <Categories />
      <Products />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
