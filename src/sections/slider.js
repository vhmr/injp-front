import React, { useState, useEffect } from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from '../sanity'
import '../slider.css'


const SliderPrincipal = () => {
	
	const builder = imageUrlBuilder(sanityClient);
	const urlFor = (source) => {
	  return builder.image(source);
	}
    const [content, setContent] = useState([])

	useEffect(() => {
		sanityClient
		  .fetch(`*[_type == "slider"]{
			_id,
			_createdAt,
			title,
			description,
			mainImage,
			usuario -> {
			 name,
			 image
			},
		  }`)
		  .then((data) => setContent(data))
		  .catch(console.error);
	  }, []);

    return(
      <Slider className="slider-wrapper" autoplay={5000}>
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content slider-img-fondo"
					style={{ background: `url('${urlFor(item.mainImage).url()}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p style={{ fontSize: 20}}>{item.description}</p>
					</div>
					<section>
						<img src={urlFor(item.usuario.image).width(100).url()} alt={item.usuario.name} />
						<span>
							Expositor: <strong>{item.usuario.name}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>

    );

};

export default SliderPrincipal;
