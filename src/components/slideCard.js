import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import Card from "../components/card/Card";
import { card } from "../shared/card";

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
      {card.map((x) => {
        return (
          <>
            <Card title={x.title} text={x.text} img={x.image} />
          </>
        );
      })}
    </InfiniteCarousel>
  );
};

export default SlideTeam;
