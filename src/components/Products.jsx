import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductView from "./ProductView";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductView item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
