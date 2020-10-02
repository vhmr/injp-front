import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export default function SimpleMenu() {
  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    ul: {
      display: "inline-flex",
      textDecoration: "none",
      color: "#fff",
    },
    li: {
      color: "#fff",
      textDecoration: "none",
      paddingRight: 30,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <ul className={classes.ul}>
        <Link to="/" className={classes.li}>
          Home
        </Link>

        <Link to="/about" className={classes.li}>
          Nosotros
        </Link>

        <Link to="/devocionales" className={classes.li}>
          Devocionales
        </Link>

        <Link to="/predicaciones" className={classes.li}>
          Predicaciones
        </Link>

        <Link to="/ministerios" className={classes.li}>
          Ministerios
        </Link>

        <Link to="/contact" className={classes.li}>
          Contact
        </Link>
      </ul>
    </div>
  );
}
