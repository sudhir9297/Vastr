import React from 'react';
import styled from 'styled-components'
import SectionTitle from '../section-title/section-title.component'
import { BsChevronDoubleRight } from "react-icons/bs";


const NewArrival = () => (
    <NewArrivalContainer>
        <SecImageCont>
            <ImgItem src={require("../../assets/images/5.jpg")} />
            <ImageCont2>
                <img src={require("../../assets/images/8.png")} />
                <img src={require("../../assets/images/7.png")} />
            </ImageCont2>
        </SecImageCont>
        <SecDataCont>
            <div>
                < SectionTitle>
                    New Arrival
                </SectionTitle>
                <Desc>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                   </Desc>
                <ButtonCont>
                    Watch All <BsChevronDoubleRight />
                </ButtonCont>
            </div>
        </SecDataCont>
    </NewArrivalContainer>
);

export default NewArrival;

const NewArrivalContainer = styled.div`
    display: flex;
    height:100vh;
    align-items:center;
    margin-top:20px;
`
const SecImageCont = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:50vw;
    height:85vh;
`

const ImgItem = styled.img`
    width:360px;
    height:100%;
    border: 1px solid #707070;
    border-radius:3px;
`

const ImageCont2 = styled.div`
    display:flex;
    height:100%;
    flex-direction:column;
    justify-content:space-between;
    img{
        width:180px;
        height:46%;
        border: 1px solid #707070;
        border-radius:3px;
    }
`

const SecDataCont = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
margin-top:20%;
width:40vw;
height:100vh;
`

const Desc = styled.div`
    width:60%;
    height:auto;
    line-height:1.5;
    margin:20px 50px;
    color:#838280;
    
`
const ButtonCont = styled.div`
margin:20px 50px;
font-weight:600;
font-size:18px;
color:#838280;
cursor:pointer;
`



