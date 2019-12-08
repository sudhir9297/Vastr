import React from 'react'
import { Gallery, GalleryImage } from "react-gesture-gallery";

import '../slider/slider.styles.scss'

//Lets be Clear here I still dont know how HOOKs works I just followed a guide to build this .... as per other stuff its easy and fun.

const Slider =()=>{
    const [index, setIndex] = React.useState(0);

    //I dont even know how useEffect work underthe hood I followed a Tutorial
    React.useEffect(() => {
        const timer = setInterval(() => {
        //as we have only 3 images in slider so we are comparing with index 2
          if (index === 2) { 
            setIndex(0); //setting the state of index to 0 if its the end
          } else {
            setIndex(prev => prev + 1);
          }
        }, 3000);

        return () => clearInterval(timer);
      }, [index]);

      //list of images and in return we are just mapping through them 
    const images=[
        {
            src:
            require('../../assets/images/q.jpg')
        },
        {
            src:
            require('../../assets/images/1.jpeg')
        },
        {
            src:
            require('../../assets/images/r.jpg')
        },
        
    ]
    return(
        <div className="slider-container">
            <Gallery
                index={index}
                onRequestChange={i => {
                setIndex(i);
                }}
                >
                {images.map(img => (
                <div className="images"><GalleryImage objectFit="contain" key={img.src} src={img.src} /></div>
                ))}
            </Gallery>
        </div>
    )
}

export default Slider;

