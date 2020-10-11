import React from "react";
import styled from "styled-components";
import { device } from "../../../constant/MediaSize";

const Sales = () => (
  <SalesContainer>
    <ImageContainer src={require("../../../assets/images/13.jpg")} alt="asd" />
    <ImageContainer src={require("../../../assets/images/1.jpg")} alt="asd" />
    <Banner>
      <SalesTitle>SALES</SalesTitle>
      <SalesCollectionTitle>Summer Collections</SalesCollectionTitle>
      <SalesDiscount>-21%</SalesDiscount>
    </Banner>
  </SalesContainer>
);

export default Sales;

const SalesContainer = styled.div`
  position: relative;
  display: flex;

  @media ${device.mobileL} {
    justify-content: center;
    align-items: center;
  }
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 37%;
  width: 300px;
  height: 300px;
  background-color: white;

  @media ${device.mobileL} {
    top: auto;
    left: auto;
    width: 15vh;
    height: 15vh;
    align-self: center;
  }
`;
const SalesTitle = styled.div`
  color: #24464a;
  font-size: 42px;
  font-weight: 800;
  text-align: center;

  @media ${device.mobileL} {
    font-size: 20px;
  }
`;

const SalesCollectionTitle = styled.div`
  color: #838280;
  font-size: 24px;
  text-align: center;

  @media ${device.mobileL} {
    font-size: 12px;
  }
`;
const SalesDiscount = styled.div`
  color: #a2c232;
  font-size: 42px;
  width: 100px;
  text-align: center;

  @media ${device.mobileL} {
    font-size: 20px;
    width: 100%;
  }
`;
const ImageContainer = styled.img`
  width: 40vw;
  height: 40vw;
  padding: 20px;
  object-fit: cover;
`;
