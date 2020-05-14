import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components'

import { ReactComponent as Logo } from '../../assets/sbrand.svg';
import { FaRegUser,FaShoppingBag } from "react-icons/fa";

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';


const Header = ({ currentUser, hidden }) => (

    <HeaderContainer>
        
        <LeftOptions className="left-options">
            {/* <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer> */}
            <LogoContainer to="/">
                Vastr.
            </LogoContainer>
            <div>
                <Options to='/shop'>
                    Shop
                </Options>
                <Options to='/accessories'>
                    Lookbook
                </Options>
                <Options to='/blog'>
                    Blog
                </Options>
            </div>
        </LeftOptions>
        <RightOptions>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Options to='/signin'>
                        <FaRegUser size="20px" />
                    </Options>
            }
            <CartIcon />
        </RightOptions>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStatetoProps)(Header);

const HeaderContainer = styled.div`
    height: 50px;
    width: 100%;
    font-size:14px;
    color: #838280;
    top:0;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
`     

const Options = styled(Link)`
        padding: 10px 20px;
        margin-right:10px;
        color: #838280;
        font-weight: 600;
        cursor: pointer;

        :hover{
            color: #A2C232;
            font-weight: bold;
        }
        
`
const LeftOptions = styled.div`
      width: fit-content;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color:#fff;
      border-radius:2px;
`

const RightOptions = styled.div`
     width: fit-content;
      height: 100%;
       padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background-color:#fff;
      border-radius:2px;
`

const LogoContainer = styled(Link)`
      height: 100%;
      width: 100px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-family: 'Petit Formal Script', cursive;
      /* font-family: 'Poiret One', cursive; */
      font-size:35px;
      color:#A2C232;
      font-weight:400;
      margin-left: 35px;
      margin-right: 45px;
`

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
