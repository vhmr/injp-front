import React from "react";
import { Slide } from "react-slideshow-image";
import slider1 from "../images/slider/slider1"

const slideImages = [
  "https://source.unsplash.com/Dm-qxdynoEc/800x799",
  "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  "https://source.unsplash.com/iecJiKe_RNg/600x799",
];

const Slideshow = () => {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
