import React from "react";
import "../components/ContentIntro.css";
import ImageIntro from "../images/desktop/image-interactive.jpg";
import ImageIntroMobile from "../images/mobile/image-interactive.jpg";

const ContentIntro = () => {
  return (
    <div className="ContainerIntro">
      <div className="Intro">
        <img src={ImageIntro} alt="ImgIntro" className="desktop" />
        <img src={ImageIntroMobile} alt="ImgIntro" className="mobile" />
      </div>
      <div className="IntroText">
        <h1>THE LEADER IN INTERACTIVE VR</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default ContentIntro;
