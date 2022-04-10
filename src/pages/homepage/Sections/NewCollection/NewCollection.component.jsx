import React from "react";
import "./NewCollection.style.scss";
import { eight, nine, ten } from "../../../../constant/images";

import { ContentWrapper } from "../../../../components";

const NewCollection = () => {
  return (
    <div className="collection__container">
      <ContentWrapper>
        <div className="collection__inner_container">
          <div className="collection__text_wrapper">
            <div className="collection__text1"> Shop Our New Collection</div>
          </div>
          <div className="collection__image_wrapper">
            <img src={ten} />
            <img src={eight} />
            <img src={nine} />
          </div>
          <div className="collection__button_wrapper">
            <button className="collection__button">catalog</button>
          </div>
        </div>{" "}
      </ContentWrapper>
    </div>
  );
};

export default NewCollection;
