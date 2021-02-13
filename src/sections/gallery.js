import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../shared/photos";
import { Button } from "../components/Button";
import { Get, UrlServer } from "../services/apiService";


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
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    Get(`${UrlServer}actividades`, (res) => {
      let data = JSON.parse(res);
      console.log(data)
      setPhotos(data.images)
    })
  }, [])

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
                srcset: x.url,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <div className={classes.paddingButton}>
        <Link to="/actividades">          
          <Button buttonSize="btn--wide" buttonStyle="btn--outline-dark">
              Ver más...
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Galleria;
