import React from "react";
import styled from "styled-components";
import SectionTitle from "../../../components/section-title/section-title.component";
import { BsChevronDoubleRight } from "react-icons/bs";

import { device } from "../../../constant/MediaSize";

const NewArrival = () => (
  <NewArrivalContainer>
    <SecImageCont>
      <ImgItem src={require("../../../assets/images/5.jpg")} />
      <ImageCont2>
        <img src={require("../../../assets/images/8.png")} />
        <img src={require("../../../assets/images/7.png")} />
      </ImageCont2>
    </SecImageCont>
    <SecDataCont>
      <SectionTitle>New Arrival</SectionTitle>
      <Desc>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Desc>
      <ButtonCont>
        Watch All <BsChevronDoubleRight />
      </ButtonCont>
    </SecDataCont>
  </NewArrivalContainer>
);

export default NewArrival;

const NewArrivalContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  margin-top: 20px;

  @media ${device.mobileL} {
    margin-top: 50px;
    width: 100%;
    flex-direction: column;
    height: fit-content;
  }
`;
const SecImageCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50vw;
  height: 85vh;

  @media ${device.mobileL} {
    height: fit-content;
    width: 100%;
  }
`;

const ImgItem = styled.img`
  width: 360px;
  height: 100%;
  border: 1px solid #707070;
  border-radius: 3px;

  @media ${device.mobileL} {
    width: 60vw;
    height: auto;
  }
`;

const ImageCont2 = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 180px;
    height: 46%;
    border: 1px solid #707070;
    border-radius: 3px;

    @media ${device.mobileL} {
      width: 30vw;
      height: auto;
    }
  }
`;

const SecDataCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20%;
  width: 40vw;
  height: 100vh;

  @media ${device.mobileL} {
    margin-top: 0%;
    width: 100%;
    height: auto;
  }
`;

const Desc = styled.div`
  width: 60%;
  height: auto;
  line-height: 1.5;
  margin: 20px 50px;
  color: #838280;
`;
const ButtonCont = styled.div`
  margin: 20px 50px;
  font-weight: 600;
  font-size: 18px;
  color: #838280;
  cursor: pointer;
`;
