import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { devocional } from "../shared/devocional";
import { Button } from "../components/Button";
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
  //const [devocionales, setDevocionales] = useState([])

/*   useEffect(() => {
    Get(`${UrlServer}devocionales`, (res) => {
      let data = JSON.parse(res);
      console.log(data)
      setDevocionales(data.posts)
    })
  }, [props]) */

  return (
    <Box className={classes.root} id="devocionales">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Typography className={classes.title} variant="h2" component="h2">
          Devocionales
        </Typography>
      </Grid>
      <div className="slider">
        <div className="mask">
          <ul>
            {devocional.map((item, index) => (
              <li className={`anim${index + 1}`} key={index} style={{borderLeft: "4px solid #b10404", padding: 20, backgroundColor: 'rgba(255,255,255, 0.7)', borderRadius: '4px 4px 3px', height: "40vh !important"}}>
                <div className="quote">{item.title}</div>
                <div className="source">- {item.extracto}</div>
                <section>
                  <img src={item.userProfile} alt={item.user} />
                  <span>
                    Posted by <strong>{item.user}</strong>
                  </span>
                </section>
                <div className={classes.paddingButton}>
                  <Link to={`/devocional/${item.id}`}>          
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
