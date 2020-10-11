import React, { useState, useEffect, Component } from "react";
import styled from "styled-components";

import { device } from "../../constant/MediaSize";

import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const SliderComp = () => {
  const images = [
    {
      id: 1,
      src: require("../../assets/images/2.jpg"),
    },
    {
      id: 2,
      src: require("../../assets/images/3.jpg"),
    },
    {
      id: 3,
      src: require("../../assets/images/4.jpg"),
    },
  ];
  return (
    <Carousel
      autoPlay={3000}
      animationSpeed={1000}
      plugins={["arrows"]}
      infinite
    >
      {images.map((img) => (
        <SliderItem key={img.id} src={img.src} />
      ))}
    </Carousel>
  );
};

export default SliderComp;

const SliderItem = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;

  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 300px;
  }
`;
