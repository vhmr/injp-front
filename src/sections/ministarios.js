import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "../Card.scss";
import Typography from "@material-ui/core/Typography";
import CardHeader from "../components/card/CardHeader";
import CardBody from "../components/card/CardBody";
import { Button } from "../components/Button";
import { ministerio } from "../shared/ministerios";
import { Get, UrlServer } from "../services/apiService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: "#fbfcfd",
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
    marginTop: 20,
    marginBottom: 20
  }
}));

const Card = () => {
  const classes = useStyles();
  const [ministerios, setMinisterios] = useState([])

  useEffect(() => {
    Get(`${UrlServer}ministerios`, (res) => {
      let data = JSON.parse(res);
      console.log(data)
      setMinisterios(data.ministeries)
    })
  }, [])

  return (
    <Box className={classes.root} id="ministerio">
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
        {ministerios.map((item, index) => (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          xs={12}
          md={4}
          key={index}
        >
          <article className="card">
            <CardHeader
              image={item.image_ministery}
            />
            <CardBody
              title={item.title}
              text={item.description}
            />
            <div className={classes.paddingButton}>
              <Link to={`/ministerio/${item.id}`}>          
                <Button buttonSize="btn--medium" buttonStyle="btn--outline-dark">
                    Ver más...
                </Button>
              </Link>
            </div>
          </article>
        </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Card;
