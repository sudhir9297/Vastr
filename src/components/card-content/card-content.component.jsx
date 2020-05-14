import React from 'react';
import styled from 'styled-components';


const CardContent = (props) => {
    return (
        <ContentContainer>
            <Title>
                {props.title}
            </Title>
            <DOTS>
                <span />
                <span />
                <span />
            </DOTS>
            <Content>
                {props.children}
            </Content>
        </ContentContainer>
    )

}

export default CardContent;

const ContentContainer = styled.div`
    width:150px;
    height:90px;
    display:flex;
    flex-direction:column;
    text-align:center;
    justify-content:space-between;
    align-items:center;
    
`
const Title = styled.div`
width:100%;
 color:#838280;
 font-size:18px;
 font-weight:400;
 text-transform:uppercase;
`
const Content = styled.div`
width:100%;
 color:#838280;
 font-size:16px;
 display:flex;
 justify-content:space-around;
 cursor:pointer;
`
const DOTS = styled.div`
 display:flex;
 justify-content:space-between;
 width:30%;
    span{
        width:4px;
        height:4px;
        border-radius:50%;
        background-color:#838280;
    }

`