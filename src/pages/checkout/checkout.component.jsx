import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkoutitem.component';

import data from'../../redux/shop/sliderItem.data'


const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutContainer>
        <ItemContainer >
        <CheckoutHeader >
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
           

        <Total >
            <span>Total: ${total}</span>
        </Total>
    </ItemContainer>
    <StripeApiContainer>
                Stripe Api
    </StripeApiContainer>

    </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);

const CheckoutContainer=styled.div`
    display:flex;
    width:100%;
    padding:20px;
`
const ItemContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`
const CheckoutHeader = styled.div`
    width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid darkgrey;
`
const HeaderBlock = styled.div`
        text-transform: capitalize;
        font-weight:600;
        color:#B7C232;
    
`

const Total = styled.div`
        margin-top: 30px;
        font-weight:600;
        color:#B7C232;
      margin-left: auto;
      font-size: 36px;

`

const StripeApiContainer = styled.div`
    width: 35%;
    height:inherit;
    display: flex;
    border: 1px solid black;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`