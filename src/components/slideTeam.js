import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import { photos } from "../components/photos";

const SlideTeam = () => {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      dots={true}
      showSides={true}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      {photos.map((x) => (
        <div>
          <img alt={x.title} src={x.src} />
        </div>
      ))}
    </InfiniteCarousel>
  );
};

export default SlideTeam;
