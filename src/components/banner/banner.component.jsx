import React from "react";
import "./banner.style.scss";
import ContentWrapper from "../content-wrapper/content-wrapper.component";
import { one, three } from "../../constant/images";

const SliderComp = () => {
  return (
    <div className="banner__container">
      <ContentWrapper>
        <div className="banner__inner_container">
          <div className="banner__content_wrapper">
            <div className="banner__image_wrapper">
              <img src={one} alt="" style={{ borderRadius: "50%" }} />
              <div
                className="banner__detail_container"
                style={{ bottom: "-80px", left: "-80px", borderRadius: "50%" }}
              >
                <div>2020</div>
                <div>New Collection</div>
                <button className="banner__button">Catalog</button>
              </div>
            </div>
          </div>
          <div className="banner__content_wrapper">
            <div className="banner__image_wrapper">
              <img style={{ width: "65%", height: "80%" }} src={three} alt="" />
              <div
                className="banner__detail_container"
                style={{ bottom: "-100px", right: "-90px" }}
              >
                <div>design and</div>
                <div>Produced In</div>
                <div>Mumbai</div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default SliderComp;
