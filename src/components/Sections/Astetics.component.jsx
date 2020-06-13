import React from 'react';
import styled from 'styled-components'

const NewArrival = () => (
    <Astetics>
        <FakeBackground />
        <Container1>
            <img src={require('../../assets/images/1.jpg')} />
            <div>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </div>
        </Container1>
        <Container2>
            <img src={require('../../assets/images/21.jpg')} alt="just image" />
        </Container2>
    </Astetics>
);

export default NewArrival;

const FakeBackground = styled.div`
z-index:-1;
 width:35%;
 position:absolute;
 height:100%;
 left:0;
 background-color:#D1D2D1;
`
const Astetics = styled.div`
display:flex;
 width:100vw;
 height:90vh;
 position:relative;
 margin:40px 0;
`
const Container1 = styled.div`
 width:60vw;
 height:100%;
 display:flex;
 align-items:center;
 justify-content:space-evenly;
 flex-direction:column;

 img{
     width:80%;
     height:auto;
 }

 div{
    width:60%;
    height:auto;
    font-size:16px;
    color:#838280;
    float:left;
   
 }
`
const Container2 = styled.div`
 width:40vw;
 height:100%;
 


 img{
    width:320px;
    height:auto;
    border: 1px solid #707070;
    border-radius:3px;
 }

`
