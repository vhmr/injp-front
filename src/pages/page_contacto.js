import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    googlemapcode: {
        border: 0
    }
}));

const AddressMap=()=>{
    const classes = useStyles();
    return (
        <div className={classes.googlemapcode}>
            <iframe src="https://www.google.com/maps/d/embed?mid=1SPcsvhy4xMtGJtszOLDFPC_e9L438-sF" width="100%" height="700"></iframe> 
       </div>
    );
}

const Contacto = () => {
    return (
        <AddressMap />
    )
}

export default Contacto