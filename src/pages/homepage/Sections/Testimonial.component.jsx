import React from "react";
import styled from "styled-components";

import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { device } from "../../../constant/MediaSize";

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <TestimonialTitle>
        What Our Customer Says
        <Line />
      </TestimonialTitle>
      <TestimonialSlider autoPlay={3000} animationSpeed={1000} infinite dots>
        <TestimonialData>
          <TestimonialDataContainer>
            <UserImage
              src={require("../../../assets/images/15.jpg")}
              alt="Profile image"
            />
            <UserName>Anne Peter</UserName>
            <UserReview>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat"
            </UserReview>
          </TestimonialDataContainer>
        </TestimonialData>
        <TestimonialData>
          <TestimonialDataContainer>
            <UserImage
              src={require("../../../assets/images/17.jpg")}
              alt="Profile image"
            />
            <UserName>Rose Murphy</UserName>
            <UserReview>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat"
            </UserReview>
          </TestimonialDataContainer>
        </TestimonialData>
        <TestimonialData>
          <TestimonialDataContainer>
            <UserImage
              src={require("../../../assets/images/13.jpg")}
              alt="Profile image"
            />
            <UserName>Scarlet dan</UserName>
            <UserReview>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat"
            </UserReview>
          </TestimonialDataContainer>
        </TestimonialData>
      </TestimonialSlider>
    </TestimonialContainer>
  );
};

export default Testimonial;

const TestimonialContainer = styled.div`
  margin: 30px 0px;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TestimonialTitle = styled.div`
  font-size: 42px;
  color: #838280;
  margin: 40px auto;

  @media ${device.mobileL} {
    font-size: 22px;
    margin: 0 auto;
  }
`;
const Line = styled.div`
  width: 80%;
  height: 3px;
  background-color: #a2c232;
  margin: 20px auto;

  @media ${device.mobileL} {
    margin: 10px auto;
    height: 2px;
  }
`;

const TestimonialSlider = styled(Carousel)`
  width: 100vw;
  height: 60vh;
  @media ${device.mobileL} {
    height: 50vh;
  }
`;
const TestimonialData = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media ${device.mobileL} {
    height: 50vh;
  }
`;

const TestimonialDataContainer = styled.div`
  width: 60%;
  height: 65%;
  position: relative;
  display: flex;
  border: 1px solid #707070;
  border-radius: 3px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media ${device.mobileL} {
    width: 80%;
  }
`;

const UserImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  position: absolute;
  top: -50%;
  left: 38%;

  @media ${device.mobileL} {
    top: -30%;
    left: auto;
    width: 18vh;
    height: 18vh;
  }
`;

const UserName = styled.div`
  font-size: 4vw;
  margin: 20px 0;
  color: #24464a;
  font-weight: 600;

  @media ${device.mobileL} {
    margin: 10px 0;
  }
`;

const UserReview = styled.div`
  margin-bottom: 40px;
  font-size: 16px;
  width: 80%;

  @media ${device.mobileL} {
    margin-bottom: 20px;
    font-size: 12px;
    width: 90%;
  }
`;
