import React from "react";
import { Link } from "react-router-dom";
import { Player } from "video-react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../../node_modules/video-react/dist/video-react.css";
import { Button } from "../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 40,
    backgroundColor: "#fbfcfd",
  },
  title: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  box: {
    boxShadow: "0, 5, 10, 0, #331ba8",
  },
  paddingButton: {
    textAlign: 'center',
    marginTop: 30
  }
}));

const Predicacion = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="predicacion">
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
        className={classes.box}
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
      <div className={classes.paddingButton}>
        <Link to="/predicaciones">          
          <Button buttonSize="btn--wide" buttonStyle="btn--outline-dark">
              Ver más...
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Predicacion;
