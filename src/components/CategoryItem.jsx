import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  weight: 600;
  color: grey;
`;

const CategoryItem = (props) => {
  return (
    <Container>
      <Image src={props.item.img} />
      <Info>
        <Title>{props.item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
