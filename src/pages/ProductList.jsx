import styled from "@emotion/styled";
import React from "react";
// import Announcement from "../components/Announcement";
// import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { useSelector, useDispatch } from "react-redux";
import { setType } from "../features/modal/modalSlice";

// import { useState } from "react";

// import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  const { type } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  return (
    <Container>
      {/* <Announcement />
      <Navbar /> */}
      <Title>Laptop and PC</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>

          <Select
            value={type}
            onChange={(e) => {
              dispatch(setType(e.target.value));
            }}
          >
            <Option value=" " disabled>
              Category
            </Option>
            <Option value="laptop">Laptop</Option>
            <Option value="pc">PC</Option>
          </Select>
        </Filter>
        {/* <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select
            onChange={(e) => {
              dispatch(setSort(e.target.value));
            }}
          >
            <Option selected disabled>
              Based on price
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="des">Price (desc)</Option>
          </Select>
        </Filter> */}
      </FilterContainer>
      <Products />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </Container>
  );
};

export default ProductList;
