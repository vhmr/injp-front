import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { devocional } from "../shared/devocional";
import { Button } from "../components/Button";
import "../devo.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: "#e2eaee",
  },
  title: {
    paddingTop: 80,
    paddingBottom: 40,
  },
  parrafo: {
    padding: 40,
    fontSize: 18,
    justifyContent: "justify",
  },
  paddingButton: {
    textAlign: 'center',
    marginTop: 30
  }
}));

const Devocionales = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} id="devocionales">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Typography className={classes.title} variant="h4" component="h4">
          Devocionales
        </Typography>
      </Grid>
      <div className="slider">
        <div className="mask">
          <ul>
            {devocional.map((item, index) => (
              <li className={`anim${index + 1}`} key={index}>
                <div className="quote">{item.title}</div>
                <div className="source">- {item.description}</div>
                <section>
                  <img src={item.userProfile} alt={item.user} />
                  <span>
                    Posted by <strong>{item.user}</strong>
                  </span>
                </section>
                <div className={classes.paddingButton}>
                  <Link to="/">          
                    <Button buttonSize="btn--medium" buttonStyle="btn--outline-dark">
                        Ver más...
                    </Button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default Devocionales;
