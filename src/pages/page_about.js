import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import pastores1 from "../images/reyes.jpeg";
import partores2 from "../images/victoralba.jpeg";
import equipo from "../images/equipo.jpeg"
import banner from "../images/banner.jpg";
import { team } from "../shared/team";
import '../about.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: 40,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  parrafo: {
    padding: 60,
    fontSize: 18,
    textAlign: "justify",
    lineHeight: 1.7,
  },
  parrafo2: {
    padding: 20,
    fontSize: 18,
    justifyContent: "justify",
    textAlign: "center",
    lineHeight: 1.7
  },
  img: {
    width: 500,
    height: 500,
    borderRadius: "100%",
    boxShadow: "0, 5, 10, 0, #331ba8",
  },
  imgp: {
    width: 380,
    height: 500,
    boxShadow: "0, 5, 10, 0, #331ba8",
  },
  imgportal: {
    width: '70%',
    height: 'auto',
    paddingBottom: 50
  },
  img_postal: {
    width: "100%",
  },
}));

const About = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }, []);

  return (
    <div>
      <Box className="img_postal" style={{backgroundImage:`url(${banner})`}}>
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          md={12}
          xs={12}
          align="center"
        >
        </Grid>
      </Box>
      <Box style={{ backgroundColor: '#1e1e1e', color: '#fff'}}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Typography className={classes.title} variant="h4" component="h4">
            Nosotros
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          style={{ backgroundColor: '#1e1e1e', color: '#fff'}}
        >
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            md={12}
            xs={12}
          >
            <div className="parrafo">
            La iglesia Nueva Jerusalem fue fundada el 15 de Enero de 1990, en las instalaciones de la U.E Arco de Triunfo, por el Pastor Adoniran Diaz y la Hermana Lidia Rico quien que  habitaba en Las Delicias Carapita, lugar donde inició sus actividades. La iglesia en sus inicios fue hija de la Iglesia Nueva Jerusalem ubicada en el paraíso y por eso adopta el mismo nombre.  El trabajo que la iglesia realizaba en ese momento era básicamente el evangelismo infantil y las primeras almas ganadas fueron niños, años más tarde Dios permitió la adquisición de un local para su funcionamiento, allí estuvimos por varios años, luego se trasladó  la cede a Antimano y posteriormente a la Pastora lugar donde funciona hoy. Durante todos estos años Dios nos ha dado el privilegio de servirle en diferentes áreas así como volver a aperturar actividades en la cede original ubicada en Carapita. Actualmente sus pastores son   Virgilio Reyes (pastor Principal )  y Victor Montoya (pastor de Jóvenes) La iglesia funciona con  distintos Ministerios para el engrandecimiento de la obra de Dios. 
            Seguimos bajo la mano del altísimo, confiando en que día a día cumple su propósito a través de su iglesia. 
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ backgroundColor: '#1e1e1e', color: '#fff'}}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            md={6}
            xs={12}
          >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
          >
          <Typography className={classes.title} variant="h4" component="h4">
            Misión
          </Typography>
          </Grid>
            <div className={classes.parrafo2}>
                Vivir para la gloria de Dios haciendo discípulos para nuestro Señor Jesucristo.
            </div>
          </Grid>
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            md={6}
            xs={12}
            align="center"
          >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
          >
          <Typography className={classes.title} variant="h4" component="h4">
            Visión
          </Typography>
          </Grid>
            <div className={classes.parrafo2}>
              Ser una iglesia fiel al Señor Jesucristo y su palabra, compuesta por familias consagradas a serviri al Señor y expandir el evangelio en la comunidad.
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Typography className={classes.title} variant="h4" component="h4">
            Familias pastorales
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            md={6}
            xs={12}
            align="center"
          >
            <img
              className={classes.imgp}
              src={pastores1}
              alt="iglesia"
            />
          <Typography className={classes.title} variant="h6" component="h6">
            Pastor Virgilio Reyes y esposa Marielys de Reyes
          </Typography>
          </Grid>
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            md={6}
            xs={12}
            align="center"
          >
            <img
              className={classes.imgp}
              src={partores2}
              alt="iglesia"
            />
          <Typography className={classes.title} variant="h6" component="h6">
            Pastor Victor Montoya y esposa Alba de Montoya
          </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.root}>
      <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Typography className={classes.title} variant="h4" component="h4">
            Equipo de trabajo
          </Typography>
      </Grid>
        <Grid           
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}>
          <img
            className={classes.imgportal}
            src={equipo}
            alt="iglesia"
          />
        </Grid>        
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
        >
          {team.map((x) => (
            <Grid
              direction="row"
              justify="center"
              alignItems="center"
              md={4}
              sm={12}
              xs={12}
              align="center"
            >
              <img
                className={classes.imgp}
                src={x.src}
                alt="iglesia"
              />
            <Typography className={classes.title} variant="h6" component="h6">
              {x.title}
            </Typography>
            </Grid>
          ))}
        </Grid>

      </Box>
    </div>
  );
};

export default About;
