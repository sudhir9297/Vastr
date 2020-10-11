import React from "react";
import styled from "styled-components";

import { device } from "../../../../constant/MediaSize";

import CollectionPreview from "../../../../components/collections-Item/collection_preview.component";
import SectionTitle from "../../../../components/section-title/section-title.component";

const SliderPreview = () => {
  return (
    <SliderCollectionContainer>
      <FakeBackground />
      <SectionTitle>New Collection</SectionTitle>
      <CollectionPreview />
    </SliderCollectionContainer>
  );
};

export default SliderPreview;

const SliderCollectionContainer = styled.div`
  width: 100vw;
  height: 80vh;
  position: relative;
  @media ${device.mobileL} {
    height: 60vh;
  }
`;

const FakeBackground = styled.div`
  z-index: -1;
  float: right;
  width: 45%;
  position: absolute;
  right: 0;
  height: 100%;
  background-color: #d1d2d1;

  @media ${device.mobileL} {
    width: 45%;
    height: 100%;
  }
`;
