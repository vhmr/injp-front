import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import { makeStyles } from "@material-ui/core/styles";
import { devocional } from "../shared/devocional";
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
  media: {
    height: 350,
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

let url = window.location.href;
let pique = url.split("/");
let id = pique[4];

const Devocional = () => {

  const classes = useStyles();
  const content = devocional.find( m => m.id === id)

  console.log(content)

  return (
    <div className = {classes.root}>
      <Grid container spacing={3}>
        <Grid  item md = {1} spacing = {2}>

        </Grid>
        <Grid  item md = {8} spacing = {2}>
          <Card>
            <CardMedia component = "img" alt = "imagen_fondo" image ={content.image} className={classes.media}/>
            <CardContent>
              <Typography gutterBottom variant="h3" component="h2" className={classes.title}>
                {content.title}
              </Typography>
              <AvatarGroup maxc = {2} style={{ paddingBottom: '20px'}}>
                <Avatar alt = "img_perfil" src = {content.userProfile}/>
                <Typography variant = "body2" className = {classes.userName} color = "textSecondary" component = "p">
                  {content.user}
                </Typography>
              </AvatarGroup>
              <Typography color = "textSecondary" component = "p">
                <div dangerouslySetInnerHTML = {{ __html: content.description }} className={classes.content}/>
              </Typography>
            </CardContent>
          </Card>
          <div id = "divScroll"/>
        </Grid>
        <Grid item md = {3} spacing = {2}>
          <Card style = {{background: "rgba(0,0,0,0)"}}>
            <CardHeader className = {classes.userCard} avatar = {
              <Avatar style = {{position: "absolute"}} alt = "img_perfil" src = {content.userProfile}/> } 
            />
            <CardContent>
              <Typography gutterBottom variant = "body2" component = "p" className = {classes.perfilName}>
                {content.user}
              </Typography>
            </CardContent>
            <CardActions align = "right">
              <Button variant = "contained" color = "secondary">
                Ver Perfil
              </Button>
            </CardActions>
          </Card>
          <Card className = {[classes.root_card_blog, classes.mt10]}>
            <Typography gutterBottom variant = "h4" component = "h2" align = "center" className={classes.title}>
              Últimos Post
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
};

export default Devocional;
