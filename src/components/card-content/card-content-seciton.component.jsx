import React from 'react';
import styled from 'styled-components';
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";
import CardContent from '../card-content/card-content.component'


const CardContentSection = (props) => {
    return (
        <ContentContainer>
           <CardContent title="Collabration">
                <div>Our purpose</div>
            </CardContent>
            <Bar />
            <CardContent title="News">
                <div>Our Blog</div> 
            </CardContent>
            <Bar />
            <CardContent title="Social Media">
                <FaFacebookF size="20px" onClick={()=>console.log("facebook")} />
                <FaInstagram size="20px"  onClick={()=>console.log("insta")} />
                <FaTwitter size="20px"  onClick={()=>console.log("twitter")}/>
            </CardContent>
        </ContentContainer>
    )
}

export default CardContentSection;

const ContentContainer = styled.div`
    width:65vw;
    height:370px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`

const Bar = styled.span`
    width:2px;
    height:110px;
    border-radius:2px;
    background-color:#838280;
    
`