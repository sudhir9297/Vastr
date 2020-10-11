import React from "react";
import styled from "styled-components";

import CardContentSection from "./Sections/card-content/card-content-section.component";
import SliderPreview from "./Sections/sliderPreview/sliderPreview.component";
import Slider from "../../components/slider/slider.component";
import NewArrival from "./Sections/NewArrival.component";
import Astetics from "./Sections/Astetics.component";
import Sales from "./Sections/Sales.component";
import FeaturedSection from "./Sections/Featured.component";
import Testimonial from "./Sections/Testimonial.component";
import Footer from "./Sections/Footer.component";

import SectionTitle from "../../components/section-title/section-title.component";
import { BsChevronDoubleRight } from "react-icons/bs";

const Homepage = () => (
  <HomepageContainer className="homepage">
    <Slider />
    <CardContentSection />
    <SliderPreview />
    <NewArrival />
    <Astetics />
    <Sales />
    <FeaturedSection />
    <Testimonial />
    <Footer />
  </HomepageContainer>
);

export default Homepage;

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
