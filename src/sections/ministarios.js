import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import "../Card.scss";
import Typography from "@material-ui/core/Typography";
import CardHeader from "../components/card/CardHeader";
import CardBody from "../components/card/CardBody";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 40,
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
}));

const Card = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid
        container
        className={classes.title}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h4" component="h4">
          Ministerios
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        xs={12}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          xs={12}
          md={4}
        >
          <article className="card">
            <CardHeader
              image={"https://source.unsplash.com/user/erondu/600x400"}
            />
            <CardBody
              title={"What happened in Thialand?"}
              text={
                "Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"
              }
            />
          </article>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          xs={12}
          md={4}
        >
          <article className="card">
            <CardHeader
              image={"https://source.unsplash.com/user/erondu/600x400"}
            />
            <CardBody
              title={"What happened in Thialand?"}
              text={
                "Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"
              }
            />
          </article>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          xs={12}
          md={4}
        >
          <article className="card">
            <CardHeader
              image={"https://source.unsplash.com/user/erondu/600x400"}
            />
            <CardBody
              title={"What happened in Thialand?"}
              text={
                "Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"
              }
            />
          </article>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        xs={12}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          xs={12}
          md={4}
        >
          <article className="card">
            <CardHeader
              image={"https://source.unsplash.com/user/erondu/600x400"}
            />
            <CardBody
              title={"What happened in Thialand?"}
              text={
                "Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"
              }
            />
          </article>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          xs={12}
          md={4}
        >
          <article className="card">
            <CardHeader
              image={"https://source.unsplash.com/user/erondu/600x400"}
            />
            <CardBody
              title={"What happened in Thialand?"}
              text={
                "Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"
              }
            />
          </article>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          xs={12}
          md={4}
        >
          <article className="card">
            <CardHeader
              image={"https://source.unsplash.com/user/erondu/600x400"}
            />
            <CardBody
              title={"What happened in Thialand?"}
              text={
                "Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence"
              }
            />
          </article>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Card;
