import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../sections/slider";

const Devocionales = () => {
  return (
    <div>
      <Header />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        xs={12}
        md={12}
      ></Grid>
    </div>
  );
};

export default Devocionales;
