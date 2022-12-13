import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  Info,
} from "@mui/icons-material";
import { React, useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data.js";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: choral;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.Index * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-item: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Img = styled.img`
  height: 80%;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick("left");
        }}
      >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper Index={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to="/productlist">
                <Button>SHOP NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      {/* <Slide bg="faf0fd">
          <ImgContainer>
            <Img src="https://c1.neweggimages.com/ProductImageCompressAll1280/BB6JD2206180OOKETD4.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Asus Tuf T12</Title>
            <Desc>
              ASUS ROG Strix G17 17 Gaming Laptop I 17.3" Full HD (1920x1080)
              144Hz IPS Display I 10th Gen Intel Core i7-10750H I RTX 2070 8GB
              GDDR6 I 32GB DDR4 512GB PCIe SSD I RGB Backlit Keyboard Win10
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide> */}

      <Arrow
        direction="right"
        onClick={() => {
          handleClick("right");
        }}
      >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
