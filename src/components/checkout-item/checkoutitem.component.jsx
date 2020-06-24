import React from 'react';
import {connect} from 'react-redux';
import styled from'styled-components'

import {clearItemFromCart,removeItem,addItem} from '../../redux/cart/cart.action';

const CheckoutItem=( {cartItem,clearItem ,addItem,removeItem})=>{
    const {name,imageUrl,price,quantity}=cartItem;
return(
    <CheckoutItemContainer>
        <ImageContainer >
            <img alt='item' src={imageUrl}/>
        </ImageContainer>
        <ItemDescCont>
            <Name >{name}</Name>
            <Desc >{name}</Desc>
        </ItemDescCont>
        <Qantity >
            <div className='arrow' onClick={()=>removeItem(cartItem)}>&#8722;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow'onClick={()=>addItem(cartItem)}>&#65291;</div>
        </Qantity>
        <Price >{price}</Price>
        <RemoveButton onClick={()=>clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
);
};

const mapDispatchToProps=dispatch=>({
    clearItem:item=>dispatch(clearItemFromCart(item)),
    addItem:item=>dispatch(addItem(item)),
    removeItem:item=>dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)( CheckoutItem);

const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
   
`
const Price  = styled.span`
   width: 25%;
    text-align:center;
`

const ItemDescCont  = styled.div`
   width: 20%;
   margin-left:20px;
   display:flex;
   flex-direction:column;
   align-items:flex-start;
   
` 
const Name  = styled.span`
   font-size:18px;
   margin-bottom:8px;
   text-transform: capitalize;
`
const Desc  = styled.span`
   font-size:14px;
`

const ImageContainer  = styled.div`
    width: 10%;
      img {
        width: 100%;
        height: 100%;
        border:1px solid grey;
        border-radius:3px;
      }
`
const Qantity = styled.span`
    display: flex;
      .arrow{
        cursor: pointer;
      }

      .value{
        margin: 0 10px;
      }
`
const RemoveButton = styled.div`
    padding-left: 12px;
      cursor: pointer;
`