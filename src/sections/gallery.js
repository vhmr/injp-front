import React, { useState, useCallback, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { UrlImages } from '../services/apiService'
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from '../sanity'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    flexGrow: 1,
  },
  paddingButton: {
    textAlign: 'center',
    marginTop: 30
  }
}));

const Galleria = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos2, setPhotos2] = useState([])
	const builder = imageUrlBuilder(sanityClient);
	const urlFor = (source) => {
	  return builder.image(source);
	}

  useEffect(() => {
    
    sanityClient
    .fetch(`*[_type == "gallery" && title == 'general']{
      title,
      "imagenes": *[_type == "imagenes" && gallery._ref == ^._id ]
    }`)		  
    .then((data) => setPhotos2(data[0].imagenes))
    .catch(console.error);

  }, [])

  const photos = []
  for (let index = 0; index < photos2.length; index++) {
    
    let src = photos2[index].mainImage.asset._ref
   
    if(index <= 3){
      photos.push({
        src: urlFor(src).url(),
        width: 4,
        height: 4,
      })
    } else if(index > 3 && index < 6){
      photos.push({
        src: urlFor(src).url(),
        width: 4,
        height: 4,
      })
    } else if(index === 7){
      photos.push({
        src: urlFor(src).url(),
        width: 4500,
        height: 1000
      })
    }
    else{
      photos.push({
        src: urlFor(src).url(),
        width: 4,
        height: 3,
      })
    }
  }

  console.log(photos);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root} id ="gallery">
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography className={classes.root} variant="h4" component="h4">
          Actividades
        </Typography>
      </Grid>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: `${urlFor(x.src).url()}`,
                caption: x.id,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
{/*       <div className={classes.paddingButton}>
        <Link to="/actividades">          
          <Button buttonSize="btn--wide" buttonStyle="btn--outline-dark">
              Ver más...
          </Button>
        </Link>
      </div> */}
    </div>
  );
};

export default Galleria;
