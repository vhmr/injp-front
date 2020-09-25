import React from "react";
import { Player } from "video-react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../../../node_modules/video-react/dist/video-react.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 40,
  },
  title: {
    paddingTop: 40,
    paddingBottom: 40,
  },
}));

const Predicacion = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Typography className={classes.title} variant="h4" component="h4">
          Última predicación
        </Typography>
      </Grid>
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </div>
  );
};

export default Predicacion;
