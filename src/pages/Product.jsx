// import { Add, Remove } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import Announcement from "../components/Announcement";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import Newsletter from "../components/Newsletter";
import { popularProducts } from "../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice.js";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

// const FilterContainer = styled.div`
//   width: 50%;
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
// `;

// const Filter = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const FilterTitle = styled.span`
//   font-size: 20px;
//   font-weight: 200;
// `;

// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
// `;

// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
// `;

// const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
// `;

// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid teal;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px 5px;
// `;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <Container>
      {/* <Announcement />
      <Navbar /> */}
      {popularProducts.map((item) =>
        item.id == id ? (
          <Wrapper>
            <ImgContainer>
              <Image src={`/productImage/prod${id}.png`} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Price>Rs.{item.price}</Price>
              {/* <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color="black" />
                  <FilterColor color="darkblue" />
                  <FilterColor color="gray" />
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                </Filter>
              </FilterContainer> */}
              <AddContainer>
                {/* <AmountContainer>
                  <Remove
                    onClick={() => {
                      dispatch(decrease({ id }));
                    }}
                  />
                  <Amount>1</Amount>
                  <Add
                    onClick={() => {
                      dispatch(increase({ id }));
                    }}
                  />
                </AmountContainer> */}
                <Button
                  onClick={
                    isAuthenticated
                      ? () => {
                          dispatch(addToCart(item));
                        }
                      : () => loginWithRedirect()
                  }
                >
                  ADD TO CART
                </Button>
              </AddContainer>
            </InfoContainer>
          </Wrapper>
        ) : (
          ""
        )
      )}

      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </Container>
  );
};

export default Product;
