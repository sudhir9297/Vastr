import React from 'react';
import styled from 'styled-components'

import CardContentSection from '../../components/card-content/card-content-seciton.component'
import SliderPreview from '../../components/sliderPreview/sliderPreview.component'
import Slider from '../../components/slider/slider.component'
import NewArrival from '../../components/Sections/NewArrival.component'
import Astetics from '../../components/Sections/Astetics.component'
import Sales from '../../components/Sections/Sales.component'

import SectionTitle from '../../components/section-title/section-title.component'
import { BsChevronDoubleRight } from "react-icons/bs";


const Homepage = () => (
    <HomepageContainer className='homepage'>
        <Slider />
        <CardContentSection />
        <SliderPreview />
        <NewArrival />
        <Astetics />
        <Sales/>
    </HomepageContainer>
);

export default Homepage;

const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
