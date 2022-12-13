import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Info = styled.div`
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 370px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  widht: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  width: 100%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductView = (props) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();
  const id = props.item.id;
  return (
    <Container>
      <Circle />
      <Image src={props.item.img} />
      <Info>
        <Icon
          onClick={
            isAuthenticated
              ? () => {
                  dispatch(addToCart(props.item));
                }
              : () => loginWithRedirect()
          }
        >
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductView;
