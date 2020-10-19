import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ImFacebook2, ImInstagram } from "react-icons/im";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 10,
  },
  title: {
    paddingTop: 80,
    paddingBottom: 40,
  },
  subtitle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 60,
  },
  parrafo: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 40,
    fontSize: 20,
    justifyContent: "justify",
    textAlign: "center",
  },
  img: {
    width: 400,
    height: 400,
    boxShadow: "0, 5, 10, 0, #331ba8",
  },
}));

const Devocional = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Typography className={classes.title} variant="h3" component="h3">
            Título del devocional
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
            <Typography
              className={classes.subtitle}
              variant="h5"
              component="h5"
            >
              Autor
            </Typography>
            <Typography
              className={classes.subtitle}
              variant="h5"
              component="h5"
            >
              Categoría
            </Typography>
            <Typography
              className={classes.subtitle}
              variant="h5"
              component="h5"
            >
              Redes
            </Typography>
            <Typography
              className={classes.subtitle}
              variant="h5"
              component="h5"
            >
              Fecha
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
          <div className={classes.parrafo}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </div>
        </Grid>
      </Box>
    </div>
  );
};

export default Devocional;
