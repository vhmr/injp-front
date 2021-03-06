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
import { Get, UrlServer } from "../services/apiService";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#eef0f1",
    padding: 20
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
    fontWeight: "bold"
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

let n1 = 1419;
let n2 = 827;
let url = window.location.href;
let pique = url.split("/");
let id = pique[4];

const Devocional = (props) => {
  const [style1, setStyle1] = useState({
    position: "fixed",
    right: 0,
    top: "15vh"
  });
  const [control, setControl] = useState(false)
  const [content, setContent] = useState([])
  const [user, setUser] = useState([])
  const [tags, setTags] = useState([])

  const classes = useStyles();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })

    Get(`${UrlServer}post/${id}`, (res) => {
      let data = JSON.parse(res);
      console.log(data.tags)
      setContent(data.post[0])
      setUser(data.post[0].user)
      setTags(data.tags)
    })

  }, []);

  window.onscroll = () => {
    let y = window.scrollY;
    let scroll = document.getElementById("divScroll").offsetTop

    if (y >= (scroll - 580)) {
      if (control !== true) setStyle1({
        position: "absolute",
        right: 0,
        top: y + 90
      })
      setControl(true)
    }else{
      setStyle1({
        position: "fixed",
        right: 0,
        top: "15vh"
      })
      setControl(false)
    }
  };

  /*let allDevs = () => {

    return (
      content.map(option => (
        <Card className={[classes.card_blogs, classes.mt5]} key = {option.id}>
          <CardHeader avatar = {
            <Avatar alt = "img_perfil" src = {option.userProfile}/> } title = {<strong>{option.title}</strong>} subheader = "September 14, 2016"
          />
          <CardContent>
            <Typography variant = "body2" color = "textSecondary" component = "p">
              {option.extract}
            </Typography>
            <div className = {classes.line}></div>
          </CardContent>
        </Card>
      ))
    )
  }*/

  return (
    <div className = {classes.root}>
      <Grid container spacing={3}>
        <Grid  item md = {1} spacing = {2}>

        </Grid>
        <Grid  item md = {8} spacing = {2}>
          <Card>
            <CardMedia component = "img" alt = "imagen_fondo" image = {content.image} className={classes.media}/>
            <CardContent>
              <Typography gutterBottom variant = "h3" component = "h2">
                {content.title}
              </Typography>
              <AvatarGroup maxc = {2}>
                <Avatar alt = "img_perfil" src = {user.name}/>
                <Typography variant = "body2" className = {classes.userName} color = "textSecondary" component = "p">
                  {user.name}
                  {tags.map(tag => ' - '+ tag.name + ' ')}
                </Typography>
              </AvatarGroup>
              <Typography variant = "body2" color = "textSecondary" component = "p">
                <div dangerouslySetInnerHTML = {{ __html: content.contenido }} style = {{lineHeight: 2}}/>
              </Typography>
            </CardContent>
          </Card>
          <div id = "divScroll"/>
          <div style = {{minHeight: 600}}></div>
        </Grid>
        <Grid item md = {3} spacing = {2} style = {style1}>
          <Card style = {{background: "rgba(0,0,0,0)"}}>
            <CardHeader className = {classes.userCard} avatar = {
              <Avatar style = {{position: "absolute"}} alt = "img_perfil" src = {user.name}/> } 
            />
            <CardContent>
              <Typography gutterBottom variant = "body2" component = "p" className = {classes.perfilName}>
                {user.name}
              </Typography>
            </CardContent>
            <CardActions align = "right">
              <Button variant = "contained" color = "secondary">
                Ver Perfil
              </Button>
            </CardActions>
          </Card>
          <Card className = {[classes.root_card_blog, classes.mt10]}>
            <Typography gutterBottom variant = "h4" component = "h2" align = "center">
              Últimos Post
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
};

export default Devocional;
