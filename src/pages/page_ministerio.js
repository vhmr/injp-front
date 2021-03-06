import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ministerio } from "../shared/ministerios";
import Actv from "../sections/gallery";
import { Get, UrlServer } from "../services/apiService";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    paddingTop: 80,
    paddingBottom: 40,
  },
  title_postal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontWeight: 0,
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#00000080',
    padding: 30,
    color: 'white'
  },
  parrafo: {
    padding: 40,
    fontSize: 18,
    justifyContent: "justify",
  },
  paddingButton: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  img: {
    width: '100%',
    height: 'auto',
    boxShadow: "0, 5, 10, 0, #331ba8",
  },
  imgp: {
    width: '70%',
    height: 'auto',
    boxShadow: "0, 5, 10, 0, #331ba8",
  },
  img_postal: {
    width: "100%",
    height: "auto",
  },
}));

const Card = () => {
  const classes = useStyles();
  const [ministerio, setMinisterio] = useState([])

  
  let url = window.location.href;
  let pique = url.split("/");
  let id = pique[4];

  //let ministerio = ministerio.find( m => m.id === id)

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })

    Get(`${UrlServer}ministerio/${id}`, (res) => {
      let data = JSON.parse(res);
      console.log(data.ministery)
      setMinisterio(data.ministery[0])
    })
  }, []);

  return (
    <>
      <Box>
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
        md={12}
        xs={12}
        align="center"
      >
        <img
          className={classes.img_postal}
          src={ministerio.imagen_ministery}
          alt="iglesia"
          style={{filter: 'grayscale(100%)'}}
        />
      </Grid>
    </Box>
    <Box className={classes.root}>
      <Grid
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.title_postal}
          md={12}
          xs={12}
          align="center"
        >
          <Typography variant="h2" component="h2">
            {ministerio.title}
          </Typography>
        </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        xs={12}
      >
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            md={6}
            xs={12}
          >
            <div className={classes.parrafo}>
              <p dangerouslySetInnerHTML={{ __html: ministerio.description }}></p>
            </div>
          </Grid>
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            md={6}
            xs={12}
            align="center"
          >
            <img
              className={classes.img}
              src={ministerio.image_ministery}
              alt="iglesia"
            />
          </Grid> 
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        xs={12}
      >
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            md={6}
            xs={12}
            align="center"
          >
            <img
              className={classes.imgp}
              src={ministerio.image_lider}
              alt="iglesia"
            />
          </Grid>          
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            md={6}
            xs={12}
          >
            <div className={classes.parrafo}>
              <h4>{ministerio.name_lider}</h4>
              <p dangerouslySetInnerHTML={{ __html: ministerio.bio_lider }}></p>
            </div>
          </Grid>
        </Grid>          
      </Grid>
      <Actv />
    </Box>
  </>  
  );
};

export default Card;
