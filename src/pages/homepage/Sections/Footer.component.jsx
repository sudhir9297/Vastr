import React from "react";
import styled from "styled-components";
import SectionTitle from "../../../components/section-title/section-title.component";
import { BsChevronDoubleRight } from "react-icons/bs";

import { device } from "../../../constant/MediaSize";

const Footer = () => (
  <FooterContainer>
    <Logo>Vastr.</Logo>
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
          <SubmitButton onclick={null} />
        </InputContainer>
      </ContentBox2>
    </FooterContent>
    <CpyRyt>Copyright @ PictureStudio.All rights reserved</CpyRyt>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 50vh;
  margin-top: 20px;
  background-color: #000;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileL} {
    height: fit-content;
  }
`;
const Logo = styled.div`
  font-size: 52px;
  margin-top: 25px;
  color: #a2c232;
  font-weight: 600;
  width: 100%;
  height: 100px;
  font-family: "Petit Formal Script", cursive;

  @media ${device.mobileL} {
    font-size: 42px;
    height: fit-content;
  }
`;
const FooterContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;

  @media ${device.mobileL} {
    margin-bottom: 0;
    flex-direction: column;
  }
`;

const ContentBox1 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${device.mobileL} {
    align-items: center;
  }
`;
const ContentBox2 = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.a`
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
  color: white;

  @media ${device.mobileL} {
    font-size: 14px;
    font-weight: 400;
    margin: 5px 0;
  }
`;

const Text2 = styled.div`
  font-size: 25px;
  font-weight: 600;

  @media ${device.mobileL} {
    display: none;
  }
`;

const InputContainer = styled.div`
  margin-top: 10px;
  height: 50px;
  width: 60%;
  position: relative;

  @media ${device.mobileL} {
    width: 80%;
  }
`;

const InputBox = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 3px;
  border: none;
  outline: none;
`;
const SubmitButton = styled(BsChevronDoubleRight)`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 0px;
  padding: 1px;
  top: 3px;
  color: #fff;
  border: 1px solid A2C232;
  border-radius: 3px;
  background-color: #a2c232;
  cursor: pointer;

  @media ${device.mobileL} {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

const CpyRyt = styled.div`
  margin-bottom: 10px;
  @media ${device.mobileL} {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;
