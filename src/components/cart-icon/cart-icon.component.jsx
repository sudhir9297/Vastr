import React from 'react';
import styled from 'styled-components'
import { BsBag } from "react-icons/bs";

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';

const CartIcon=({toggleCartHidden,itemCount})=>(
    <CartIconContainer  onClick={toggleCartHidden}>
        <BsBag size="25px"/>
        <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>

)

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);


const CartIconContainer=styled.div`
    width: 45px;
    height: 44px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom:6px;

    :hover{
        color:#A2C232;
    }
`
const ItemCount=styled.span`
    position: absolute;
      font-size: 10px;
      font-weight: bold;
      bottom: 12px;
`

