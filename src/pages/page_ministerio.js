import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ministerios } from "../shared/ministerios";
import '../ministerio.css'
import axios from 'axios'
export const UrlServer = "http://127.0.0.1:8000/api/"


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
    textAlign: "justify",
    lineHeight: 1.7
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
  img_postal: {
    width: "100%",
    height: "auto",
  },
}));

const Card = () => {
  const classes = useStyles();  
  let url = window.location.href;
  let pique = url.split("/");
  let id = pique[4];

  const [ministerio, setMinisterio] = useState()

  useEffect(() => {

    window.scroll({
      top: 0,
      behavior: 'smooth'
    })

    axios.get(`${UrlServer}ministerio/${id}`).then((res) => {
        let data = res.data.ministery
        console.log(data)
        setMinisterio(data)
    }).catch(err => console.log(err))

  }, [id]);

  return (
    <>
      <Box className="img_postal2" style={{backgroundImage:`url(http://127.0.0.1:8000${ministerio.imagen_ministery})`}}>
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
        md={12}
        xs={12}
        align="center"
      >
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
              src={ministerio.imagen_ministery}
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
        style={{ paddingTop: 20}}
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
              className="imgp"
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
    </Box>
  </>  
  );
};

export default Card;
