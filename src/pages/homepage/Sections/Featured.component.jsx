import React from "react";
import styled from "styled-components";

import SectionTitle from "../../../components/section-title/section-title.component";
import { BsChevronDoubleRight } from "react-icons/bs";

const FeaturedSection = () => {
  return (
    <FeaturedSectionContainer>
      <SectionTitle>Featured Section</SectionTitle>
      <ImageContainer>
        <FeaturedImage>
          <Image src={require("../../../assets/images/18.jpg")} />
          <Image src={require("../../../assets/images/17.jpg")} />
          <CardCont>
            <div>
              <Title>New Arrival</Title>
              <Desc>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Desc>
              <ButtonCont>
                Watch All <BsChevronDoubleRight />
              </ButtonCont>
            </div>
          </CardCont>
          <Image src={require("../../../assets/images/19.jpg")} />
          <Image src={require("../../../assets/images/21.jpg")} />
          <Image src={require("../../../assets/images/22.jpg")} />
        </FeaturedImage>
      </ImageContainer>
    </FeaturedSectionContainer>
  );
};

export default FeaturedSection;

const FeaturedSectionContainer = styled.div`
  width: 100vw;
  height: auto;
  margin: 60px 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FeaturedImage = styled.div`
  width: 75%;
  display: flex;
  margin-top: 80px;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  margin-bottom: 22px;
  border: 1px solid #d1d2d1;
  border-radius: 3px;
`;

const CardCont = styled.div`
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  margin-bottom: 22px;

  div{
      width:80%;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #838280;
  margin-bottom:10px;
`;

const Desc = styled.div`
  height: auto;
  line-height: 1.3;
  color: #838280;
  margin-bottom:10px;
`;
const ButtonCont = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #838280;
  cursor: pointer;
`;
