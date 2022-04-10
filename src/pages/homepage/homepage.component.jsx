import React from "react";
import styled from "styled-components";

import NewCollection from "./Sections/NewCollection/NewCollection.component";

import Footer from "./Sections/Footer.component";

import SectionTitle from "../../components/section-title/section-title.component";
import { BsChevronDoubleRight } from "react-icons/bs";

import { Banner } from "../../components";

const Homepage = () => (
  <HomepageContainer className="homepage">
    <Banner />
    <NewCollection />
    <Footer />
  </HomepageContainer>
);

export default Homepage;

const HomepageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
