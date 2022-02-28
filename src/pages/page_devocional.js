import React, { useEffect, useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {FaArrowRight} from 'react-icons/fa';
import DevoContext from '../context/devocionalCotext'
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from '../sanity'
import PortableText from "react-portable-text";
import "../devo.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#eef0f1",
    padding: 20,
  },
  title: {
    fontFamily: 'Libre Baskerville, serif'
  },
  content: {
    lineHeight: 2, padding: '20px', textAlign: 'justify', fontFamily: 'Libre Baskerville, serif'
  },
  media_all: {
    height: 140
  },
  userName: {
    marginLeft: 8,
    marginTop: 10,
    border: 0,
    fontWeight: "bold",
    fontFamily: 'Libre Baskerville, serif'
  },
  perfilName: {
    marginTop: -15,
    marginLeft: 40,
    fontSize: 18,
    fontWeight: "bold"
  },
  root_card_blog: {
    flexGrow: 1,
    background: "rgba(0,0,0,0)",
    padding: 5
  },
  card_blogs: {
    border: 0,
    background: "rgba(0,0,0,0)",
    boxShadow: "0px 0px",
  },
  root_perfil: {
    flexGrow: 1,
    background: "rgba(0,0,0,0)",
    padding: 5
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10
  },
  line: {
    borderBottom: "1px dotted #cccccc",
    paddingTop: 20
  },
  userCard: {
    background: "#081034",
    padding: 15
  }
}));

const Devocional = () => {

  let url = window.location.href;
  let pique = url.split("/");
  let id = pique[4];

  const builder = imageUrlBuilder(sanityClient);
	const urlFor = (source) => {
	  return builder.image(source);
	}

  const classes = useStyles();
  const [devocionales, setDevocionales] = useState([])
  const devo = useContext(DevoContext)
  const content = devo.devo.find(m => m._id === id)
  const fecha = content.publishedAt.split('T')

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    sanityClient
    .fetch(`*[_type == "post"]{
      _id,
      publishedAt,
      title,
      description,
      extracto,
      mainImage,
      categories -> {
      title,
      },
      tags,
      body,
      usuario -> {
       name,
       image,
       bio
      },
    }`)
    .then((data) => setDevocionales(data))
    .catch(console.error);
  }, []);

  return (
    <div className = {classes.root}>
      <Grid container spacing={3}>
        <Grid  item md = {1} spacing = {2}>

        </Grid>
        <Grid  item md = {8} spacing = {2}>
          <Card>
            <CardMedia component = "img" alt = "imagen_fondo" image ={urlFor(content.mainImage.asset._ref).url()} className="media" />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2" className={classes.title}>
                {content.title}
              </Typography>
              <AvatarGroup maxc = {2} style={{ paddingBottom: '20px'}}>
                <Avatar alt = "img_perfil" src = {urlFor(content.usuario.image.asset._ref).width(60).url()}/>
                <Typography variant = "body2" className = {classes.userName} color = "textSecondary" component = "p">
                  {content.usuario.name}  -  Etiquetas: {content.tags} - Publicado: {fecha[0]} <br/>Categoría: {content.categories.title}
                </Typography>
              </AvatarGroup>
              <Typography color = "textSecondary" component = "p">
                <PortableText 
                    className={classes.content}
                    dataset ={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                    content={content.body}
                  />

              </Typography>
            </CardContent>
          </Card>
          <div id = "divScroll"/>
        </Grid>
        <Grid item md = {3} spacing = {2}>
          <Card style = {{background: "rgba(0,0,0,0)"}}>
            <CardHeader className = {classes.userCard} avatar = {
              <Avatar style = {{position: "absolute"}} alt = "img_perfil" src = {urlFor(content.usuario.image.asset._ref).width(60).url()}/> } 
            />
            <CardContent>
              <Typography gutterBottom variant = "body2" component = "p" className = {classes.perfilName}>
                {content.usuario.name}
              </Typography>
            </CardContent>
{/*             <CardActions align = "right">
              <Button variant = "contained" color = "secondary">
                Ver Perfil
              </Button>
            </CardActions> */}
          </Card>
          <Typography gutterBottom variant = "h4" component = "h2" align = "center" className={classes.title} style={{paddingTop:7}}>
            Últimos Post
          </Typography>
          {devocionales.map(devocional => (
            <Card className = {[classes.root_card_blog, classes.mt10]} style ={{backgroundColor: "#fff", cursor: 'pointer'}}>
              <Typography gutterBottom variant = "body2" component = "p" style={{fontWeight: 'bold'}}>
                {devocional.title}
              </Typography>
              <Typography gutterBottom variant = "body2" component = "p">
                autor: {devocional.usuario.name}
              </Typography>
              <div align="right">
              <Link to={`/devocional/${devocional._id}`}>          
                <Button variant = "contained" color = "secondary" title="Ver el Contenido">
                  <FaArrowRight/>
                </Button>
              </Link>    
              </div>
            </Card>
            ))
          }
        </Grid>
      </Grid>
    </div>
  )
};

export default Devocional;
