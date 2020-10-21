import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: "#e2eaee",
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
            src="https://source.unsplash.com/Dm-qxdynoEc/800x799"
            alt="iglesia"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
