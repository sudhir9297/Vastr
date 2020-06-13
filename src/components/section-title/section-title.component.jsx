import React from 'react'
import styled from 'styled-components'

const SliderPreview = (props) => {

    return (
            <SectionTitle>
                <span />
                <SecTitle>{props.children}</SecTitle>
            </SectionTitle>
    )
}

export default SliderPreview;

const SectionTitle = styled.div`
 display:flex;
 align-items:center;
 margin-top:70px;
 text-transform:uppercase;

 span{
     width:45px;
     height:2px;
     margin-right:10px;
     border-radius:3px;
     background-color:#838280;
 }
`
const SecTitle = styled.div`
    font-size:24px;
    color:#838280;
    font-weight:600;
`