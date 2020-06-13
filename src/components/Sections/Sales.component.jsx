import React from 'react';
import styled from 'styled-components'

const Sales = () => (
    <SalesContainer>
        <ImageContainer src={require("../../assets/images/13.jpg")} alt="asd" />
        <ImageContainer src={require("../../assets/images/1.jpg")} alt="asd" />
        <Banner>
            <SalesTitle>
                SALES
               </SalesTitle>
            <SalesCollectionTitle>
                Summer Collections
               </SalesCollectionTitle>
            <SalesDiscount>
                -21%
               </SalesDiscount>
        </Banner>

    </SalesContainer>
);

export default Sales;

const SalesContainer = styled.div`
    position:relative;
`

const Banner = styled.div`
 display:flex;
align-items:center;
justify-content:space-evenly;
 flex-direction:column;
   position:absolute;
   top:30%;
   left:37%;
   width: 300px;
    height:300px;
    background-color:white;
`
const SalesTitle = styled.div`
    color:#24464A;
    font-size:42px;
    font-weight:800;
`

const SalesCollectionTitle = styled.div`
     color:#838280;
    font-size:24px;
   
`
const SalesDiscount = styled.div`
    color:#A2C232;
    font-size:42px;
    width:100px;
`
const ImageContainer = styled.img`
    width: 40vw;
    height:40vw;
    padding:20px;
    object-fit:cover
`
