import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../sections/slider";
import About from "../sections/about";
import Actv from "../sections/gallery";
import Card from "../sections/cards";
import Devocionales from "../sections/devocionales";
import Predicacion from "../sections/predicacion";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <About />
      <Predicacion />
      <Devocionales />
      <Card />
      <Actv />
    </div>
  );
};

export default Home;