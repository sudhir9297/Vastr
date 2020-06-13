import React from 'react'
import styled from 'styled-components'

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
//Lets be Clear here I still dont know how HOOKs works I just followed a guide to build this .... as per other stuff its easy and fun.

const Slider = () => {

  const images = [
    {
      id:1,
      src:
        require('../../assets/images/2.jpg')
    },
    {
      id:2,
      src:
        require('../../assets/images/3.jpg')
    },
    {
      id:3,
      src:
        require('../../assets/images/4.jpg')
    },

  ]
  return (
    <Carousel autoPlay={3000}
      animationSpeed={1000} infinite>
      {
        images.map((img) => <SliderItem key={img.id} src={img.src} />)
      }
    </Carousel>
  )
}

export default Slider;


const SliderItem = styled.img`
    width:100vw;
    height:100vh;
    object-fit:cover;
    /* z-index:1; */
`