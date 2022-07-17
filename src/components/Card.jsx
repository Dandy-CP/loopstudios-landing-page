import React from "react";
import "../components/Card.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../images/desktop", false, /\.(png|jpe?g|svg)$/)
);

const imagesMobile = importAll(
  require.context("../images/mobile", false, /\.(png|jpe?g|svg)$/)
);

const Card = () => {
  return (
    <div className="containercard">
      <div className="cardtitle">
        <h1>OUR CREATIONS</h1>
        <button className="btn-desktop">SEE ALL</button>
      </div>

      <div className="card">
        <div className="cardimg">
          <h1>
            DEEP <br /> EARTH
          </h1>
          <img src={images["image-deep-earth.jpg"]} alt="img1" />
        </div>

        <div className="cardimg">
          <h1>
            NIGHT <br /> ARCADE
          </h1>
          <img src={images["image-night-arcade.jpg"]} alt="img1" />
        </div>

        <div className="cardimg">
          <h1>
            SOCCER <br /> TEAM VR
          </h1>
          <img src={images["image-soccer-team.jpg"]} alt="img1" />
        </div>

        <div className="cardimg">
          <h1>
            THE <br /> GRID
          </h1>
          <img src={images["image-grid.jpg"]} alt="img1" />
        </div>
      </div>

      <div className="card">
        <div className="cardimg">
          <h1>
            FROM UP <br /> ABOVE VR
          </h1>
          <img src={images["image-from-above.jpg"]} alt="img1" />
        </div>

        <div className="cardimg">
          <h1>
            POCKET <br /> BOREALIS
          </h1>
          <img src={images["image-pocket-borealis.jpg"]} alt="img1" />
        </div>

        <div className="cardimg">
          <h1>
            THE <br /> CURIOSITY
          </h1>
          <img src={images["image-curiosity.jpg"]} alt="img1" />
        </div>

        <div className="cardimg">
          <h1>
            MAKE IT <br /> FISH EYE
          </h1>
          <img src={images["image-fisheye.jpg"]} alt="img1" />
        </div>
      </div>

      <div className="card-mobile">
        <div className="cardimg-mobile">
          <h1>
            DEEP <br /> EARTH
          </h1>
          <img src={imagesMobile["image-deep-earth.jpg"]} alt="img1" />
        </div>

        <div className="cardimg-mobile">
          <h1>
            NIGHT <br /> ARCADE
          </h1>
          <img src={imagesMobile["image-night-arcade.jpg"]} alt="img1" />
        </div>

        <div className="cardimg-mobile">
          <h1>
            SOCCER <br /> TEAM VR
          </h1>
          <img src={imagesMobile["image-soccer-team.jpg"]} alt="img1" />
        </div>

        <div className="cardimg-mobile">
          <h1>
            THE <br /> GRID
          </h1>
          <img src={imagesMobile["image-grid.jpg"]} alt="img1" />
        </div>
        <div className="cardimg-mobile">
          <h1>
            FROM UP <br /> ABOVE VR
          </h1>
          <img src={imagesMobile["image-from-above.jpg"]} alt="img1" />
        </div>

        <div className="cardimg-mobile">
          <h1>
            POCKET <br /> BOREALIS
          </h1>
          <img src={imagesMobile["image-pocket-borealis.jpg"]} alt="img1" />
        </div>

        <div className="cardimg-mobile">
          <h1>
            THE <br /> CURIOSITY
          </h1>
          <img src={imagesMobile["image-curiosity.jpg"]} alt="img1" />
        </div>

        <div className="cardimg-mobile">
          <h1>
            MAKE IT <br /> FISH EYE
          </h1>
          <img src={imagesMobile["image-fisheye.jpg"]} alt="img1" />
        </div>

        <button className="btn-mobile">SEE ALL</button>
      </div>
    </div>
  );
};

export default Card;
