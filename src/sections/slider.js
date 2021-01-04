import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Carousel from 'nuka-carousel';
import { content } from "../shared/content";

class Home extends Component {

  state = {
    slideIndex: 0
  };
 
  render() {
    return(
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>Previous</button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>Next</button>
        )}
        autoplay={true}
        width="100%"
        height="1000px"
        style={{ margin: "0px", overflow: "hidden"}}
        autoplayInterval={5000}
      >
        {content.map((item, index) => (
          <img src={item.image}  />
        ))}
      </Carousel>
    );
  }
};

export default Home;
