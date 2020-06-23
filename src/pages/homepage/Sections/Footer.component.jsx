import React from 'react';
import styled from 'styled-components'
import SectionTitle from '../../../components/section-title/section-title.component'
import { BsChevronDoubleRight } from "react-icons/bs";


const Footer = () => (
    <FooterContainer>
        <Logo>
            Vastr.
       </Logo>
        <FooterContent>
            <ContentBox1>
                <Text href="/shop">Shop</Text>
                <Text href="/shop">LookBook</Text>
                <Text href="/shop">Blog</Text>
            </ContentBox1>
            <ContentBox1>
                <Text href="/shop">Terms & Policies</Text>
                <Text href="/shop">FAQ</Text>
                <Text href="/shop">Special Offer</Text>
            </ContentBox1>
            <ContentBox2>
                <Text2>For Latest News & Update</Text2>
                <InputContainer>
                    <InputBox placeholder="Please Enter Your Email" />
                    <SubmitButton onclick={null}/>
                </InputContainer>
            </ContentBox2>


        </FooterContent>
    </FooterContainer>
);

export default Footer;

const FooterContainer = styled.div`
    width:100%;
    height:50vh;
    margin-top:20px;
    background-color:#000;
    color:#fff;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Logo = styled.div`
    font-size:52px;
    margin-top:25px;
    color:#A2C232;
    font-weight:600;
    width:100%;
    height:100px;
    font-family: 'Petit Formal Script', cursive;

`
const FooterContent = styled.div`
    width:90%;
    display:flex;
    justify-content:space-evenly;
`
const ContentBox1 = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
   
`
const ContentBox2 = styled.div`
    display:flex;
    flex:2;
    flex-direction:column;
    align-items:center;
`

const Text = styled.a`
   font-size:18px;
   font-weight:600;
   margin:5px 0;
   color:white;

`

const Text2 = styled.div`
   font-size:25px;
   font-weight:600;
`

const InputContainer = styled.div`
    margin-top:10px;
    height:50px;
    width:60%;
    position:relative;
`

const InputBox = styled.input`
    width:100%;
    height:30px;
    border-radius:3px;
    border:none;
    outline: none;
`
const SubmitButton = styled(BsChevronDoubleRight)`
    position:absolute;
    width:24px;
    height:24px;
    right:0px;
    padding:1px;
    top:3px;
    color:#fff;
    border:1px solid A2C232;
    border-radius:3px;
    background-color:#A2C232;
    cursor:pointer;
`