import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "../components/Button";
import logo from "../images/banner4.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: 0,
    paddingBottom: 40,
  },
  title: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  parrafo: {
    padding: 30,
    fontSize: 20,
    justifyContent: "justify",
    textAlign: "center",
    lineHeight: 1.7
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    boxShadow: "0, 5, 10, 0, #331ba8",
  },
  paddingButton: {
    textAlign: 'center'
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} id="about">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Typography className={classes.title} variant="h4" component="h4">
          Acerca de nosotros
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
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
          Somos una iglesia fiel al Señor Jesucristo y su palabra, compuesta por familias consagradas a servir al Señor y expandir el evangelio en la comunidad.

          </div>
          <div className={classes.paddingButton}>
            <Link to="/about">          
              <Button buttonSize="btn--wide" buttonStyle="btn--outline-dark">
                  Ver más...
              </Button>
            </Link>
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
            src={logo}
            alt="iglesia"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
