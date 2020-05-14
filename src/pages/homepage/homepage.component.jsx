import React from 'react';
import styled from 'styled-components'
import CardContentSection from '../../components/card-content/card-content-seciton.component'

const Homepage = () => (
    <HomepageContainer className='homepage'>
        <Slider src={require("../../assets/images/4.jpg")} />
        <CardContentSection />
        <SliderCollectionContainer>
            {/* <FakeBackground/> */}
            <SectionTitle>
                <span />
                <SecTitle>New Collection</SecTitle>
            </SectionTitle>
            <ItemContainer>
                <ItemsCont>
                    <ImageContainer>
                        <Image src={require("../../assets/images/21.jpg")} />
                    </ImageContainer>
                    <div>
                        <ItemName>
                            Yellow Flower
                        </ItemName>
                        <ItemPrice>
                            2000 RS/-
                        </ItemPrice>
                    </div>

                </ItemsCont>
            </ItemContainer>
        </SliderCollectionContainer>
    </HomepageContainer>
);

export default Homepage;

const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slider = styled.img`
    width:100vw;
    height:100vh;
    object-fit:cover;
`

const SliderCollectionContainer = styled.div`
    background-color:pink;
    width:100vw;
    height:80vh;
    position:relative;
    padding-left:200px;
`

const FakeBackground = styled.div`
z-index:-1;
float:right;
 width:45%;
 height:100%;
 background-color:#D1D2D1;
`
const SectionTitle = styled.div`
 display:flex;
 align-items:center;
 margin-top:70px;
 text-transform:uppercase;

 span{
     width:20px;
     height:2px;
     margin-right:10px;
     border-radius:3px;
     background-color:#838280;
 }
`
const SecTitle = styled.div`
    font-size:30px;
    color:#838280;
    font-weight:500;
`
const ItemContainer = styled.div`
    width:100%;
    height:80%;
    background-color:lightcyan;
    z-index:100;
    display:flex;
    align-items:center;
`
const ItemsCont = styled.div`
    width:180px;
    height:320px;
    margin-right:40px;
`
const ImageContainer = styled.div`
    width:100%;
    height:80%;
 background-color:lightcoral;
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
 background-color:lightcoral;
`

const ItemName = styled.div`
    font-size:14px;
    color:#605F5E;
    font-weight:500;
`
const ItemPrice = styled.div`
    font-size:12px;
    font-weight:400;
    color:#605F5E;
`