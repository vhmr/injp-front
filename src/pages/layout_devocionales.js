import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../components/card/Card";
import { card } from "../shared/card";
import Header from "../sections/slider";
import Dev from "../sections/devocionales";
import Sidebar from "../components/sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    paddingTop: 130,
    paddingBottom: 40,
    justifyContent: "justify",
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
    <div className={classes.root}>
      <Header />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        {card.map((x) => {
          return (
            <>
              <Card title={x.title} text={x.text} img={x.image} />
            </>
          );
        })}
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={8}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
            md={12}
          >
            <Dev />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
            md={12}
          >
            <Dev />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          md={4}
        >
          <Sidebar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Devocionales;
