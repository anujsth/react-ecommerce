import React from "react";
import Favorite from "../components/Favorite";
import styled from "styled-components";

const Container = styled.div``;

const FavoriteList = () => {
  return (
    <Container>
      <Favorite />
    </Container>
  );
};

export default FavoriteList;
