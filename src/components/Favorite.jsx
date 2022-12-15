import React from "react";
import styled from "styled-components";
import ProductView from "./ProductView";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Favorite = () => {
  const { likedItems } = useSelector((store) => store.like);
  console.log(likedItems);
  return (
    <Container>
      {likedItems.map((item) => (
        <ProductView item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Favorite;
