import React, { useState, useEffect } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Carousel from 'nuka-carousel';
import { content } from "../shared/content";
import { Get, UrlServer } from "../services/apiService";

const Home = () => {

    const [content, setContent] = useState([])

    useEffect(() => {
      Get(`${UrlServer}slider`, (res) => {
        let data = JSON.parse(res);
        console.log(data)
        setContent(data.images)
      })
    }, [])

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
        height="800px"
        style={{ margin: "0px", overflow: "hidden"}}
        autoplayInterval={5000}
      >
        {content.map((item, index) => (
          <img src={item.url} style={{ width: "100%", height: "auto"}}/>
        ))}
      </Carousel>
    );

};

export default Home;
