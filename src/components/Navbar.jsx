import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div`
  height: 60px;
  background-color: #f5fafd;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: none;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: #f5fafd;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  text-align: center;
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 10px;
`;

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const { amount } = useSelector((store) => store.cart);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
            {/* <img src="./icon.png" height="20px" width="20px" /> */}
          </SearchContainer>
        </Left>

        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
            <Logo>Techno Nepal</Logo>
          </Link>
        </Center>
        <Right>
          {isAuthenticated && <MenuItem>{user.nickname}</MenuItem>}
          {isAuthenticated ? (
            <MenuItem
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              SIGN OUT
            </MenuItem>
          ) : (
            <MenuItem onClick={() => loginWithRedirect()}>SIGN IN</MenuItem>
          )}

          <MenuItem>
            <Badge
              badgeContent={amount}
              color="primary"
              style={{ textDecoration: "none", color: "grey" }}
            >
              <Link to="/cartlist">
                <ShoppingCartOutlined />
              </Link>
            </Badge>
            {/* <Badge color="secondary" badgeContent={amount}>
              
            </Badge> */}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
