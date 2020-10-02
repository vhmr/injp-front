import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { devocional } from "../components/devocional";
import "../devo.css";

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
    padding: 40,
    fontSize: 18,
    justifyContent: "justify",
  },
}));

const Devocionales = () => {
  const classes = useStyles();
  return (
    <div className="root">
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Devocionales;
