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
					className="slider-content slider-img-fondo"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p style={{ fontSize: 20}}>{item.description}</p>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Expositor: <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>

    );

};

export default Home;
