import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "../sections/menu";
import logo from "../logo.svg";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  sesion: {
    color: "#fff",
    textDecoration: "none",
  },
  logo: {
    width: "20%",
  },
  nav: {
    backgroundColor: "rgb(0 0 0 / 70%)",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="fixed">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Toolbar>
            <Grid container direction="row" md={4} xs={4} align="center">
              <img src={logo} className={classes.logo} alt="gif logo" />
            </Grid>
            <Grid container direction="row" md={8} xs={8}>
              <Menu />
            </Grid>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
}
