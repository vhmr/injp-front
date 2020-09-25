import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "../../Card.scss";

const CardHeader = (props) => {
  const { image } = props;
  var style = {
    backgroundImage: "url(" + image + ")",
  };
  return (
    <div style={style} id={image} className="card-header">
      <h4 className="card-header--title">News</h4>
    </div>
  );
};

const Button = () => {
  return (
    <button className="button button-primary">
      <i className="fa fa-chevron-right"></i> Find out more
    </button>
  );
};

const CardBody = (props) => {
  return (
    <div className="card-body">
      <p className="date">March 20 2015</p>

      <h2>{props.title}</h2>

      <p className="body-content">{props.text}</p>

      <Button />
    </div>
  );
};

const Card = () => {
  return (
    <Box>
      <Grid container direction="row" justify="center" alignItems="center">
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
