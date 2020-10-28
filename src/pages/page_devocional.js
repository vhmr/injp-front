import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { devocional } from "../shared/devocional";
import { autor } from "../shared/autor";
import devo from "../images/devocionales.jpg";
import "../devo.css";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingBottom: 10,
  },
  title: {
    paddingTop: 80,
    paddingBottom: 40,
  },
  title_postal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontWeight: 0,
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#00000080',
    padding: 30
  },
  subtitle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 60,
  },
  parrafo: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 40,
    paddingTop: 60,
    fontSize: 20,
    textAlign: 'justify'
  },
  img: {
    width: 400,
    height: 400,
    boxShadow: "0, 5, 10, 0, #331ba8",
  },
  img_postal: {
    width: "100%",
    height: "100vh",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: '100%',
    verticalAlign: 'middle',
    border: 'solid 2px rgba(87, 87, 87, 0.5)'
  }, 
  div: {
    paddingTop: 40,
    paddingBottom: 100
  }, 
  left: {
    textAlign: 'end',
    paddingRight: 150
  },
  strong: {
    fontSize: 18
  },
  span: {
    fontSize: 16
  }
}));

const Devocional = () => {
  const classes = useStyles();

  let url = window.location.href;
  let pique = url.split("/");
  let id = pique[4];

  let content = devocional.find( m => m.id === id);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }, []);

  return (
    <>
      <Box className={classes.root}>
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          md={12}
          xs={12}
          align="center"
        >
          <img
            className={classes.img_postal}
            src={devo}
            alt="iglesia"
            style={{filter: 'grayscale(100%)'}}
          />
        </Grid>
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.title_postal}
          md={12}
          xs={12}
          align="center"
        >
          <Typography variant="h2" component="h2">
            {content.title}
          </Typography>
          { content.Serie ? <Typography variant="h4" component="h4">Serie: {content.Serie}</Typography> : '' }
        </Grid>
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          md={12}
          xs={12}
          align="center"
        >
          <p className={classes.parrafo}>

              📖 Perdona el mal que hacemos, así como nosotros perdonamos a los que nos hacen mal. (Mateo 6:12)<br/>

              ❇️ No cabe duda que este versículo nos enseña que así como nosotros fallamos, muchos nos han fallado también; un familiar o un amigo.<br/>
              ❇️ En este mundo estamos propensos a pasar por decepciones, incluso de personas a quienes queremos mucho; que nos defraudan, que nos traicionan ya que solo están pendiente de sus intereses personales.<br/>
              ❇️ Creo firmemente que así como nos han decepcionado, fallado y defraudado, pues amado lector nosotros mismos hemos cometido ese error con esas personas que confiaron tanto en nosotros.<br/> 
              ¿No le parece?
              Mañana continuaremos con este tema y deseo que juntos podamos aprender y que al final de esta serie podamos decir sinceramente:<br/>
              ALGO DEBE CAMBIAR EN MI.<br/>
              Feliz y bendecido Lunes 🙏
              (Pastor Virgilio Reyes)
          </p>
        </Grid>
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          md={12}
          xs={12}
          align="center"
        >
          <section className={classes.left}>
            <img className={classes.avatar} src={content.userProfile} alt={content.user} />
            <span className={classes.span}>
              Posted by <strong className={classes.strong}>{content.user}</strong>
            </span>
          </section>
        </Grid>
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          md={12}
          xs={12}
          align="center"
        >
          <Typography className={classes.title} variant="h5" component="h5">
            Devocionales por autor:
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          xs={12}
          className={classes.div}
        >
        {autor.map((item, index) => (
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
          <Link to={`/devocionales/${item.id}`} >          
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>          
          </Link>
        </Grid>
        ))}
      </Grid>
      </Box>
    </>
  );
};

export default Devocional;
