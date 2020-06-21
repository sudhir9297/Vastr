import React from 'react';
import styled from 'styled-components';
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";

const CollectionItem = ({item}) => {
    const {name,price,imageUrl}=item;

    return (
            <ItemsCont>
                    <ImageContainer>
                        <Image src={imageUrl} />
                    </ImageContainer>
                    <div>
                        <ItemName>
                            {name}
                        </ItemName>
                        <ItemPrice>
                            {price} RS/-
                        </ItemPrice>
                    </div>
            </ItemsCont>
    )
}

export default CollectionItem;

const ItemsCont = styled.div`
    width:200px;
    height:310px;
    margin:50px 0px;
    
`
const ImageContainer = styled.div`
    width:100%;
    height:90%;
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const ItemName = styled.div`
    font-size:12px;
    font-weight:600;
    color:#605F5E;
    font-weight:600;
    margin:4px 0 2px 0;
`
const ItemPrice = styled.div`
    font-size:10px;
    font-weight:400;
    color:#605F5E;
`
