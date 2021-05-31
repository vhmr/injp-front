import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "../components/Button";
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 40,
    backgroundColor: "#1e1e1e",
  },
  title: {
    paddingTop: 40,
    paddingBottom: 40,
    color: 'white'
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
      <ReactPlayer
          url='https://www.youtube.com/watch?v=Ff19ucfbwyw'
          className='react-player'
          playing={false}
          width='100%'
          height='600px'
          controls={true}
        />
      <div className={classes.paddingButton}>
        <Link to={'//youtube.com/channel/UCrbqmYxApdICQJXjPY6EFsw'} target='_blank'>          
          <Button buttonSize="btn--wide" buttonStyle="btn--outline">
              Ver más...
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Predicacion;
