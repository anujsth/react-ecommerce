import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductView from "./ProductView";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  const laptops = popularProducts.filter((item) => {
    return item.type === "laptop";
  });
  const pc = popularProducts.filter((item) => {
    return item.type === "pc";
  });
  const { type } = useSelector((store) => store.modal);
  return (
    <Container>
      {type === "laptop" &&
        laptops.map((item) => <ProductView item={item} key={item.id} />)}
      {type === "pc" &&
        pc.map((item) => <ProductView item={item} key={item.id} />)}
      {type === " " &&
        popularProducts.map((item) => (
          <ProductView item={item} key={item.id} />
        ))}
    </Container>
  );
};

export default Products;
