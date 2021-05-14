import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/banner4.png";
import { FaWallet, FaPhone, FaMailBulk, FaMapMarkerAlt  } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    googlemapcode: {
        border: 0
    },
    root: {
        flexGrow: 1,
        width: "100%",
        paddingTop: 0,
        paddingBottom: 40,
      },
      title: {
        paddingTop: 40,
        paddingBottom: 40,
      },
      parrafo: {
        padding: 30,
        fontSize: 20,
        justifyContent: "justify",
        textAlign: "center",
        lineHeight: 1.7
      },
      img: {
        width: "100%",
        height: "100%",
        borderRadius: "100%",
        boxShadow: "0, 5, 10, 0, #331ba8",
      },
      paddingButton: {
        textAlign: 'center'
      }
}));

const AddressMap=()=>{
    const classes = useStyles();
    return (
        <div className={classes.googlemapcode}>
            <iframe src="https://www.google.com/maps/d/embed?mid=1SPcsvhy4xMtGJtszOLDFPC_e9L438-sF" width="100%" height="700"></iframe> 
           <Box className={classes.root}>
           <Grid
             container
             direction="row"
             justify="center"
             alignItems="center"
             xs={12}
           >
             <Typography className={classes.title} variant="h4" component="h4">
               Información de contacto
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
             >
               <div className={classes.parrafo}>
                    Para comunicarte con nosotros, estos son nuestros datos de contacto:<br></br>
                    <FaPhone /> 0592385028592<br></br>
                    <FaMailBulk /> nueva.jerusalenvzla@gmail.com<br></br>
                    <FaMapMarkerAlt />                 
               </div>
               <div className={classes.parrafo}>
                    Nuestros datos bancarios son:<br></br>
                    <FaPhone /> 0592385028592<br></br>
                    <FaMailBulk /> nueva.jerusalenvzla@gmail.com<br></br>
                    <FaWallet /> cuentas:                
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
               <img
                 className={classes.img}
                 src={logo}
                 alt="iglesia"
               />
             </Grid>
           </Grid>
         </Box>
       </div>
    );
}

const Contacto = () => {
    return (
        <AddressMap />
    )
}

export default Contacto