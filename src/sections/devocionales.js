import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "../components/Button";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from '../sanity'
import DevoContext from '../context/devocionalCotext'

import "../devo.css";

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
  paddingButton: {
    textAlign: 'center',
    marginTop: 30
  }
}));

const Devocionales = (props) => {
  const classes = useStyles();
  const [devocionales, setDevocionales] = useState([])
  const { devo, setDevo} = useContext(DevoContext)
	const builder = imageUrlBuilder(sanityClient);
	const urlFor = (source) => {
	  return builder.image(source);
	}

  useEffect(() => {
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
		  .then((data) => setDevo(data))
		  .catch(console.error);
  }, [])

  return (
    <Box className={classes.root} id="devocionales">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        sm={12}
      >
        <Typography className={classes.title} variant="h2" component="h2">
          Devocionales
        </Typography>
      </Grid>
      <div className="slider">
        <div className="mask">
          <ul>
            {devo.map((item, index) => (
              <li className={`anim${index + 1}`} key={index}>
                <div className="quote">{item.title}</div>
                <div className="source"> - {item.extracto}</div>
                <section style={{ paddingTop: 20, paddingLeft:20}}>
                  <img className="author_img" src={urlFor(item.usuario.image).width(60).url()} alt={item.usuario.name} />
                  <span>
                    Por <strong>{item.usuario.name}</strong>
                  </span>
                </section>
                <div className={classes.paddingButton}>
                  <Link to={`/devocional/${item._id}`}>          
                    <Button buttonSize="btn--medium" buttonStyle="btn--outline-dark">
                        Ver más...
                    </Button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default Devocionales;
