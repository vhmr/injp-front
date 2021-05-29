import React, { useState, useEffect } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Carousel from 'nuka-carousel';
import { content } from "../shared/content";
import '../slider.css'

const Home = () => {

    //const [content, setContent] = useState(content)

/*     useEffect(() => {
      Get(`${UrlServer}slider`, (res) => {
        let data = JSON.parse(res);
        console.log(data)
        setContent(data.images)
      })
    }, []) */

    return(
      <Slider className="slider-wrapper" autoplay={5000}>
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p style={{ fontSize: 20}}>{item.description}</p>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Dictado por <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
/*       <Carousel
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
          <img src={`${UrlImages}/${item.url}`} style={{ width: "100%", height: "auto"}}/>
        ))}
      </Carousel> */
    );

};

export default Home;
