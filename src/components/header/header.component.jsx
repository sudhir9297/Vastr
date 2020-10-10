import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";

import { FaRegUser, FaShoppingBag } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { device } from "../../constant/MediaSize";

const Header = ({ currentUser, hidden, toggleMenuHidden }) => {
  const [MenuHidden, setMenuHidden] = useState(false);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo to="/">Vastr.</Logo>
        {MenuHidden ? (
          <MenuButtonClose
            size="25px"
            onClick={() => {
              setMenuHidden(!MenuHidden);
            }}
          />
        ) : (
          <MenuButtonHam
            size="25px"
            onClick={() => {
              setMenuHidden(!MenuHidden);
            }}
          />
        )}
      </LogoContainer>

      <OptionContainer toggle={MenuHidden}>
        <LeftOptions>
          <Options to="/shop">Shop</Options>
          <Options to="/accessories">Lookbook</Options>
          <Options to="/blog">Blog</Options>
        </LeftOptions>
        <RightOptions>
          {currentUser ? (
            <div
              style={{
                fontWeight: "600",
                padding: "10px 10px",
              }}
              onClick={() => auth.signOut()}
            >
              Sign Out
            </div>
          ) : (
            <Options to="/signin">
              <FaRegUser size="20px" />
            </Options>
          )}
          <CartIcon />
        </RightOptions>
      </OptionContainer>

      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStatetoProps)(Header);

const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  font-size: 14px;
  color: #838280;
  top: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    width: 100%;
    background-color: #a2c232;
  }
`;

const MenuButtonClose = styled(MdClose)`
  display: none;
  @media ${device.mobileL} {
    position: absolute;
    color: #fff;
    display: block;
    right: 10px;
  }
`;

const MenuButtonHam = styled(FiMenu)`
  display: none;
  @media ${device.mobileL} {
    position: absolute;
    color: #fff;
    display: block;
    right: 10px;
  }
`;

const LogoContainer = styled.div`
  height: 100%;
  background-color: #fff;

  @media ${device.mobileL} {
    background-color: #a2c232;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled(Link)`
  height: 100%;
  width: 100%;
  font-family: "Petit Formal Script", cursive;
  /* font-family: 'Poiret One', cursive; */
  font-size: 35px;
  color: #a2c232;
  font-weight: 400;
  margin: 0 45px 0 35px;

  @media ${device.mobileL} {
    height: fit-content;
    width: fit-content;
    text-align: center;
    color: #fff;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobileL} {
    width: 100%;
    flex-direction: column;
    align-items: center;

    display: ${(props) => (props.toggle ? "block" : "none")};
  }
`;

const Options = styled(Link)`
  padding: 10px 20px;
  margin-right: 10px;
  color: #838280;
  font-weight: 600;
  cursor: pointer;

  :hover {
    color: #000;
    font-weight: bold;
  }

  @media ${device.mobileL} {
    color: #fff;
  }
`;
const LeftOptions = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0 2px 2px 0;

  @media ${device.mobileL} {
    flex-direction: column;
    width: 100%;
    height: fit-content;
  }
`;

const RightOptions = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 2px;

  @media ${device.mobileL} {
    color: #fff;
    flex-direction: column;
    width: 100%;
    height: fit-content;
  }
`;

// const LogoContainer = styled(Link)`
//       height: 100%;
//       width: 100px;
//       margin-left: 30px;
//       margin-right: 45px;

//       .logo{
//         width:100%;
//         height: 100%;
//       }

// `

{
  /* <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer> */
}
