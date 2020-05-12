import React from 'react';
import styled from 'styled-components'

const Homepage =() => (
    <HomepageContainer className='homepage'>
        <Slider src={require("../../assets/images/4.jpg")}/>
    </HomepageContainer>
);

export default Homepage;

const HomepageContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slider=styled.img`
    width:100vw;
    height:100vh;
    object-fit:cover;
`