import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SlideTeam from "../components/slideTeam";
import pastores1 from "../images/virgilimary.jpeg";
import partores2 from "../images/victoralba.jpeg";

//const iglesia = ["https://source.unsplash.com/Dm-qxdynoEc/800x799"];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: 40,
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
  },
  img: {
    width: 500,
    height: 500,
    borderRadius: "100%",
    boxShadow: "0, 5, 10, 0, #331ba8",
  },
  imgp: {
    width: 400,
    height: 500,
    boxShadow: "0, 5, 10, 0, #331ba8",
  },
  img_postal: {
    width: "100%",
    height: "100vh",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div>
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
            src="https://source.unsplash.com/Dm-qxdynoEc/800x799"
            alt="iglesia"
          />
        </Grid>
      </Box>
      <Box className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Typography className={classes.title} variant="h4" component="h4">
            Visión
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
            md={12}
            xs={12}
          >
            <div className={classes.parrafo}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Typography className={classes.title} variant="h4" component="h4">
            Misión
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
      <Box className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Typography className={classes.title} variant="h4" component="h4">
            Familia pastoral
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
            align="center"
          >
            <img
              className={classes.imgp}
              src={pastores1}
              alt="iglesia"
            />
          <Typography className={classes.title} variant="h6" component="h6">
            Pastor Virgilio Reyes y su esposa Marielys Castro
          </Typography>
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
              className={classes.imgp}
              src={partores2}
              alt="iglesia"
            />
          <Typography className={classes.title} variant="h6" component="h6">
            Pastor Victor Montoya y su esposa Alba Ordoñez
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Typography className={classes.title} variant="h4" component="h4">
            Equipo de trabajo
          </Typography>
        </Grid>
        <SlideTeam />
      </Box>
    </div>
  );
};

export default About;
